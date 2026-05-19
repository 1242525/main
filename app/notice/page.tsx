"use client";

import { useRouter } from "next/navigation";

const menu = [
  { name: "공지사항", path: "/notice" },
  { name: "자주 묻는 질문", path: "/customer_service" },
  { name: "1:1 문의", path: "/personal_question" },
  { name: "제품 매뉴얼", path: "/manual" },
];

const notices = [
  {
    title: "시스템 점검 안내",
    date: "2026-04-30",
    content: "보다 안정적인 서비스 제공을 위해 시스템 점검이 진행됩니다.",
  },
  {
    title: "신규 기능 업데이트 안내",
    date: "2026-04-25",
    content: "ARGUS OTA 기능이 새롭게 추가되었습니다.",
  },
  {
    title: "보안 패치 적용 안내",
    date: "2026-04-20",
    content: "중요 보안 취약점이 수정되었습니다.",
  },
];

export default function NoticePage() {
  const router = useRouter();

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
                  item.name === "공지사항"
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
        <main className="flex-1 p-10 max-w-4xl">

          {/* TITLE */}
          <div className="mb-10">
            <div className="text-xs text-gray-500">
              Support / Help Center
            </div>

            <h1 className="text-3xl font-semibold mt-2">
              공지사항
            </h1>

            <p className="text-gray-400 text-sm mt-3">
              ARGUS 서비스의 주요 소식을 확인하세요
            </p>
          </div>

          {/* NOTICE LIST */}
          <div className="border-t border-white/10">

            {notices.map((item, i) => (
              <div
                key={i}
                className="border-b border-white/10 py-6 cursor-pointer hover:bg-white/5 transition px-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-white text-sm font-medium">
                    {item.title}
                  </h2>

                  <span className="text-xs text-gray-500">
                    {item.date}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mt-2">
                  {item.content}
                </p>
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