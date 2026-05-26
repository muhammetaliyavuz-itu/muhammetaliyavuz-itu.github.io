"use client";

import {
    Document,
    Page,
    Text,
    View,
    Link,
    StyleSheet,
    Svg,
    Path,
    Rect,
    Circle,
} from "@react-pdf/renderer";

const PRIMARY = "#0f4c75";
const INK = "#1a1a2e";
const MUTED = "#5a6678";

const s = StyleSheet.create({
    page: {
        paddingTop: 28,
        paddingBottom: 36,
        paddingHorizontal: 36,
        fontFamily: "Helvetica",
        fontSize: 9,
        color: INK,
        lineHeight: 1.4,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottomWidth: 1.4,
        borderBottomColor: PRIMARY,
        paddingBottom: 8,
        marginBottom: 10,
    },
    headerLeft: { flexDirection: "column", flexShrink: 1, paddingRight: 12 },
    name: {
        fontFamily: "Helvetica-Bold",
        fontSize: 20,
        lineHeight: 1.1,
        color: PRIMARY,
        marginBottom: 3,
    },
    subtitle: { fontSize: 10, lineHeight: 1.25, color: INK, marginBottom: 6 },
    portfolioBadge: {
        backgroundColor: PRIMARY,
        color: "#fff",
        fontFamily: "Helvetica-Bold",
        fontSize: 8.5,
        letterSpacing: 0.3,
        paddingVertical: 3,
        paddingHorizontal: 9,
        borderRadius: 3,
        textDecoration: "none",
        alignSelf: "flex-start",
    },

    contactInfo: { flexShrink: 0 },
    contactRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 2.5,
        gap: 5,
    },
    contactText: { fontSize: 8.2, color: INK, lineHeight: 1.2 },
    iconBox: {
        width: 11,
        height: 11,
        alignItems: "center",
        justifyContent: "center",
    },

    link: { color: PRIMARY, textDecoration: "underline" },

    body: { flexDirection: "row", gap: 16 },
    main: { flex: 1, flexShrink: 1 },
    side: { width: 158, flexShrink: 0 },

    section: { marginBottom: 8 },
    sectionTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 9.5,
        letterSpacing: 1.1,
        textTransform: "uppercase",
        color: PRIMARY,
        borderBottomWidth: 1.1,
        borderBottomColor: "#d0d7de",
        paddingBottom: 2,
        marginBottom: 5,
    },

    entryHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 8,
    },
    entryRole: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: INK, flexShrink: 1 },
    entrySubtitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 9,
        color: PRIMARY,
        marginBottom: 1,
    },
    entryDate: { fontSize: 8, color: MUTED, flexShrink: 0 },

    bold: { fontFamily: "Helvetica-Bold" },

    eduDetails: { fontSize: 8.5, marginTop: 1, color: INK, lineHeight: 1.45 },
    eduHighlight: { fontFamily: "Helvetica-Bold", color: PRIMARY },

    expItem: { marginBottom: 5 },
    expConfidential: {
        fontSize: 7.8,
        fontFamily: "Helvetica-Oblique",
        color: MUTED,
        marginBottom: 1,
    },
    expBullet: { fontSize: 8.5, marginTop: 1, marginLeft: 8, color: INK, lineHeight: 1.45 },

    projItem: { marginBottom: 4 },
    projName: { fontFamily: "Helvetica-Bold", fontSize: 8.8, color: INK },
    projDesc: { fontSize: 8.2, marginTop: 0.5, color: INK, lineHeight: 1.45 },

    skillRow: { fontSize: 8.5, color: INK, marginBottom: 2, lineHeight: 1.4 },
    skillLabel: { fontFamily: "Helvetica-Bold", color: INK },

    langItem: { fontSize: 8.5, marginBottom: 1.5, color: INK },

    certItem: { fontSize: 8.5, marginBottom: 1.5, color: INK },
    certVerify: { fontSize: 6.5, fontFamily: "Courier", color: MUTED, marginLeft: 8 },

    interestRow: { flexDirection: "row", flexWrap: "wrap", gap: 3 },
    interestTag: {
        fontSize: 7.5,
        backgroundColor: "#e8f4f8",
        color: PRIMARY,
        paddingVertical: 1.5,
        paddingHorizontal: 5,
        borderRadius: 2,
    },

    activitiesText: { fontSize: 8.5, color: INK, lineHeight: 1.5 },

    footer: {
        position: "absolute",
        bottom: 14,
        left: 36,
        right: 36,
        paddingTop: 5,
        borderTopWidth: 0.8,
        borderTopColor: "#d0d7de",
        flexDirection: "column",
        alignItems: "center",
    },
    footerLinks: { fontSize: 7.5, color: MUTED, textAlign: "center", marginBottom: 1 },
    footerNote: {
        fontSize: 7,
        color: MUTED,
        fontFamily: "Helvetica-Oblique",
        textAlign: "center",
    },
});

const Bullet = ({ children }: { children: React.ReactNode }) => (
    <Text style={s.expBullet}>– {children}</Text>
);

// Inline SVG icons (Feather-style, 24x24 viewBox), 11x11 rendered.
const ICON_SIZE = 11;
const ICON_STROKE = PRIMARY;

const MailIcon = () => (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
        <Path
            d="M3 6h18v12H3z"
            stroke={ICON_STROKE}
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M3 6l9 7 9-7"
            stroke={ICON_STROKE}
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

const LinkedInIcon = () => (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
        <Rect x={2} y={2} width={20} height={20} rx={3} fill={PRIMARY} />
        <Path d="M7 10v7" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" />
        <Circle cx={7} cy={7.2} r={1.3} fill="#fff" />
        <Path
            d="M11 17v-4.2c0-1.5 1-2.3 2.2-2.3s2.3.8 2.3 2.3V17M11 17v-7"
            stroke="#fff"
            strokeWidth={2.2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

const GithubIcon = () => (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
        <Path
            d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
            fill={PRIMARY}
        />
    </Svg>
);

const PinIcon = () => (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
        <Path
            d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"
            stroke={ICON_STROKE}
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Circle cx={12} cy={9} r={2.6} stroke={ICON_STROKE} strokeWidth={2} fill="none" />
    </Svg>
);

export default function CVDocument() {
    return (
        <Document
            title="CV — Muhammet Ali Yavuz"
            author="Muhammet Ali Yavuz"
            subject="Curriculum Vitae"
            keywords="Naval Architecture, CFD, Ocean Engineering, OpenFOAM, STAR-CCM+, ANSYS Fluent"
        >
            <Page size="A4" style={s.page}>
                {/* HEADER */}
                <View style={s.header}>
                    <View style={s.headerLeft}>
                        <Text style={s.name}>Muhammet Ali Yavuz</Text>
                        <Text style={s.subtitle}>
                            Naval Architect · CFD Engineer · Software Developer
                        </Text>
                        <Link src="https://yavuzma.github.io" style={s.portfolioBadge}>
                            Portfolio: yavuzma.github.io
                        </Link>
                    </View>

                    <View style={s.contactInfo}>
                        <View style={s.contactRow}>
                            <Link src="mailto:yavuzmu21@itu.edu.tr" style={[s.link, s.contactText]}>
                                yavuzmu21@itu.edu.tr
                            </Link>
                            <View style={s.iconBox}>
                                <MailIcon />
                            </View>
                        </View>

                        <View style={s.contactRow}>
                            <Link src="https://linkedin.com/in/yavuzitu" style={[s.link, s.contactText]}>
                                linkedin.com/in/yavuzitu
                            </Link>
                            <View style={s.iconBox}>
                                <LinkedInIcon />
                            </View>
                        </View>

                        <View style={s.contactRow}>
                            <Link src="https://github.com/yavuzma" style={[s.link, s.contactText]}>
                                github.com/yavuzma
                            </Link>
                            <View style={s.iconBox}>
                                <GithubIcon />
                            </View>
                        </View>

                        <View style={s.contactRow}>
                            <Text style={s.contactText}>Istanbul, Turkey</Text>
                            <View style={s.iconBox}>
                                <PinIcon />
                            </View>
                        </View>
                    </View>
                </View>

                {/* BODY */}
                <View style={s.body}>
                    {/* MAIN COLUMN */}
                    <View style={s.main}>
                        {/* EDUCATION */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Education</Text>

                            <View style={s.entryHeader}>
                                <Text style={s.entryRole}>BSc Shipbuilding &amp; Ocean Engineering</Text>
                                <Text style={s.entryDate}>Sep 2021 – Jul 2026 (exp.)</Text>
                            </View>
                            <Text style={s.entrySubtitle}>Istanbul Technical University</Text>
                            <Text style={s.eduDetails}>
                                GPA: 3.26 / 4.0   ·   <Text style={s.eduHighlight}>5-Year Program (Including 1-Year English Preparatory)</Text>
                            </Text>

                            <View style={[s.entryHeader, { marginTop: 4 }]}>
                                <Text style={s.entryRole}>ATHENS Exchange Programme</Text>
                                <Text style={s.entryDate}>14–21 Mar 2026</Text>
                            </View>
                            <Text style={s.entrySubtitle}>Delft University of Technology</Text>
                            <Text style={s.eduDetails}>
                                TUD14: Computer Aided Analysis &amp; Optimization of Sustainable Electrical Power Systems · <Text style={s.eduHighlight}>Local Mark: 9/10</Text> · ATHENS Network (
                                <Link src="https://athensnetwork.eu" style={[s.link, s.bold]}>athensnetwork.eu</Link>
                                )
                            </Text>
                        </View>

                        {/* EXPERIENCE */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Experience</Text>

                            <View style={s.expItem}>
                                <View style={s.entryHeader}>
                                    <Text style={s.entryRole}>Jr. Researcher</Text>
                                    <Text style={s.entryDate}>Aug 2025 – Present · Full-time</Text>
                                </View>
                                <Text style={s.entrySubtitle}>ITUKAT</Text>
                                <Text style={s.expConfidential}>
                                    Conducted under confidentiality constraints; descriptions focus on methodology.
                                </Text>
                                <Bullet>Force and moment analysis in CFD with experimental (EFD) validation.</Bullet>
                                <Bullet>Control and automation algorithms for engineering applications.</Bullet>
                            </View>

                            <View style={s.expItem}>
                                <View style={s.entryHeader}>
                                    <Text style={s.entryRole}>Curious Student</Text>
                                    <Text style={s.entryDate}>Sep 2024 – Present</Text>
                                </View>
                                <Text style={s.entrySubtitle}>ITU Ata Nutku Towing Tank</Text>
                                <Bullet>Resistance, propulsion, and seakeeping experiments; towing-tank testing procedures.</Bullet>
                            </View>

                            <View style={s.expItem}>
                                <View style={s.entryHeader}>
                                    <Text style={s.entryRole}>Production Engineer</Text>
                                    <Text style={s.entryDate}>Aug – Sep 2024 · Full-time Internship</Text>
                                </View>
                                <Text style={s.entrySubtitle}>Besiktas Shipyard</Text>
                                <Bullet>Maintenance of main engines, hydraulics, generators; air-compressor &amp; ballast pump overhaul.</Bullet>
                                <Bullet>Welding, pipe installation, and surface coating experience.</Bullet>
                            </View>

                            <View style={s.expItem}>
                                <View style={s.entryHeader}>
                                    <Text style={s.entryRole}>Mechanical Engineer</Text>
                                    <Text style={s.entryDate}>Aug – Sep 2023 · Full-time Internship</Text>
                                </View>
                                <Text style={s.entrySubtitle}>MENSA MAKINA</Text>
                                <Bullet>Designed and installed a complete ventilation system for a sheet-metal processing line.</Bullet>
                                <Bullet>Fabricated sheet-metal components: pipes, flanges, and air filters.</Bullet>
                            </View>
                        </View>

                        {/* PROJECTS */}
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Key Projects</Text>

                            <View style={s.projItem}>
                                <Text style={s.projName}>TCSG FISILTI — Hybrid Coast Guard Vessel</Text>
                                <Text style={s.projDesc}>
                                    69.5 m hybrid vessel with Counter-Rotating Azipod propulsion, 24 kn max speed, 63 crew capacity.
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>KCS Hull with Rudder — CFD Resistance</Text>
                                <Text style={s.projDesc}>
                                    Unsteady RANS + VOF in STAR-CCM+; 5 cases × 3 mesh levels; 0.22% deviation from EFD.
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>DARPA SUBOFF — Appendage Resistance</Text>
                                <Text style={s.projDesc}>
                                    AFF1 / AFF3 / AFF8 configurations, 0.5% deviation, ITTC uncertainty assessment.
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>Offshore Platform — Design &amp; Analysis</Text>
                                <Text style={s.projDesc}>
                                    70 × 40 m operational deck; Rhinoceros 3D + Maxsurf stability + ANSYS Fluent CFD.
                                </Text>
                            </View>
                            <View style={s.projItem}>
                                <Text style={s.projName}>Alicat Mass Flow Controller — Control Interface</Text>
                                <Text style={s.projDesc}>
                                    Python desktop app with AsyncIO serial I/O, real-time monitoring &amp; CSV logging.
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* SIDEBAR */}
                    <View style={s.side}>
                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Skills</Text>
                            <Text style={s.skillRow}>
                                <Text style={s.skillLabel}>Analysis: </Text>
                                OpenFOAM, ANSYS Fluent, STAR-CCM+, Maxsurf
                            </Text>
                            <Text style={s.skillRow}>
                                <Text style={s.skillLabel}>Design: </Text>
                                SolidWorks, Rhinoceros 3D, AutoCAD
                            </Text>
                            <Text style={s.skillRow}>
                                <Text style={s.skillLabel}>Programming: </Text>
                                C / C++, Python, MATLAB, Arduino
                            </Text>
                        </View>

                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Languages</Text>
                            <Text style={s.langItem}>English — Advanced</Text>
                            <Text style={s.langItem}>German — Intermediate</Text>
                            <Text style={s.langItem}>Turkish — Native</Text>
                        </View>

                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Certifications</Text>
                            <Text style={s.certItem}>· ATHENS Network — TU Delft (Mar 2026)</Text>
                            <Text style={s.certVerify}>BN22-JYBT-79WV-HDCV</Text>
                            <Text style={s.certItem}>· SolidWorks CSWA</Text>
                            <Text style={s.certItem}>· AutoCAD Certificate</Text>
                            <Text style={s.certItem}>· Python — freeCodeCamp</Text>
                            <Text style={s.certItem}>· Arduino — Udemy</Text>
                            <Text style={s.certItem}>· TELC Deutsch B1</Text>
                        </View>

                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Interests</Text>
                            <View style={s.interestRow}>
                                {["Hydrodynamics", "Ship Design", "CFD", "Marine Systems", "Defense Tech", "Autonomous Systems", "Propeller Design"].map((tag) => (
                                    <Text key={tag} style={s.interestTag}>{tag}</Text>
                                ))}
                            </View>
                        </View>

                        <View style={s.section}>
                            <Text style={s.sectionTitle}>Activities</Text>
                            <Text style={s.activitiesText}>
                                ITU Shipbuilding Engineering Club{"\n"}
                                ITU SAVTEK — Defense Technologies
                            </Text>
                        </View>
                    </View>
                </View>

                {/* FOOTER */}
                <View style={s.footer} fixed>
                    <Text style={s.footerLinks}>
                        <Link src="https://yavuzma.github.io" style={s.link}>yavuzma.github.io</Link>
                        <Text>   ·   </Text>
                        <Link src="https://github.com/yavuzma" style={s.link}>github.com/yavuzma</Link>
                        <Text>   ·   </Text>
                        <Link src="https://linkedin.com/in/yavuzitu" style={s.link}>linkedin.com/in/yavuzitu</Link>
                    </Text>
                    <Text style={s.footerNote}>References available upon request</Text>
                </View>
            </Page>
        </Document>
    );
}
