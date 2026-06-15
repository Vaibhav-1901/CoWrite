import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppPreview from "../assets/AppPreview.png";
import Auth from './Auth.jsx';

function LandingPage() {
    const navigate = useNavigate();
    const [showAuth, setShowAuth] = useState(false);

    return (
        <div className="min-h-screen bg-[#080809] text-white font-mono overflow-x-hidden">

            {/* ── Navbar ── */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-14 border-b border-white/4 bg-[#080809]/80 backdrop-blur-md">
                <span className="text-white text-sm font-bold tracking-tight">notes</span>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowAuth(true)}
                        className="bg-white text-black text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-white/90 transition-colors"
                    >
                        get started
                    </button>
                </div>
            </nav>

            {/* ── Hero ── */}
            <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-14 overflow-hidden">

                {/* Background glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.07]"
                    style={{ background: 'radial-gradient(ellipse, rgba(52,211,153,1) 0%, transparent 70%)' }}
                />

                {/* Dot grid */}
                <div className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '28px 28px'
                    }}
                />

                {/* Floating indicators — subtle, corners only */}
                <div className="absolute top-24 left-10 flex items-center gap-2 px-3 py-2 bg-white/4 border border-white/6 rounded-xl opacity-60 hidden lg:flex">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-[11px] text-white/35">sarah joined the session</span>
                </div>

                <div className="absolute top-24 right-10 flex items-center gap-2 px-3 py-2 bg-white/4 border border-white/6 rounded-xl opacity-60 hidden lg:flex">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] text-white/35 tracking-wider">aB3kR9mX · 3 online</span>
                </div>

                {/* Hero text */}
                <div className="relative z-10 flex flex-col items-center text-center gap-5 max-w-2xl">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/20 border border-white/8 px-3 py-1.5 rounded-full">
                        real-time collaborative notes
                    </div>

                    <h1 className="text-[56px] leading-[1.05] font-bold tracking-tight">
                        your thoughts,{" "}
                        <span className="text-white/25">finally</span>{" "}
                        in sync.
                    </h1>

                    <p className="text-white/35 text-sm leading-relaxed max-w-md">
                        Stop forwarding docs and losing context in chat threads.
                        Open a session, share the code, and write together — live.
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                        <button
                            onClick={() => setShowAuth(true)}
                            className="bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-white/90 transition-all"
                        >
                            start writing free
                        </button>
                        <a href="#features"
                            className="text-white/35 hover:text-white/60 text-sm transition-colors px-4 py-2.5">
                            see how it works ↓
                        </a>
                    </div>
                </div>

                {/* App screenshot */}
                <div className="relative z-10 mt-16 w-full max-w-5xl">
                    <div className="relative rounded-xl overflow-hidden border border-white/8 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                        {/* Window chrome */}
                        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#111113] border-b border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <span className="ml-3 text-[11px] text-white/20 font-mono">notes — team standup</span>
                        </div>
                        <img
                            src={AppPreview}
                            alt="notes app"
                            className="w-full object-cover object-top"
                        />
                        {/* Fade bottom of screenshot */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080809] to-transparent" />
                    </div>
                </div>
            </section>

            {/* ── Features ── */}
            <section id="features" className=" py-10 flex flex-col px-20 ">
                <div className="max-w-7xl mx-auto">
                    <div className=" ml-[22px] text-xl uppercase tracking-[0.25em] text-white/20 mb-6">
                        Everything you need to write <span className="text-white">together</span>.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-[9px] px-[15px] overflow-hidden">
                        {[
                            {
                                title: "Live sessions",
                                desc: "Share a session ID. Anyone with it joins your note instantly — no accounts needed for guests.",
                                indicator: (
                                    <div className="flex items-center gap-2 mt-4 ">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-60" />
                                            <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-400" />
                                        </span>
                                        <span className="text-[18px] text-white/25 font-mono">3 editing now</span>
                                    </div>
                                )
                            },
                            {
                                title: "Presence indicators",
                                desc: "See exactly who's online, who's gone offline, and who just joined — all in real time.",
                                indicator: (
                                    <div className="flex items-center gap-1.5 mt-4">
                                        {["V", "J", "S"].map((l, i) => (
                                            <div key={i} className="relative">
                                                <div className="w-7 h-7 rounded-md bg-white/8 flex items-center justify-center text-[10px] text-white/40 font-medium">
                                                    {l}
                                                </div>
                                                <span className={`absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full border border-[#111113] ${i < 2 ? "bg-emerald-400" : "bg-white/15"}`} />
                                            </div>
                                        ))}
                                    </div>
                                )
                            },
                            {
                                title: "Tagged notes",
                                desc: "Organise everything with colour-coded tags. Filter by work, personal, ideas — your system, your rules.",
                                indicator: (
                                    <div className="flex items-center gap-1.5  mt-4">
                                        {["work", "ideas", "personal"].map((t, i) => (
                                            <span key={i} className={`text-[15px] px-2 py-0.5 rounded-full border ${i === 0 ? "border-sky-500/30 text-sky-400/60" :
                                                i === 1 ? "border-emerald-500/30 text-emerald-400/60" :
                                                    "border-purple-500/30 text-purple-400/60"
                                                }`}>{t}</span>
                                        ))}
                                    </div>
                                )
                            }
                        ].map((f) => (
                            <div key={f.title} className="bg-[#0c0c0d] px-8 py-6 border rounded-2xl border-blue-950 flex flex-col transition-all duration-300

hover:-translate-y-1
hover:border-blue-800/40
hover:shadow-[0_0_35px_rgba(29,78,216,0.12)] ">
                                <div>
                                    <div className="mb-10 flex ">
                                        {f.indicator}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                                        <p className="text-white/30 mt-2 text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section   >

            {/* ── Auth CTA ── */}
            <section className="py-14 px-6 flex flex-col items-center text-center gap-6 border-t border-white/4">
                <h2 className="text-2xl font-bold tracking-tight">ready to stop copy-pasting?</h2>
                <p className="text-white/30 text-sm max-w-xs">
                    Free to use. No setup. Open a note and share the link.
                </p>
                <button
                    onClick={() => setShowAuth(true)}
                    className="bg-white text-black text-sm font-semibold px-8 py-3 rounded-xl hover:bg-white/90 transition-all"
                >
                    get started — it's free
                </button>
            </section>

            {/* ── Auth Modal ── */}
            {showAuth && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setShowAuth(false)}
                    />
                    <div className="relative z-10">
                        <Auth onSuccess={() => navigate("/home")} standalone={true} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default LandingPage;