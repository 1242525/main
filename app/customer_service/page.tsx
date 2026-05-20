"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const menu = [
  { name: "공지사항", path: "/notice" },
  { name: "자주 묻는 질문", path: "/customer_service" },
  { name: "1:1 문의", path: "/personal_question" },
  { name: "제품 매뉴얼", path: "/manual" },
];

export default function InquiryPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("일반 문의");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [serialNumber, setSerialNumber] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  const handleSubmit = async () => {
    if (!isLoggedIn) return;

    if (!title.trim() || !content.trim()) {
      setError("제목과 문의 내용을 입력해주세요.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("access_token");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", category);
      if (serialNumber) formData.append("serial_number", serialNumber);
      files.forEach((file) => formData.append("files", file));

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.detail || "제출에 실패했습니다.");
        return;
      }

      setSuccess(true);
      setTitle("");
      setContent("");
      setFiles([]);
    } catch (e) {
      setError("서버 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>
      <header className="border-b border-white/10 bg-[#05070d]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="font-bold tracking-widest text-cyan-300">CUSTOMER CENTER</div>
        </div>
      </header>
      <div className="relative max-w-7xl mx-auto flex">
        <aside className="w-64 border-r border-white/10 min-h-screen p-6 hidden md:block">
          <ul className="space-y-4 text-sm text-gray-400">
            {menu.map((item, i) => (
              <li key={i} onClick={() => router.push(item.path)}
                className={`cursor-pointer transition ${item.name === "1:1 문의" ? "text-cyan-300 font-medium" : "hover:text-white"}`}>
                {item.name}
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 p-10 max-w-4xl">
          <div className="mb-10">
            <div className="text-xs text-gray-500">Support / Help Center</div>
            <h1 className="text-3xl font-semibold mt-2">1:1 문의</h1>
            <p className="text-gray-400 text-sm mt-3">문의 내용을 작성하면 빠르게 답변해드립니다</p>
          </div>
          {!isLoggedIn && (
            <div className="mb-6 px-4 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-400 text-sm">
              로그인이 필요한 서비스입니다.{" "}
              <span className="underline cursor-pointer hover:text-yellow-300" onClick={() => router.push("/signin")}>
                로그인하러 가기
              </span>
            </div>
          )}
          {success && (
            <div className="mb-6 px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm">
              문의가 성공적으로 제출됐습니다. 빠르게 답변해드리겠습니다.
            </div>
          )}
          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">문의 유형</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} disabled={!isLoggedIn}
                className="w-full bg-[#0b0f1a] border border-white/10 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-cyan-400 disabled:opacity-50">
                <option className="bg-white text-black">일반 문의</option>
                <option className="bg-white text-black">기술 지원</option>
                <option className="bg-white text-black">결제/구매</option>
                <option className="bg-white text-black">버그 신고</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">기기 시리얼 넘버</label>
              <input value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} placeholder="기기 시리얼 넘버를 입력하세요" disabled={!isLoggedIn}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50" />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">제목 <span className="text-red-500">*</span></label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="문의 제목을 입력하세요" disabled={!isLoggedIn}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50" />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">문의 내용 <span className="text-red-500">*</span></label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="문의 내용을 자세히 작성해주세요" disabled={!isLoggedIn}
                className="w-full h-48 bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50" />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">첨부 파일</label>
              <input type="file" id="fileUpload" className="hidden" multiple disabled={!isLoggedIn}
                onChange={(e) => { if (e.target.files) setFiles(Array.from(e.target.files)); }} />
              <label htmlFor="fileUpload"
                className={`block border border-dashed border-white/10 rounded-lg p-6 text-center transition ${isLoggedIn ? "hover:border-cyan-400 cursor-pointer" : "opacity-50 cursor-not-allowed"}`}>
                <div className="text-gray-500 mb-2">{files.length > 0 ? "선택된 파일" : "파일을 드래그하거나 클릭하여 업로드"}</div>
                {files.length > 0 && (
                  <div className="mt-3 space-y-1 text-sm">
                    {files.map((file, i) => <div key={i} className="text-cyan-300">✔ {file.name}</div>)}
                  </div>
                )}
              </label>
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <div className="pt-4">
              <button onClick={handleSubmit} disabled={!isLoggedIn || loading}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-lg text-black font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "제출 중..." : "문의 제출"}
              </button>
            </div>
          </div>
        </main>
      </div>
      <footer className="border-t border-white/10 mt-20 py-10 text-center text-xs text-gray-500">
        © ARGUS Support Center
      </footer>
    </div>
  );
}
