import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import { SignJWT } from "jose";

const pool = new Pool({
  host: "10.10.4.2",
  port: 5432,
  database: "argos",
  user: "argos_admin",
  password: "Argos@2024!",
});

const JWT_SECRET = new TextEncoder().encode("argos-secret-key-2024");

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "이메일과 비밀번호를 입력해주세요." }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT customer_id, username, email, tenant_id, account_status FROM customers WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "이메일 또는 비밀번호가 올바르지 않습니다." }, { status: 401 });
    }

    const user = result.rows[0];

    if (user.account_status !== "active") {
      return NextResponse.json({ error: "비활성화된 계정입니다." }, { status: 403 });
    }

    // last_login_at, last_access_ip 업데이트
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    await client.query(
      "UPDATE customers SET last_login_at = NOW(), last_access_ip = $1 WHERE customer_id = $2",
      [ip, user.customer_id]
    );

    // JWT 발급
    const token = await new SignJWT({
      customer_id: user.customer_id,
      username: user.username,
      email: user.email,
      tenant_id: user.tenant_id,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(JWT_SECRET);

    return NextResponse.json({
      message: "로그인 성공",
      token,
      user: {
        customer_id: user.customer_id,
        username: user.username,
        email: user.email,
        tenant_id: user.tenant_id,
      },
    });
  } catch (e: any) {
    console.error("login error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  } finally {
    client.release();
  }
}
