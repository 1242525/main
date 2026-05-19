"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", address: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.address,
          email: form.email,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.detail || "회원가입에 실패했습니다.");
        return;
      }
      router.push("/signin?registered=1");
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
              Create an account
            </h1>
          </div>
          <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                <input id="name" type="text" className="form-input w-full" placeholder="Your full name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="address">
                  Address
                </label>
                <input id="address" type="text" className="form-input w-full" placeholder="Your address" value={form.address} onChange={handleChange} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input id="email" type="email" className="form-input w-full" placeholder="Your work email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200/65" htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input id="password" type="password" className="form-input w-full" placeholder="Password (at least 10 characters)" value={form.password} onChange={handleChange} minLength={10} required />
              </div>
            </div>
            {error && <p className="mt-4 text-sm text-red-400 text-center">{error}</p>}
            <div className="mt-6 space-y-5">
              <button type="submit" disabled={loading} className="btn w-full bg-cyan-300 bg-[length:100%_100%] bg-[bottom] text-black shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50">
                {loading ? "처리 중..." : "Register"}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Already have an account?{" "}
            <Link className="font-medium text-cyan-300" href="/signin">Sign in</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
