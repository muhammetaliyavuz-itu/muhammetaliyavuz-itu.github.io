"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

const contacts = [
    { icon: Mail, label: "Email", value: "yavuzmu21@itu.edu.tr", href: "mailto:yavuzmu21@itu.edu.tr", color: "var(--cy)" },
    { icon: Linkedin, label: "LinkedIn", value: "Muhammet Ali Yavuz", href: "https://www.linkedin.com/in/yavuzitu", color: "var(--bl)" },
    { icon: Phone, label: "Phone", value: "+90 551 092 9667", href: "tel:+905510929667", color: "var(--or)" },
    { icon: MapPin, label: "Location", value: "Istanbul, Turkey", href: null, color: "var(--cy)" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 } }),
};

export default function Contact() {
    return (
        <section className="py-24 noise-overlay flex flex-col items-center w-full" id="contact" style={{ position: "relative", overflow: "hidden" }}>
            <div className="aurora-glow" style={{ bottom: "-20%", left: "20%", background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)", animationDelay: "4s" }} />

            <div className="max-w-[1160px] mx-auto px-8 relative z-10 flex flex-col items-center text-center w-full">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-line mb-6 text-center w-full">
                    <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
                </motion.div>

                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ fontFamily: "var(--fb)", color: "var(--t2)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "580px", marginBottom: "2.5rem", marginLeft: "auto", marginRight: "auto" }}>
                    I&apos;m open to internship opportunities, research collaborations, and technical projects in naval architecture and CFD.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl w-full">
                    {contacts.map((c, i) => {
                        const Icon = c.icon;
                        const Tag = c.href ? "a" : "div";
                        return (
                            <motion.div key={c.label} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={i} variants={fadeInUp}>
                                <Tag {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                                    className="glass-card gradient-border-wrap group flex flex-col items-center text-center"
                                    style={{ padding: "1.8rem 1.25rem", borderRadius: "var(--r)", textDecoration: "none", color: "inherit", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: c.href ? "pointer" : "default" }}
                                    onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)"; }}
                                    onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 group-hover:scale-110 transition-all duration-300"
                                        style={{ background: `color-mix(in srgb, ${c.color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${c.color} 25%, transparent)` }}>
                                        <Icon size={20} style={{ color: c.color, filter: "drop-shadow(0 0 6px currentColor)" }} />
                                    </div>
                                    <span style={{ fontFamily: "var(--fb)", fontSize: "0.72rem", color: "var(--t3)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.3rem", fontWeight: 500 }}>{c.label}</span>
                                    <span style={{ fontFamily: "var(--fb)", fontSize: "0.88rem", color: "var(--t1)", fontWeight: 600 }}>{c.value}</span>
                                </Tag>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
