import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Coursework from "@/components/coursework"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sidhant Rohatgi | Portfolio",
  description: "Researcher, Product Manager, and Developer",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Coursework />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

