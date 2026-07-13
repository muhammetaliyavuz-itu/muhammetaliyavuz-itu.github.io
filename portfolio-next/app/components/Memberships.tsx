"use client";

import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Memberships() {
    return (
        <section className="py-24 noise-overlay flex flex-col items-center w-full" id="memberships" style={{ background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
            <div className="floating-shape-slow" style={{ top: "12%", left: "8%", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", opacity: 0.5 }} />

            <div className="max-w-[1160px] mx-auto px-8 relative z-10 flex flex-col items-center w-full">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-line mb-16 text-center w-full">
                    <h2 className="section-title"><span className="accent">Memberships</span></h2>
                </motion.div>

                <div className="flex justify-center w-full">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
                        className="flex justify-center w-full">
                        <div className="glass-card shine-sweep text-center" style={{ padding: "2rem 2.5rem", borderRadius: "var(--r)", maxWidth: "680px", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div className="flex flex-col gap-1 mb-4 items-center">
                                <p style={{ fontFamily: "var(--fb)", fontSize: "0.7rem", color: "var(--bl)", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600 }}>Professional Membership</p>
                                <h3 style={{ fontFamily: "var(--fh)", fontSize: "1.35rem", fontWeight: 700, color: "var(--t1)" }}>SNAME</h3>
                                <p style={{ fontFamily: "var(--fb)", fontSize: "0.9rem", color: "var(--bl)", fontWeight: 500 }}>The Society of Naval Architects &amp; Marine Engineers</p>
                                <div style={{ background: "var(--bld)", border: "1px solid var(--bdr)", padding: "4px 12px", borderRadius: "20px", marginTop: "6px" }}>
                                    <p style={{ fontFamily: "var(--fb)", fontSize: "0.85rem", color: "var(--bl)", fontWeight: 500 }}>⚓ Student Member</p>
                                </div>
                            </div>

                            <div>
                                <a href="https://www.sname.org" target="_blank" rel="noopener noreferrer"
                                    style={{ fontFamily: "var(--fb)", fontSize: "0.82rem", fontWeight: 600, color: "var(--bl)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", padding: "4px 14px", border: "1px solid var(--bdr)", borderRadius: "20px", transition: "background 0.2s" }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--bld)"; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                                    sname.org <span style={{ fontSize: "0.7rem" }}>↗</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
