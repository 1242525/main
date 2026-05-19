import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  host: "10.10.4.2",
  port: 5432,
  database: "argos",
  user: "argos_admin",
  password: "Argos@2024!",
});

export async function POST(req: NextRequest) {
  const { name, email, password, address } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "필수 항목을 입력해주세요." }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    // 이메일 중복 체크
    const existing = await client.query(
      "SELECT customer_id FROM customers WHERE email = $1",
      [email]
    );
    if (existing.rows.length > 0) {
      return NextResponse.json({ error: "이미 사용 중인 이메일입니다." }, { status: 409 });
    }

    // tenant 목록에서 랜덤 배정
    const tenantRes = await client.query(
      "SELECT tenant_id FROM tenants ORDER BY RANDOM() LIMIT 1"
    );
    const tenant_id = tenantRes.rows[0]?.tenant_id ?? "tenant-default";

    // customer_id 자동 생성
    const customer_id = `CUST-${Date.now()}`;

    await client.query(
      `INSERT INTO customers 
        (customer_id, tenant_id, username, email, account_status)
       VALUES ($1, $2, $3, $4, 'active')`,
      [customer_id, tenant_id, name, email]
    );

    return NextResponse.json({ message: "회원가입이 완료됐습니다.", customer_id });
  } catch (e: any) {
    console.error("register error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  } finally {
    client.release();
  }
}
