export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      
      <Hero /><div className="relative z-10 mx-auto -mt-1 mb-6 w-full max-w-[1300px] h-px bg-cyan-300/40 shadow-[0_0_10px_rgba(34,211,238,0.6)] translate-y-[2px]" />

      <Workflows />
      <Cta />
    </>
  );
}
