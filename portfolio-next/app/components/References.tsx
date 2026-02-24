"use client";

import { motion } from "framer-motion";

export default function References() {
    return (
        <section className="py-24 flex flex-col items-center w-full" id="references" style={{ background: "var(--bg2)" }}>
            <div className="max-w-[1160px] mx-auto px-8 flex flex-col items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-line mb-16 text-center w-full"
                >
                    <h2 className="section-title">
                        <span className="accent">References</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col items-center text-center gap-4 transition-all duration-300 mx-auto"
                    style={{
                        padding: "2rem 2.5rem",
                        background: "var(--card)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid var(--bdr)",
                        borderRadius: "14px",
                        maxWidth: "500px",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--bdh)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--bdr)"; }}
                >
                    <span className="text-3xl">📋</span>
                    <div>
                        <p style={{ fontFamily: "var(--fh)", fontSize: "1.05rem", color: "var(--t1)", fontWeight: 600 }}>
                            References available upon request
                        </p>
                        <p style={{ fontFamily: "var(--fb)", fontSize: "0.85rem", color: "var(--t3)", marginTop: "0.25rem" }}>
                            Academic and professional references can be provided.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
