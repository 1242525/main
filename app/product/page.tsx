"use client";

import { useRouter } from "next/navigation";

const products = [
  {
    name: "ARGOS S6 blackbox",
    code: "AR-S6-2026",
    colors: ["#6b7280", "#9ca3af", "#374151"],
    storage: ["256GB", "512GB"],
    image: "/images/blackbox.png",
    tag: "NEW",
  },
  {
    name: "ARGOS HD WebCam PREBX",
    code: "AR-ZT-2026",
    colors: ["#111827","#ffffff"],
    storage: ["512GB"],
    image: "/images/box.png",
    tag: "NEW",
  },
  {
    name: "ARGOS Secure HomeCam RES-70S",
    code: "AR-ZF-2026",
    colors: ["#1e3a8a", "#374151", "#9ca3af"],
    storage: ["256GB", "512GB", "1TB"],
    image: "/images/homecam.png",
    tag: "NEW"
  },
  {
    name: "ARGOS AI Guard Cam RES-90A",
    code: "AR-S6-2026",
    colors: ["#171717", "#9ca3af", "#ffffff"],
    storage: ["256GB", "512GB"],
    image: "/images/product5.png",
    tag: "NEW",
  },
  {
    name: "ARGOS Z Surveillance RES-80X",
    code: "AR-ZT-2026",
    colors: ["#111827"],
    storage: ["512GB"],
    image: "/images/product6.png",
    tag: "NEW",
  },
  {
    name: "ARGOS Z blackbox RES-20F",
    code: "AR-ZF-2026",
    colors: ["#5c30cc", "#374151", "#9ca3af"],
    storage: ["256GB", "512GB", "1TB"],
    image: "/images/product7.png",
    tag: "NEW"
  },
];

export default function ProductPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#05070d] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[1000px] h-[1000px] bg-cyan-500/10 blur-[180px] rounded-full" />
      </div>

      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#05070d]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="font-bold tracking-widest text-cyan-300">
            ARGOS PRODUCT
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative max-w-7xl mx-auto px-6 py-12">

        {/* TITLE */}
        <div className="mb-12">
          <h1 className="text-3xl font-semibold">제품</h1>
          <p className="text-gray-400 mt-2">
            ARGOS의 최신 제품을 확인하세요
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {products.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 
              hover:border-cyan-400 transition group cursor-pointer"
            >

              {/* TAG */}
              {item.tag && (
                <div className="text-xs text-cyan-300 mb-3">
                  {item.tag}
                </div>
              )}

              {/* IMAGE */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  className="w-120 h-80 object-contain 
                  group-hover:scale-105 transition"
                />
              </div>

              {/* NAME */}
              <h2 className="text-sm font-medium mb-2">
                {item.name}
              </h2>

              {/* CODE */}
              <div className="text-xs text-gray-500 mb-3">
                {item.code}
              </div>

            

              {/* COLOR */}
              <div className="flex gap-2 mb-4">
                {item.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-4 h-4 rounded-full border border-white/20"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* STORAGE */}
              <div className="flex gap-2 mb-4">
                {item.storage.map((s, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1 text-xs border border-white/20 rounded-md"
                  >
                    {s}
                  </div>
                ))}
              </div>

              

            </div>
          ))}

        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-20 py-10 text-center text-xs text-gray-500">
        © ARGUS
      </footer>

    </div>
  );
}