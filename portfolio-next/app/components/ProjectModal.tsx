"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import type { Project } from "@/app/data/projects";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const handleEsc = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEsc);
        };
    }, [project, handleEsc]);

    if (!project) return null;

    const m = project.modal;

    return (
        <div
            className="modal-overlay-bg fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
            style={{
                background: "rgba(8,12,20,0.92)",
                backdropFilter: "blur(6px)",
            }}
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-[1200px] max-h-[90vh] overflow-y-auto"
                style={{
                    background: "var(--card)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid var(--bdr)",
                    borderRadius: "16px",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                        border: "1px solid var(--bdr)",
                        background: "var(--bg)",
                        color: "var(--t2)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--cy)";
                        e.currentTarget.style.color = "var(--bg)";
                        e.currentTarget.style.borderColor = "var(--cy)";
                        e.currentTarget.style.transform = "rotate(90deg)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--bg)";
                        e.currentTarget.style.color = "var(--t2)";
                        e.currentTarget.style.borderColor = "var(--bdr)";
                        e.currentTarget.style.transform = "rotate(0deg)";
                    }}
                >
                    <X size={18} />
                </button>

                {/* Header */}
                <div
                    className="p-8 md:p-12 pb-6 md:pb-8"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(59,130,246,0.08))",
                        borderBottom: "1px solid var(--bdr)",
                    }}
                >
                    <span
                        className="inline-block rounded-full mb-4"
                        style={{
                            padding: "0.4rem 1rem",
                            background: "rgba(6,182,212,0.1)",
                            border: "1px solid var(--bdh)",
                            fontSize: "0.8rem",
                            color: "var(--cy)",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                        }}
                    >
                        {m.badge}
                    </span>
                    <h2
                        style={{
                            fontFamily: "var(--fh)",
                            fontSize: "2rem",
                            fontWeight: 800,
                            color: "var(--t1)",
                            marginBottom: "0.75rem",
                            lineHeight: 1.2,
                        }}
                    >
                        {project.title}
                    </h2>
                    {m.subtitle && (
                        <p style={{ fontSize: "1.05rem", color: "var(--t2)", lineHeight: 1.6 }}>
                            {m.subtitle}
                        </p>
                    )}
                    {m.meta && (
                        <div
                            className="flex gap-6 items-center mt-2"
                            style={{ color: "var(--t3)", fontSize: "0.85rem" }}
                        >
                            {m.meta.map((item) => (
                                <span key={item.text} className="flex items-center gap-1.5">
                                    {item.text}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Body: Two-column layout */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-[1fr_280px]"
                    style={{ gap: "0 1rem", padding: "1.5rem" }}
                >
                    {/* Main content */}
                    <div className="flex flex-col gap-2 min-w-0">
                        {m.mainSections.map((section) => (
                            <div key={section.title}>
                                <h3
                                    style={{
                                        fontFamily: "var(--fh)",
                                        fontSize: "1.15rem",
                                        color: "var(--cy)",
                                        marginTop: "0.5rem",
                                        marginBottom: "0.8rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "1.5px",
                                    }}
                                >
                                    {section.title}
                                </h3>

                                {/* Text */}
                                {section.type === "text" &&
                                    section.content?.map((p, i) => (
                                        <p
                                            key={i}
                                            style={{
                                                color: "var(--t2)",
                                                fontSize: "0.95rem",
                                                lineHeight: 1.8,
                                                marginBottom: "1rem",
                                            }}
                                        >
                                            {p}
                                        </p>
                                    ))}

                                {/* Specs */}
                                {section.type === "specs" && section.specs && (
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                                        {section.specs.map((spec) => (
                                            <div key={spec.label} className="flex flex-col gap-1">
                                                <span
                                                    style={{
                                                        fontSize: "0.75rem",
                                                        color: "var(--t3)",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.5px",
                                                    }}
                                                >
                                                    {spec.label}
                                                </span>
                                                <span
                                                    style={{
                                                        fontFamily: "var(--fh)",
                                                        fontSize: "1rem",
                                                        color: "var(--t1)",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {spec.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Table */}
                                {section.type === "table" && section.table && (
                                    <div className="modal-table-container mb-4">
                                        <table className="modal-table">
                                            <thead>
                                                <tr>
                                                    {section.table.headers.map((h) => (
                                                        <th key={h}>{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {section.table.rows.map((row, ri) => (
                                                    <tr key={ri}>
                                                        {row.cells.map((cell, ci) => (
                                                            <td
                                                                key={ci}
                                                                style={{
                                                                    fontVariantNumeric: ci > 1 ? "tabular-nums" : undefined,
                                                                    color:
                                                                        ci === row.cells.length - 1 && row.diffColor
                                                                            ? row.diffColor === "green"
                                                                                ? "#10b981"
                                                                                : "#ef4444"
                                                                            : undefined,
                                                                }}
                                                            >
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {/* Data Table (TCSG style) */}
                                {section.type === "data-table" && section.dataTable && (
                                    <div
                                        className="overflow-x-auto mb-4"
                                        style={{
                                            border: "1px solid var(--bdr)",
                                            borderRadius: "var(--r)",
                                        }}
                                    >
                                        <table className="dt">
                                            <tbody>
                                                {section.dataTable.rows.map((row, ri) => (
                                                    <tr key={ri}>
                                                        <th>{row.th}</th>
                                                        <td colSpan={row.th2 ? 1 : 3}>{row.td}</td>
                                                        {row.th2 && <th>{row.th2}</th>}
                                                        {row.td2 && <td>{row.td2}</td>}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {/* List */}
                                {section.type === "list" && section.items && (
                                    <ul className="flex flex-col gap-3 mb-4">
                                        {section.items.map((item) => (
                                            <li
                                                key={item}
                                                className="relative"
                                                style={{
                                                    paddingLeft: "1.5rem",
                                                    color: "var(--t2)",
                                                    fontSize: "0.92rem",
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        color: "var(--cy)",
                                                        fontSize: "1.1rem",
                                                    }}
                                                >
                                                    ▹
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Gallery */}
                                {section.type === "gallery" && section.gallery && (
                                    <div className="grid grid-cols-1 gap-4 mb-6">
                                        {section.gallery.map((img) => (
                                            <figure
                                                key={img.src}
                                                className="overflow-hidden transition-all duration-300"
                                                style={{
                                                    background: "var(--card)",
                                                    border: "1px solid var(--bdr)",
                                                    borderRadius: "var(--r)",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.borderColor = "var(--bdh)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.borderColor = "var(--bdr)";
                                                }}
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="w-full block transition-transform duration-400"
                                                    style={{ borderRadius: "var(--r)" }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = "scale(1.02)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = "scale(1)";
                                                    }}
                                                />
                                                <figcaption
                                                    style={{
                                                        padding: "0.75rem 1rem",
                                                        fontSize: "0.78rem",
                                                        color: "var(--t3)",
                                                        fontStyle: "italic",
                                                        borderTop: "1px solid var(--bdr)",
                                                    }}
                                                >
                                                    {img.caption}
                                                </figcaption>
                                            </figure>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="flex flex-col gap-8 lg:pl-4">
                        {m.sidebarSections.map((section) => (
                            <div key={section.title}>
                                <h3
                                    style={{
                                        fontFamily: "var(--fh)",
                                        fontSize: "1.15rem",
                                        color: "var(--cy)",
                                        marginTop: "0.5rem",
                                        marginBottom: "0.8rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "1.5px",
                                    }}
                                >
                                    {section.title}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {section.items.map((item) => (
                                        <li
                                            key={item}
                                            className="relative"
                                            style={{
                                                paddingLeft: "1.5rem",
                                                color: "var(--t2)",
                                                fontSize: "0.92rem",
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    color: "var(--cy)",
                                                    fontSize: "1.1rem",
                                                }}
                                            >
                                                ▹
                                            </span>
                                            {item.includes(":") ? (
                                                <>
                                                    <strong style={{ color: "var(--t1)", fontWeight: 600 }}>
                                                        {item.split(":")[0]}:
                                                    </strong>
                                                    {item.split(":").slice(1).join(":")}
                                                </>
                                            ) : (
                                                item
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full width image */}
                {m.fullWidthImage && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={m.fullWidthImage.src}
                            alt={m.fullWidthImage.alt}
                            className="w-full"
                            style={{
                                maxHeight: "none",
                                objectFit: "contain",
                                borderRadius: "var(--r)",
                                background: "rgba(15,23,42,0.3)",
                                border: "1px solid var(--bdr)",
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
