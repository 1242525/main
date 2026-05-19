import Image from "next/image";

export default function Cta() {
  return (
    <section className="relative overflow-visible">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
<div className="relative z-10 mx-auto -mt-1 mb-6 h-px w-full max-w-[1600px] bg-cyan-300/40 shadow-[0_0_10px_rgba(34,211,238,0.6)] translate-y-[2px]" />
            
            
            
          </div>
        </div>
        {/* FOOTER STRIP */}
            <div className="mt-3 mb-10 flex flex-wrap justify-center items-center gap-3 text-xs text-gray-500">
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

     
    </section>
  );
}
