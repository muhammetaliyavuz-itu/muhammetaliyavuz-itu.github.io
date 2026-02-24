"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
    }),
};

interface ProjectsProps {
    onOpenModal: (id: string) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
    return (
        <section className="py-24 noise-overlay flex flex-col items-center w-full" id="projects" style={{ background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
            <div className="aurora-glow" style={{ top: "10%", left: "-8%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", animationDelay: "5s" }} />

            <div className="max-w-[1160px] mx-auto px-8 relative z-10 flex flex-col items-center w-full">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-line mb-16 text-center w-full">
                    <h2 className="section-title">
                        Featured <span className="accent">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                    {projects.map((project, i) => (
                        <motion.div key={project.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={i} variants={fadeInUp}>
                            <div className="glass-card project-card shine-sweep gradient-border-wrap cursor-pointer group"
                                style={{ borderRadius: "16px", overflow: "hidden", transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease" }}
                                onClick={() => onOpenModal(project.id)}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px) scale(1.01)"; e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.35)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
                                {/* Image */}
                                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" style={{ objectPosition: project.imageStyle || "center" }} />
                                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, var(--card) 0%, transparent 60%), ${project.gradient}`, opacity: 0.8 }} />
                                    <span className="absolute top-4 left-4" style={{ padding: "0.3rem 0.8rem", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", borderRadius: "6px", fontFamily: "var(--fm)", fontSize: "0.72rem", color: "var(--cy)", letterSpacing: "1px", textTransform: "uppercase", border: "1px solid rgba(34,211,238,0.2)" }}>
                                        {project.badge}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="text-center" style={{ padding: "1.5rem 1.75rem 1.2rem" }}>
                                    <h3 style={{ fontFamily: "var(--fh)", fontSize: "1.1rem", fontWeight: 700, color: "var(--t1)", marginBottom: "0.6rem" }}>{project.title}</h3>
                                    <p style={{ fontFamily: "var(--fb)", color: "var(--t2)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1rem" }}>{project.shortDesc}</p>

                                    <div className="flex justify-center gap-5" style={{ borderTop: "1px solid var(--bdr)", paddingTop: "0.8rem" }}>
                                        {project.metrics.map((m) => (
                                            <div key={m.label} className="flex flex-col">
                                                <span style={{ fontFamily: "var(--fh)", fontSize: "1rem", fontWeight: 700, color: "var(--cy)" }}>{m.value}</span>
                                                <span style={{ fontFamily: "var(--fb)", fontSize: "0.68rem", color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 500 }}>{m.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ padding: "0.7rem", borderTop: "1px solid var(--bdr)", fontFamily: "var(--fb)", fontSize: "0.78rem", fontWeight: 600, color: "var(--cy)", letterSpacing: "0.3px" }}>
                                    View Details →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
