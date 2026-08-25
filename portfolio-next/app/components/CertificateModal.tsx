"use client";

import { useEffect, useCallback } from "react";
import { X, ExternalLink } from "lucide-react";

export interface CertificateDetail {
    image: string;
    alt: string;
    title: string;
    subtitle: string;
    recipient: string;
    body: string;
    signatories: { name: string; role: string }[];
    note?: string;
}

interface CertificateModalProps {
    certificate: CertificateDetail | null;
    onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
    const handleEsc = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (certificate) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEsc);
        };
    }, [certificate, handleEsc]);

    if (!certificate) return null;

    const c = certificate;

    return (
        <div
            className="modal-overlay-bg fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
            style={{ background: "rgba(8,12,20,0.92)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-[980px] max-h-[92vh] overflow-y-auto"
                style={{
                    background: "var(--card)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid var(--bdr)",
                    borderRadius: "16px",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 cursor-pointer"
                    style={{ border: "1px solid var(--bdr)", background: "var(--bg)", color: "var(--t2)" }}
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

                <div className="p-5 md:p-8 flex flex-col gap-7">
                    {/* The certificate as issued (Turkish) */}
                    <a href={c.image} target="_blank" rel="noopener noreferrer" style={{ display: "block", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--bdr)", background: "#fff" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={c.image} alt={c.alt} style={{ display: "block", width: "100%", height: "auto" }} />
                    </a>

                    {/* English rendering of the Turkish text above */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span style={{ fontFamily: "var(--fb)", fontSize: "0.68rem", color: "var(--cy)", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600, whiteSpace: "nowrap" }}>
                                English Translation
                            </span>
                            <span style={{ flex: 1, height: "1px", background: "var(--bdr)" }} />
                            <a
                                href={c.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                                style={{ fontFamily: "var(--fb)", fontSize: "0.72rem", fontWeight: 500, color: "var(--cy)", textDecoration: "none", whiteSpace: "nowrap" }}
                            >
                                Full size <ExternalLink size={12} />
                            </a>
                        </div>

                        <p style={{ fontFamily: "var(--fh)", fontSize: "1.15rem", fontWeight: 700, color: "var(--t1)", lineHeight: 1.3 }}>{c.title}</p>
                        <p style={{ fontFamily: "var(--fb)", fontSize: "0.9rem", color: "var(--cy)", fontWeight: 500, marginTop: "2px" }}>{c.subtitle}</p>

                        <p style={{ fontFamily: "var(--fh)", fontSize: "1.35rem", fontWeight: 600, color: "var(--t1)", margin: "1.1rem 0 0.8rem" }}>{c.recipient}</p>

                        <p style={{ fontFamily: "var(--fb)", fontSize: "0.92rem", color: "var(--t2)", lineHeight: 1.7, maxWidth: "70ch" }}>{c.body}</p>

                        <div className="flex flex-wrap gap-x-10 gap-y-3 mt-6">
                            {c.signatories.map((sig) => (
                                <div key={sig.name} style={{ borderTop: "1px solid var(--bdr)", paddingTop: "0.5rem", minWidth: "220px" }}>
                                    <p style={{ fontFamily: "var(--fh)", fontSize: "0.88rem", fontWeight: 600, color: "var(--t1)" }}>{sig.name}</p>
                                    <p style={{ fontFamily: "var(--fb)", fontSize: "0.76rem", color: "var(--t3)", marginTop: "2px" }}>{sig.role}</p>
                                </div>
                            ))}
                        </div>

                        {c.note && (
                            <p style={{ fontFamily: "var(--fb)", fontSize: "0.74rem", color: "var(--t3)", lineHeight: 1.6, marginTop: "1.4rem", fontStyle: "italic" }}>{c.note}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
