"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const menu = [
  { name: "공지사항", path: "/notice" },
  { name: "자주 묻는 질문", path: "/customer_service" },
  { name: "1:1 문의", path: "/personal_question" },
  { name: "제품 매뉴얼", path: "/manual" },
];

const manuals = [
  {
    title: "ARGUS IoT 사용자 매뉴얼",
    category: "카메라",
    date: "2026-04-10",
  },
  {
    title: "ARGUS OTA 업데이트 가이드",
    category: "펌웨어",
    date: "2026-04-15",
  },
  {
    title: "ARGUS 보안 설정 가이드",
    category: "보안",
    date: "2026-04-20",
  },
 
];

export default function ManualPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filtered = manuals.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#05070d] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#05070d]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5">
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
                onClick={() => router.push(item.path)}
                className={`cursor-pointer transition ${
                  item.name === "제품 매뉴얼"
                    ? "text-cyan-300 font-medium"
                    : "hover:text-white"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-10 max-w-5xl">

          {/* TITLE */}
          <div className="mb-10">
            <div className="text-xs text-gray-500">
              Support / Help Center
            </div>

            <h1 className="text-3xl font-semibold mt-2">
              제품 매뉴얼
            </h1>

            <p className="text-gray-400 text-sm mt-3">
              제품 사용 방법 및 기술 문서를 확인하세요
            </p>
          </div>

          {/* SEARCH */}
          <div className="mb-8 max-w-xl">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="매뉴얼 검색..."
              className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg
              text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* LIST */}
          <div className="grid gap-4">

            {filtered.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition flex justify-between items-center"
              >
                <div>
                  <div className="text-xs text-cyan-300 mb-1">
                    {item.category}
                  </div>

                  <h2 className="text-white text-sm font-medium">
                    {item.title}
                  </h2>

                  <div className="text-xs text-gray-500 mt-1">
                    {item.date}
                  </div>
                </div>

                {/* 다운로드 버튼 */}
                <button className="px-4 py-2 text-sm bg-cyan-500 hover:bg-cyan-400 transition rounded-lg text-black">
                  다운로드
                </button>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-gray-500 text-sm">
                검색 결과가 없습니다
              </div>
            )}

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