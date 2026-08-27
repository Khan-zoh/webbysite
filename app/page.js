import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:gap-12 xl:gap-24">
        <Sidebar />
        <main className="pb-20 lg:min-w-0 lg:flex-1 lg:py-24">
          <About />
          <Work />
          <Experience />
        </main>
      </div>
      <Marquee />
      <Contact />
    </>
  );
}
