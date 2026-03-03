"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const experiences = [
    {
        period: "Aug 2025 — Present",
        title: "CFD Engineer & Software Developer",
        company: "ITUKAT",
        companyUrl: "https://itukat.itu.edu.tr/en/home/",
        current: true,
        fullTime: true,
        description: "Projects undertaken were conducted under confidentiality constraints. Public descriptions focus on methodologies and technical contributions.",
        bullets: [
            "Force and moment analysis in CFD simulations, including validation through experimental (EFD) data.",
            "Development of control and automation algorithms for engineering applications."
        ],
    },
    {
        period: "Sep 2024 — Present",
        title: "Curious Student",
        company: "ITU Ata Nutku Towing Tank",
        current: true,
        bullets: [
            "Participated in resistance, propulsion, and seakeeping experiments.",
            "Gained hands-on experience in towing tank testing procedures and maritime experimental methods.",
        ],
    },
    {
        period: "Aug 2024 — Sep 2024",
        title: "Production Engineer",
        company: "Besiktas Shipyard",
        companyUrl: "https://www.besiktasshipyard.com/",
        current: false,
        fullTime: true,
        internship: true,
        bullets: [
            "Inspection and maintenance of main engines, hydraulic systems, and generators.",
            "Air compressor overhaul including cooling system repair.",
            "Marine pump maintenance including ballast water treatment systems.",
            "Welding, pipe installation, and surface coating experience.",
        ],
        features: [
            {
                label: "Vessels",
                items: [
                    { name: "TENDUA", imo: "9299862", url: "https://www.marinetraffic.com/en/ais/details/ships/imo:9299862" },
                    { name: "MARAN POSEIDON", imo: "9402926", url: "https://www.marinetraffic.com/en/ais/details/ships/imo:9402926" },
                    { name: "ALRAR", imo: "9284013", url: "https://www.marinetraffic.com/en/ais/details/ships/imo:9284013" }
                ]
            },
        ],
    },
    {
        period: "Aug 2023 — Sep 2023",
        title: "Mechanical Engineer",
        company: "MENSA MAKİNA",
        current: false,
        fullTime: true,
        internship: true,
        bullets: [
            "Designed and installed a complete ventilation system for a sheet metal processing line, including ductwork layout and airflow planning.",
            "Fabricated sheet metal components such as pipes, flanges, and air filters for the ventilation unit.",
        ],
    },
];

function useOnScreen() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); }
        }, { threshold: 0.2 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return { ref, visible };
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.15 },
    }),
};

/* Floating fish SVG silhouettes */
function SwimmingFish() {
    const fishConfigs = [
        { size: 40, top: "18%", duration: 28, delay: 0, reverse: false, opacity: 0.035 },
        { size: 28, top: "45%", duration: 35, delay: 8, reverse: true, opacity: 0.025 },
        { size: 52, top: "72%", duration: 42, delay: 15, reverse: false, opacity: 0.03 },
        { size: 22, top: "30%", duration: 30, delay: 22, reverse: true, opacity: 0.02 },
    ];
    return (
        <>
            {fishConfigs.map((f, i) => (
                <div key={i} style={{
                    position: "absolute", top: f.top, zIndex: 0, opacity: f.opacity, pointerEvents: "none",
                    animation: `${f.reverse ? "fishSwimReverse" : "fishSwim"} ${f.duration}s linear ${f.delay}s infinite`,
                    ...(f.reverse ? { right: "-60px" } : { left: "-60px" }),
                }}>
                    <svg width={f.size} height={f.size * 0.5} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M70 20C70 20 60 5 40 5C20 5 8 15 2 20C8 25 20 35 40 35C60 35 70 20 70 20Z" fill="var(--cy)" />
                        <path d="M72 20L80 12V28L72 20Z" fill="var(--cy)" />
                        <circle cx="18" cy="18" r="2.5" fill="var(--bg)" />
                    </svg>
                </div>
            ))}
        </>
    );
}

/* Rising bubble particles */
function Bubbles() {
    const bubbles = [
        { size: 4, left: "12%", duration: 14, delay: 0 },
        { size: 6, left: "28%", duration: 18, delay: 5 },
        { size: 3, left: "55%", duration: 12, delay: 2 },
        { size: 5, left: "72%", duration: 20, delay: 10 },
        { size: 3, left: "88%", duration: 16, delay: 7 },
        { size: 4, left: "40%", duration: 22, delay: 14 },
    ];
    return (
        <>
            {bubbles.map((b, i) => (
                <div key={i} style={{
                    position: "absolute", bottom: "-10px", left: b.left, zIndex: 0,
                    width: b.size, height: b.size, borderRadius: "50%",
                    border: "1px solid var(--cy)", opacity: 0,
                    animation: `rise ${b.duration}s ease-in ${b.delay}s infinite`,
                    pointerEvents: "none",
                }} />
            ))}
        </>
    );
}

export default function Experience() {
    const timeline = useOnScreen();

    return (
        <section className="py-24 noise-overlay flex flex-col items-center w-full" id="experience" style={{ position: "relative", overflow: "hidden" }}>
            <div className="aurora-glow" style={{ top: "20%", right: "-5%", background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)", animationDelay: "3s" }} />
            <SwimmingFish />
            <Bubbles />

            <div className="max-w-[1160px] mx-auto px-8 relative z-10 flex flex-col items-center w-full">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-line mb-16 text-center w-full">
                    <h2 className="section-title">
                        Work <span className="accent">Experience</span>
                    </h2>
                </motion.div>

                {/* Experience Cards */}
                <div ref={timeline.ref} className="relative max-w-2xl w-full flex flex-col gap-10">
                    {experiences.map((exp, i) => (
                        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} custom={i} variants={fadeInUp}>
                            {/* Card */}
                            <div className="glass-card shine-sweep text-center"
                                style={{
                                    padding: "1.5rem 1.75rem",
                                    borderRadius: "var(--r)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
                                    e.currentTarget.style.borderColor = "var(--bdh)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                    e.currentTarget.style.borderColor = "var(--bdr)";
                                }}>
                                {/* Period badge — mono is OK here */}
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <span style={{
                                        fontFamily: "var(--fm)",
                                        fontSize: "0.72rem",
                                        color: exp.current ? "var(--cy)" : "var(--t3)",
                                        letterSpacing: "0.5px",
                                    }}>
                                        {exp.period}
                                    </span>
                                    {(exp as any).fullTime && (
                                        <span style={{
                                            background: "var(--or)",
                                            color: "#fff",
                                            fontFamily: "var(--fb)",
                                            fontSize: "0.65rem",
                                            padding: "0.15rem 0.5rem",
                                            borderRadius: "4px",
                                            fontWeight: 600,
                                            letterSpacing: "0.5px",
                                            textTransform: "uppercase"
                                        }}>
                                            {(exp as any).internship ? "FULL TIME INTERNSHIP" : "FULL TIME"}
                                        </span>
                                    )}
                                </div>

                                <h3 style={{
                                    fontFamily: "var(--fh)",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "var(--t1)",
                                    marginTop: "0.5rem",
                                }}>
                                    {exp.title}
                                </h3>
                                {exp.companyUrl ? (
                                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                                        style={{
                                            fontFamily: "var(--fb)", fontSize: "0.88rem", color: "var(--cy)",
                                            fontWeight: 500, marginBottom: "0.75rem", display: "block",
                                            textDecoration: "none", transition: "opacity 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; e.currentTarget.style.textDecoration = "underline"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.textDecoration = "none"; }}
                                    >
                                        {exp.company} ↗
                                    </a>
                                ) : (
                                    <p style={{
                                        fontFamily: "var(--fb)", fontSize: "0.88rem", color: "var(--cy)",
                                        fontWeight: 500, marginBottom: "0.75rem",
                                    }}>
                                        {exp.company}
                                    </p>
                                )}

                                {(exp as any).description && (
                                    <p style={{
                                        fontFamily: "var(--fb)",
                                        fontSize: "0.85rem",
                                        color: "var(--t2)",
                                        lineHeight: 1.7,
                                        marginBottom: "0.5rem",
                                        fontStyle: "italic",
                                        maxWidth: "90%",
                                        margin: "0 auto 0.75rem auto"
                                    }}>
                                        {(exp as any).description}
                                    </p>
                                )}

                                <ul className="flex flex-col gap-2 mb-4 items-center">
                                    {exp.bullets.map((b, bi) => (
                                        <li key={bi} style={{
                                            fontFamily: "var(--fb)",
                                            fontSize: "0.85rem",
                                            color: "var(--t2)",
                                            lineHeight: 1.7,
                                            maxWidth: "90%",
                                        }}>
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                {/* Features */}
                                {exp.features && (
                                    <div className="flex flex-col items-center gap-3" style={{ borderTop: "1px solid var(--bdr)", paddingTop: "0.75rem" }}>
                                        {exp.features.map((f) => (
                                            <div key={f.label} className="flex flex-col items-center w-full">
                                                <span style={{ fontFamily: "var(--fb)", fontSize: "0.7rem", color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 500, marginBottom: "0.4rem" }}>{f.label}</span>
                                                {f.items ? (
                                                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                                                        {f.items.map((item, idx) => (
                                                            <div key={item.name} className="flex items-center">
                                                                <a
                                                                    href={item.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="group flex flex-col items-center transition-opacity hover:opacity-80"
                                                                    style={{ textDecoration: "none" }}
                                                                >
                                                                    <span style={{ fontFamily: "var(--fb)", fontSize: "0.82rem", color: "var(--t1)", fontWeight: 600 }}>{item.name} ↗</span>
                                                                    <span style={{ fontFamily: "var(--fm)", fontSize: "0.68rem", color: "var(--cy)", opacity: 0.8, marginTop: "1px" }}>IMO:{item.imo}</span>
                                                                </a>
                                                                {idx < f.items.length - 1 && <span style={{ color: "var(--t3)", margin: "0 0.5rem", opacity: 0.4 }}>•</span>}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span style={{ fontFamily: "var(--fb)", fontSize: "0.82rem", color: "var(--t1)", fontWeight: 500 }}>
                                                        {('value' in f) ? String(f.value) : ""}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
