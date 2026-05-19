export default function TechnologyPage() {
  return (
    <section className="relative min-h-screen w-full bg-[#05070d] text-white overflow-hidden">

      {/* 🌌 GLOBAL LIGHT */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      {/* 🌫 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-28">

        {/* HERO */}
        <div className="text-center">

          <div className="inline-flex px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-300 text-xs tracking-[0.3em]">
            ARGOS TECHNOLOGY CORE
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight tracking-tight
            text-transparent bg-clip-text
            animate-[gradient_6s_linear_infinite]
            bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]
            bg-[length:200%_auto]">
            Secure OTA <br />
            Infrastructure
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            IoT 디바이스와 OTA 시스템을 통합한 엔터프라이즈 보안 아키텍처
          </p>

        </div>

        {/* FEATURE PANEL */}
        <div className="mt-24 flex justify-center">

          <div className="w-full max-w-[1900px] rounded-3xl
            border border-white/10
            bg-white/[0.05]
            backdrop-blur-xl
            px-8 md:px-12 py-14
            transition
            hover:shadow-[0_0_60px_rgba(34,211,238,0.08)]">

            {/* TITLE */}
            <div className="text-center max-w-2xl mx-auto">

              <h2 className="text-3xl font-semibold text-white tracking-tight">
                OTA Deployment Engine
              </h2>

              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

              <p className="mt-5 text-gray-400">
                글로벌 IoT 디바이스 펌웨어를 안전하게 배포하는 핵심 시스템
              </p>

            </div>

            {/* GRID */}
            <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

              {/* 1 */}
              <div>
                <h3 className="text-white font-medium">Security Layer</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  펌웨어 배포 과정 전반에서 디지털 서명 기반 검증을 수행하여
                  변조된 코드나 비인가 펌웨어가 디바이스에 설치되는 것을 원천 차단합니다.
                </p>
              </div>

              {/* 2 */}
              <div>
                <h3 className="text-white font-medium">Device Control</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  카메라, 블랙박스, 웹캠 등 다양한 IoT 디바이스 상태를 실시간으로 관리하며
                  CPU, 메모리, 네트워크 정보를 통합적으로 모니터링합니다.
                </p>
              </div>

              {/* 3 */}
              <div>
                <h3 className="text-white font-medium">Partner Ecosystem</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  드론 및 웹캠 기업과 연동되는 B2B OTA 플랫폼으로
                  산업별 보안 정책과 API 구조를 제공합니다.
                </p>
              </div>

              {/* 4 */}
              <div>
                <h3 className="text-white font-medium">Factory Pipeline</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  제조 단계에서 펌웨어를 사전 탑재하고 버전 관리 및 배포 이력을
                  자동화하는 생산 연동 시스템입니다.
                </p>
              </div>

            </div>

            

          </div>
        </div>
        {/* FOOTER STRIP */}
            <div className="mt-24 flex flex-wrap justify-center items-center gap-3 text-xs text-gray-500">
              <span>Firmware</span>
              <span className="text-gray-700">•</span>
              <span>Keys</span>
              <span className="text-gray-700">•</span>
              <span>Certificates</span>
              <span className="text-gray-700">•</span>
              <span>Data Streams</span>
              <span className="text-gray-700">•</span>
              <span>Servers</span>
            </div>

      </div>
    </section>
  );
}