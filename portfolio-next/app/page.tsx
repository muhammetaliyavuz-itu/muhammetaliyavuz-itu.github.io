"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import ProjectModal from "@/app/components/ProjectModal";
import Education from "@/app/components/Education";
import Certifications from "@/app/components/Certifications";
import Contact from "@/app/components/Contact";
import References from "@/app/components/References";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import { projects, type Project } from "@/app/data/projects";

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openModal = (id: string) => {
    const found = projects.find((p) => p.id === id) ?? null;
    setActiveProject(found);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects onOpenModal={openModal} />
      <Education />
      <Certifications />
      <Contact />
      <References />
      <Footer />
      <ScrollToTop />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
