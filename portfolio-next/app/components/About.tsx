"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

function TiltCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const handleMouse = useCallback((e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    }, []);
    const reset = useCallback(() => {
        if (ref.current) ref.current.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
    }, []);
    return (
        <div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} style={{ transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)" }}>
            {children}
        </div>
    );
}

function AnimatedNumber({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                const s = performance.now();
                const step = (now: number) => {
                    const p = Math.min((now - s) / 2000, 1);
                    const eased = 1 - Math.pow(1 - p, 3);
                    setValue(eased * target);
                    if (p < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [target]);
    return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>;
}

const skills = [
    {
        title: "Analysis",
        tags: [
            { name: "ANSYS Fluent", pct: 70 },
            { name: "STAR-CCM+", pct: 85 },
            { name: "Maxsurf", pct: 80 },
        ],
        color: "var(--cy)",
    },
    {
        title: "Design & Modeling",
        tags: [
            { name: "SolidWorks", pct: 85 },
            { name: "Rhinoceros 3D", pct: 90 },
            { name: "AutoCAD", pct: 65 },
        ],
        color: "var(--bl)",
    },
    {
        title: "Programming",
        tags: [
            { name: "C / C++", pct: 65 },
            { name: "Python", pct: 80 },
            { name: "MATLAB", pct: 75 },
            { name: "Arduino", pct: 70 },
        ],
        color: "var(--or)",
    },
    {
        title: "Languages",
        tags: [
            { name: "Turkish — Native", pct: 100 },
            { name: "English — Advanced", pct: 88 },
            { name: "German — Intermediate", pct: 50 },
        ],
        color: "var(--cy)",
    },
    {
        title: "AI Assistants",
        tags: [
            { name: "ChatGPT+" },
            { name: "Claude" },
            { name: "Gemini Pro" },
        ],
        color: "var(--bl)",
    },
];

const stats = [
    { value: 3.26, label: "CGPA", decimals: 2 },
    { value: 6, label: "CFD Projects", decimals: 0 },
    { value: 3, label: "Internships", decimals: 0 },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
    return (
        <section className="py-24 noise-overlay flex flex-col items-center w-full" id="about" style={{ background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
            <div className="aurora-glow" style={{ top: "-10%", right: "10%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)" }} />
            <div className="aurora-glow" style={{ bottom: "-5%", left: "20%", background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)", animationDelay: "6s" }} />

            <div className="max-w-[1160px] mx-auto px-8 relative z-10 flex flex-col items-center w-full">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-line mb-16 text-center w-full">
                    <h2 className="section-title">
                        About <span className="accent">Me</span>
                    </h2>
                </motion.div>

                {/* Bio */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }} className="mb-16 max-w-3xl w-full text-center">
                    <div>
                        <p style={{ fontFamily: "var(--fb)", fontSize: "0.95rem", color: "var(--t2)", lineHeight: 1.8 }}>
                            Senior-year <span className="accent-cy">Naval Architecture &amp; Ocean Engineering</span> student at Istanbul Technical University
                            with hands-on experience in <span className="accent-bl">CFD simulation</span>,{" "}
                            <span className="accent-or">ship design</span>, and research-grade software development.
                            Passionate about bridging engineering analysis with modern technology.
                        </p>
                    </div>
                </motion.div>

                {/* Stats grid */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } }} className="grid grid-cols-3 gap-4 mb-16 max-w-lg w-full">
                    {stats.map((s, i) => (
                        <div key={s.label} className="glass-card shine-sweep text-center" style={{ padding: "1.2rem 0.8rem", borderRadius: "var(--r)" }}>
                            <div style={{ fontFamily: "var(--fh)", fontSize: "1.8rem", fontWeight: 700, color: i === 0 ? "var(--cy)" : i === 1 ? "var(--bl)" : "var(--or)", lineHeight: 1, marginBottom: "0.3rem" }}>
                                <AnimatedNumber target={s.value} suffix={i === 0 ? "" : "+"} decimals={s.decimals} />
                            </div>
                            <span style={{ fontFamily: "var(--fb)", fontSize: "0.72rem", color: "var(--t3)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 500 }}>{s.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
                    {skills.map((group, gi) => (
                        <motion.div key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: gi * 0.1 } } }}>
                            <TiltCard>
                                <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "var(--r)", height: "100%" }}>
                                    <h3 style={{ fontFamily: "var(--fh)", fontSize: "0.95rem", fontWeight: 700, color: group.color, marginBottom: "1rem", textAlign: "center" }}>{group.title}</h3>
                                    <div className="flex flex-col gap-3">
                                        {group.tags.map((tag: any) => (
                                            <div key={tag.name}>
                                                <div className="flex justify-center mb-1">
                                                    <span style={{ fontFamily: "var(--fb)", fontSize: "0.82rem", color: "var(--t2)", fontWeight: 500, textAlign: "center" }}>
                                                        {tag.name} {tag.pct && <span style={{ fontFamily: "var(--fm)", fontSize: "0.72rem", color: "var(--t3)" }}>({tag.pct}%)</span>}
                                                    </span>
                                                </div>
                                                {tag.pct && (
                                                    <div className="skill-progress">
                                                        <div className="skill-progress-fill" style={{ width: `${tag.pct}%`, background: `linear-gradient(90deg, ${group.color}, ${group.color}80)` }} />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
