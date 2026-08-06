import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { VideoReel } from "@/components/sections/VideoReel";
import { Services } from "@/components/sections/Services";
import { Workflow } from "@/components/sections/Workflow";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <VideoReel />
      <Services />
      <Workflow />
      <Testimonials />
      <Contact />
    </>
  );
}
