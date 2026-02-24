"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function CVPage() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Apply a global white background for this page
            document.body.style.background = "#fff";
            document.body.style.color = "#000";

            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get("download") === "true") {
                // Short timeout to ensure styles load
                setTimeout(() => {
                    window.print();
                }, 600);
            }
        }
    }, []);

    return (
        <div className="bg-white text-black min-h-screen font-sans selection:bg-blue-100 py-10" style={{ background: "#f8f9fa", fontFamily: "var(--fb), sans-serif" }}>
            <div
                className="mx-auto bg-white shadow-2xl print:shadow-none print:m-0 print:p-0 relative"
                style={{
                    width: "210mm",
                    minHeight: "297mm",
                    padding: "16mm 16mm",
                    boxSizing: "border-box"
                }}
            >
                {/* Header */}
                <header className="border-b-2 border-slate-800 pb-5 mb-8">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight uppercase" style={{ fontFamily: "var(--fh)" }}>
                        Muhammet Ali Yavuz
                    </h1>
                    <div className="flex flex-wrap justify-between items-end mt-3">
                        <p className="text-xl font-bold text-slate-700">Naval Architect & CFD Engineer</p>
                        <div className="text-xs font-semibold text-slate-500 text-right uppercase tracking-widest leading-relaxed">
                            <p>Born: August 2003</p>
                            <p>Istanbul, Turkey</p>
                            <p className="text-black">muhammetaliyavuz-itu.github.io</p>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-[1.1fr_2fr] gap-x-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Education */}
                        <section>
                            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Education</h2>
                            <div>
                                <h3 className="font-extrabold text-slate-800 text-[0.95rem]">Istanbul Technical University</h3>
                                <p className="text-[0.85rem] font-bold text-blue-700 mt-1">Naval Architecture & Ocean Engineering</p>
                                <p className="text-xs text-slate-600 mt-1 font-semibold">GPA: 3.26 / 4.0</p>
                                <p className="text-xs text-slate-500 mt-0.5 font-medium">Expected Graduation: 2026</p>
                            </div>
                        </section>

                        {/* Expertise */}
                        <section>
                            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Expertise</h2>
                            <ul className="text-[0.85rem] text-slate-800 space-y-4">
                                <li className="font-bold">
                                    Computational Fluid Dynamics (CFD)
                                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">STAR-CCM+, ANSYS Fluent, OpenFOAM, Maxsurf</p>
                                </li>
                                <li className="font-bold">
                                    Ship Design & 3D Modeling
                                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">Rhinoceros 3D, SolidWorks, AutoCAD</p>
                                </li>
                                <li className="font-bold">
                                    Software Dev & Automation
                                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">Python, AsyncIO, C/C++, MATLAB, Arduino</p>
                                </li>
                            </ul>
                        </section>

                        {/* Languages */}
                        <section>
                            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Languages</h2>
                            <ul className="text-[0.85rem] text-slate-800 space-y-2">
                                <li><span className="font-bold text-slate-900">Turkish:</span> Native</li>
                                <li><span className="font-bold text-slate-900">English:</span> Advanced</li>
                                <li><span className="font-bold text-slate-900">German:</span> Intermediate</li>
                            </ul>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Experience */}
                        <section>
                            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Experience</h2>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-slate-900 text-[0.95rem]">ITUKAT</h3>
                                        <span className="text-xs font-bold text-slate-500 uppercase">Aug 2025 – Present</span>
                                    </div>
                                    <p className="text-[0.85rem] font-bold text-blue-700">CFD Engineer & Software Developer</p>
                                    <p className="text-xs text-slate-600 font-medium mt-1">Focus on Force/Moment Measurements, Propellers, and Cavitation tests.</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-slate-900 text-[0.95rem]">ITU Ata Nutku Towing Tank</h3>
                                        <span className="text-xs font-bold text-slate-500 uppercase">Sep 2024 – Present</span>
                                    </div>
                                    <p className="text-[0.85rem] font-bold text-blue-700">Curious Student</p>
                                    <p className="text-xs text-slate-600 font-medium mt-1">Hands-on experience in resistance, propulsion, and seakeeping experiments.</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-slate-900 text-[0.95rem]">Beşiktaş Shipyard</h3>
                                        <span className="text-xs font-bold text-slate-500 uppercase">Aug 2024 – Sep 2024</span>
                                    </div>
                                    <p className="text-[0.85rem] font-bold text-blue-700">Production Engineer Intern</p>
                                    <p className="text-xs text-slate-600 font-medium mt-1">Maintenance of engines, hydraulic systems, and marine pumps.</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-slate-900 text-[0.95rem]">Mensa Makina</h3>
                                        <span className="text-xs font-bold text-slate-500 uppercase">Aug 2023 – Sep 2023</span>
                                    </div>
                                    <p className="text-[0.85rem] font-bold text-blue-700">Mechanical Technician Intern</p>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Featured Projects</h2>
                            <div className="space-y-6 max-w-[95%]">
                                <div>
                                    <h3 className="font-bold text-slate-900 text-[0.95rem]">TCSG FISILTI — Hybrid Coast Guard Vessel</h3>
                                    <p className="text-[0.85rem] text-slate-700 font-medium mt-1 leading-relaxed">Commanded preliminary design of a 68m hybrid propulsion vessel tailored for surveillance, special ops, and environmental response.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-[0.95rem]">KCS Hull with Rudder</h3>
                                    <p className="text-[0.85rem] text-slate-700 font-medium mt-1 leading-relaxed">Executed high-fidelity CFD simulation in STAR-CCM+. Achieved remarkable resistance prediction matching experimental data using Unsteady RANS with VOF.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-[0.95rem]">Alicat Mass Flow Controller Interface</h3>
                                    <p className="text-[0.85rem] text-slate-700 font-medium mt-1 leading-relaxed">Built a robust Windows desktop application in Python with AsyncIO to automate serial communication, providing real-time data logging and telemetry tracking.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-[0.95rem]">DARPA SUBOFF Submarine</h3>
                                    <p className="text-[0.85rem] text-slate-700 font-medium mt-1 leading-relaxed">Conducted appendage hydrodynamic resistance analyses per rigid ITTC guidelines with sub-1% discrepancy from validation data.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @page { size: A4; margin: 0; }
                    @media print {
                        body { 
                            -webkit-print-color-adjust: exact !important; 
                            print-color-adjust: exact !important; 
                            background: white !important; 
                        }
                        div, section, p, h1, h2, h3, li, span {
                            color: #000 !important;
                        }
                        /* Restore brand color for accents in print */
                        .text-blue-700 { color: #1d4ed8 !important; }
                        
                        ::-webkit-scrollbar { display: none; }
                    }
                `}} />
            </div>
        </div>
    );
}
