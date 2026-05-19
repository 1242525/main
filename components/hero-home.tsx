import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* 🌄 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ba.png')",
          backgroundSize: "100%"
        }}
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-10 py-32">

        <div className="flex justify-start items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="relative max-w-3xl space-y-4">

            {/* 🔥 배지 */}
            <div className="mb-3 inline-flex items-center gap-3 px-5 py-2 rounded-full 
            bg-[linear-gradient(180deg,rgba(0,255,200,0.15),rgba(0,255,200,0.03))]
            border border-cyan-400/20
            backdrop-blur-md
            shadow-[0_0_20px_rgba(0,255,200,0.15)]
            text-cyan-300 text-sm tracking-wide">

              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00fff0]" />
                SECURE
              </span>

              <span className="text-cyan-500">•</span>
              <span>RELIABLE</span>

              <span className="text-cyan-500">•</span>
              <span>AUTOMATED</span>
            </div>

            {/* TITLE */}
            <h1 className="text-7xl font-bold leading-tight tracking-tight
              text-transparent bg-clip-text
              animate-[gradient_6s_linear_infinite]
              bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]
              bg-[length:200%_auto]">
              OTA <br /> UPDATES
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-xl text-gray-400 max-w-2xl">
              Secure, Scalable Firmware Deployment<br />
              Across Cameras, blackbox, and IoT Devices
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-4">
              <button className="px-6 py-3 bg-cyan-300 text-black rounded-lg">
                Get Started
              </button>

              <button className="px-6 py-3 border border-gray-600 rounded-lg">
                Learn More
              </button>
            </div>

          </div>

          

        </div>
      </div>
    </section>
  );
}