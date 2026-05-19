"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // 👈 추가

const menu = [
  { name: "공지사항", path: "/notice" },
  { name: "자주 묻는 질문", path: "customer_service" },
  { name: "1:1 문의", path: "/personal_question" },
  { name: "제품 매뉴얼", path: "/manual" },
];

const faq = [
  { q: "제품 등록은 어떻게 하나요?", a: "ARGOS 앱에서 제품을 추가할 수 있습니다." },
  { q: "AS 접수는 어떻게 하나요?", a: "고객센터 또는 온라인으로 신청 가능합니다." },
  { q: "펌웨어 업데이트 방법은?", a: "설정 > 업데이트 메뉴에서 진행합니다." },
];

export default function CustomerPage() {
  const [open, setOpen] = useState<number | null>(null);
  const router = useRouter(); // 👈 추가

  return (
    <div className="min-h-screen bg-[#05070d] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#05070d]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="font-bold tracking-widest text-cyan-300">
            CUSTOMER CENTER
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="relative max-w-7xl mx-auto flex">

        {/* SIDEBAR */}
        <aside className="w-64 border-r border-white/10 min-h-screen p-6 hidden md:block">
          <ul className="space-y-4 text-sm text-gray-400">
            {menu.map((item, i) => (
              <li
                key={i}
                onClick={() => router.push(item.path)} // 👈 이동
                className="hover:text-white cursor-pointer transition"
              >
                {item.name} {/* 👈 수정 */}
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-10">

          {/* TITLE */}
          <div className="mb-10">
            <div className="text-xs text-gray-500">
              Support / Help Center
            </div>

            <h1 className="text-3xl font-semibold mt-2 text-white">
              FAQ
            </h1>

            <p className="text-gray-400 text-sm mt-3 max-w-xl">
              궁금한 내용을 검색하거나 기술 지원을 확인하세요
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative max-w-2xl">
            <input
              placeholder="Search support articles..."
              className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg
              text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* FAQ */}
          <div className="mt-10 border-t border-white/10">
            {faq.map((item, i) => (
              <div key={i} className="border-b border-white/10">

                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left py-5 flex justify-between items-center"
                >
                  <span className="text-sm text-gray-200">
                    {item.q}
                  </span>

                  <span className="text-cyan-300">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div className="pb-5 text-sm text-gray-400 leading-relaxed">
                    {item.a}
                  </div>
                )}

              </div>
            ))}
          </div>

        </main>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-20 py-10 text-center text-xs text-gray-500">
        © ARGUS Support Center
      </footer>

    </div>
  );
}