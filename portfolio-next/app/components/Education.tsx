"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedGPA({ target }: { target: number }) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                const start = performance.now();
                const dur = 2500;
                const step = (now: number) => {
                    const p = Math.min((now - start) / dur, 1);
                    const eased = 1 - Math.pow(1 - p, 3);
                    setValue(eased * target);
                    if (p < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });
        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);
    return <span ref={ref}>{value.toFixed(2)}</span>;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Education() {
    return (
        <section className="py-24 noise-overlay flex flex-col items-center w-full" id="education" style={{ position: "relative", overflow: "hidden" }}>
            <div className="floating-shape-slow" style={{ top: "10%", right: "8%", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)", opacity: 0.5 }} />
            <div className="floating-shape" style={{ bottom: "15%", left: "5%", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", opacity: 0.4, animationDelay: "5s" }} />

            <div className="max-w-[1160px] mx-auto px-8 relative z-10 flex flex-col items-center w-full">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-line mb-16 text-center w-full">
                    <h2 className="section-title"><span className="accent">Education</span></h2>
                </motion.div>

                <div className="flex flex-col gap-8 items-center max-w-4xl mx-auto w-full">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
                        className="flex justify-center w-full">
                        <div className="glass-card shine-sweep text-center" style={{ padding: "2rem 2.5rem", borderRadius: "var(--r)", maxWidth: "680px", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div className="flex flex-col gap-1 mb-4 items-center">
                                <h3 style={{ fontFamily: "var(--fh)", fontSize: "1.2rem", fontWeight: 700, color: "var(--t1)" }}>B.Sc. Naval Architecture &amp; Ocean Engineering</h3>
                                <p style={{ fontFamily: "var(--fb)", fontSize: "0.92rem", color: "var(--cy)", fontWeight: 500 }}>Istanbul Technical University</p>
                                <p style={{ fontFamily: "var(--fb)", fontSize: "0.82rem", color: "var(--t3)" }}>Expected Graduation — July - 2026</p>
                            </div>

                            <div className="flex items-baseline justify-center gap-2 mb-4" style={{ padding: "0.75rem 1rem", background: "var(--cyd)", borderRadius: "8px", border: "1px solid var(--bdr)" }}>
                                <span style={{ fontFamily: "var(--fh)", fontSize: "1.8rem", fontWeight: 700, color: "var(--cy)", lineHeight: 1 }}><AnimatedGPA target={3.26} /></span>
                                <span style={{ fontFamily: "var(--fb)", fontSize: "0.85rem", color: "var(--t3)" }}>/ 4.00 GPA</span>
                            </div>

                            <div>
                                <p style={{ fontFamily: "var(--fb)", fontSize: "0.78rem", color: "var(--t3)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.6rem", fontWeight: 500 }}>Activities &amp; Clubs</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["⚓ ITU Shipbuilding Engineering Club", "🛡️ ITU SAVTEK — Defense Technologies"].map((club) => (
                                        <span key={club} className="tech-tag">{club}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
                        className="flex justify-center w-full">
                        <div className="glass-card shine-sweep text-center" style={{ padding: "2rem 2.5rem", borderRadius: "var(--r)", maxWidth: "680px", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div className="flex flex-col gap-1 mb-4 items-center">
                                <h3 style={{ fontFamily: "var(--fh)", fontSize: "1.2rem", fontWeight: 700, color: "var(--t1)" }}>High-School Diploma</h3>
                                <p style={{ fontFamily: "var(--fb)", fontSize: "0.92rem", color: "var(--bl)", fontWeight: 500 }}>Erbil Koru Anatolian High School</p>
                                <p style={{ fontFamily: "var(--fb)", fontSize: "0.82rem", color: "var(--t3)" }}>Konya, Türkiye | 09/2017 – 07/2021</p>
                            </div>

                            <div className="flex items-baseline justify-center gap-2 mb-4" style={{ padding: "0.75rem 1rem", background: "var(--bld)", borderRadius: "8px", border: "1px solid var(--bdr)" }}>
                                <span style={{ fontFamily: "var(--fh)", fontSize: "1.8rem", fontWeight: 700, color: "var(--bl)", lineHeight: 1 }}><AnimatedGPA target={92.65} /></span>
                                <span style={{ fontFamily: "var(--fb)", fontSize: "0.85rem", color: "var(--t3)" }}>/ 100 GPA</span>
                            </div>

                            <div>
                                <p style={{ fontFamily: "var(--fb)", fontSize: "0.78rem", color: "var(--t3)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.6rem", fontWeight: 500 }}>Achievements &amp; Activities</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <span className="tech-tag">🎓 2nd in Graduating Class</span>
                                    <span className="tech-tag">🥇 Volleyball Tournament 1st Place</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
