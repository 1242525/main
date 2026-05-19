"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const justRegistered = searchParams.get("registered") === "1";

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) router.push("/");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "로그인에 실패했습니다.");
        return;
      }
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      router.push("/");
    } catch (err) {
      setError("서버 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Welcome back
            </h1>
          </div>

          {justRegistered && (
            <p className="mx-auto max-w-[400px] mb-4 text-sm text-cyan-300 text-center">
              회원가입이 완료됐습니다! 로그인해주세요.
            </p>
          )}

          <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">Email</label>
                <input id="email" type="email" className="form-input w-full" placeholder="Your email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between gap-3">
                  <label className="block text-sm font-medium text-indigo-200/65" htmlFor="password">Password</label>
                  <Link className="text-sm text-gray-600 hover:underline" href="/reset-password">Forgot?</Link>
                </div>
                <input id="password" type="password" className="form-input w-full" placeholder="Your password" value={form.password} onChange={handleChange} required />
              </div>
            </div>
            {error && <p className="mt-4 text-sm text-red-400 text-center">{error}</p>}
            <div className="mt-6 space-y-5">
              <button type="submit" disabled={loading} className="btn w-full bg-cyan-300 bg-[length:100%_100%] bg-[bottom] text-black shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50">
                {loading ? "로그인 중..." : "Sign in"}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Don't you have an account?{" "}
            <Link className="font-medium text-cyan-300" href="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SignIn() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
