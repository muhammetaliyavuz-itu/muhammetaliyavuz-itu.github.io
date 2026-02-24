"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";

const certs = [
    { category: "CAD", name: "SolidWorks (CSWA)", color: "var(--bl)", url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9JG2FEML5U" },
    { category: "CAD", name: "AutoCAD Certificate", color: "var(--bl)", url: "https://coursera.org/verify/LXRP49PG83TZ" },
    { category: "PROGRAMMING", name: "Python (freeCodeCamp)", color: "var(--or)", url: "https://www.freecodecamp.org/certification/muhali-itu/scientific-computing-with-python-v7" },
    { category: "EMBEDDED", name: "Arduino Certificate", color: "var(--or)", url: "https://www.udemy.com/certificate/UC-74396a11-d4a8-4924-947b-f6af469f287e/" },
    { category: "LANGUAGE", name: "TELC Deutsch B1", color: "var(--cy)", url: "https://results.telc.net/qr/JfgH5TJpT96WF1qbG0pVcwnzx5BYe0eNiHHrqN_Mq3Lnsl3NNCVKvam7jM_xm5zr" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.12 } }),
};

export default function Certifications() {
    return (
        <section className="py-24 noise-overlay flex flex-col items-center w-full" id="certifications" style={{ background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
            <div className="max-w-[1160px] mx-auto px-8 relative z-10 flex flex-col items-center w-full">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-line mb-16 text-center w-full">
                    <h2 className="section-title"><span className="accent">Certifications</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl w-full">
                    {certs.map((cert, i) => (
                        <motion.a key={cert.name} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={i} variants={fadeInUp}
                            href={cert.url} target="_blank" rel="noopener noreferrer"
                            className="glass-card shine-sweep gradient-border-wrap group text-center"
                            style={{ padding: "1.5rem 1.25rem", borderRadius: "var(--r)", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)"; }}
                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div className="flex items-center justify-center gap-2 w-full">
                                <span style={{ fontFamily: "var(--fb)", fontSize: "0.68rem", color: cert.color, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600 }}>{cert.category}</span>
                                <CheckCircle size={16} className="group-hover:scale-125 transition-transform duration-300" style={{ color: "var(--cy)", filter: "drop-shadow(0 0 4px rgba(34,211,238,0.4))" }} />
                            </div>
                            <p style={{ fontFamily: "var(--fh)", fontSize: "0.95rem", fontWeight: 600, color: "var(--t1)", flex: 1 }}>{cert.name}</p>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "var(--fb)", fontSize: "0.72rem", fontWeight: 500, color: "var(--cy)", letterSpacing: "0.5px" }}>
                                Verify <ExternalLink size={12} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
