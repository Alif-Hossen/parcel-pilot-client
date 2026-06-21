import { useState } from "react";

const OurServices = () => {
    const services = [
        {
            id: "01",
            title: "Next-Day Priority Loop",
            tagline: "Automated Overnight Supply Chain",
            desc: "A friction-free courier pipeline engineered for fast-moving businesses. Packages collected before dusk are processed through intelligent transit hubs and delivered right to the target doorstep by tomorrow afternoon.",
            highlight: "Guaranteed 24-Hour Delivery Window",
            pricing: "Flat $4.99 / parcel",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: "02",
            title: "Hyper-Local Flash Route",
            tagline: "Point-to-Point Instant Courier",
            desc: "For shipments where minutes dictate outcomes. Activating this tier immediately hot-wires a dedicated Pilot agent who secures your high-priority items and drives directly to the destination with zero stops.",
            highlight: "Direct Geo-Routed Delivery within 4H",
            pricing: "On-Demand Dynamic Rates",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            id: "03",
            title: "Enterprise Freight & Cargo",
            tagline: "Heavy Payload Infrastructure",
            desc: "Moving warehouse pallets, bulky manufacturing gear, or large-scale retail inventory? We deploy tailored heavy cargo assets across interstate channels, complete with custom climate settings and route lock.",
            highlight: "Secured Bulk Cargo Networks",
            pricing: "Custom Tailored Enterprise Quotes",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 16v3c0 1.1-.9 2-2 2H7a2 2 0 01-2-2v-3m14 0V9a2 2 0 00-2-2h-2M5 16V9a2 2 0 012-2h2m0 0V4a2 2 0 012-2h2a2 2 0 012 2v3m-6 0h6" />
                </svg>
            )
        }
    ];

    const [activeId, setActiveId] = useState("01");
    const activeService = services.find(s => s.id === activeId);

    return (
        // py-10 md:py-14 ব্যবহার করে ওভারঅল সেকশনের ভেতরের হাইট কমানো হয়েছে
        <section className="bg-[#0f172a] text-white py-10 md:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full my-2 rounded-2xl relative overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-[#1e293b]">
            
            {/* Mesh Gradient Background */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#fef08a]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

            {/* Header Section: mb-8 md:mb-12 এবং space-y-2 দিয়ে হাইট ও গ্যাপ কমানো হয়েছে */}
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12 relative z-10 space-y-2">
                <div className="inline-flex items-center space-x-2 bg-[#1e293b]/60 backdrop-blur-md border border-[#334155]/60 px-3.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fef08a] shadow-[0_0_10px_#fef08a]" />
                    <span className="text-[#fef08a] text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                        Logistics Reimagined
                    </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight">
                    Architected for Speed. <br className="hidden sm:inline" />
                    Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Absolute Trust.</span>
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed tracking-wide mt-2">
                    Explore our specialized delivery layers engineered with live telemetry, adaptive smart routing, and cryptographic verification.
                </p>
            </div>

            {/* Main Interactive Interface Block */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-6xl mx-auto">
                
                {/* LEFT SIDE: Interactive Premium Tabs */}
                <div className="w-full lg:w-[40%] flex flex-col gap-3">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveId(service.id)}
                            className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all duration-500 flex items-center justify-between group relative overflow-hidden backdrop-blur-sm
                                ${activeId === service.id 
                                    ? "bg-[#1e293b]/80 border-[#fef08a]/30 shadow-[0_20px_40px_rgba(0,0,0,0.4)]" 
                                    : "bg-transparent border-[#1e293b] hover:border-[#334155] hover:bg-[#1e293b]/30"}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-500
                                    ${activeId === service.id 
                                        ? "bg-[#fef08a] text-[#0f172a] border-[#fef08a] shadow-[0_0_15px_rgba(254,240,138,0.3)]" 
                                        : "bg-[#1e293b]/60 text-slate-400 border-[#334155]/60 group-hover:text-white"}`}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className={`text-sm md:text-base font-bold tracking-tight transition-colors duration-300 ${activeId === service.id ? "text-[#fef08a]" : "text-slate-200"}`}>
                                        {service.title}
                                    </h3>
                                    <p className="text-[10px] md:text-xs text-slate-500 font-medium tracking-wide mt-0.5">
                                        {service.tagline}
                                    </p>
                                </div>
                            </div>

                            <div className={`w-5 h-5 rounded-full flex items-center justify-center border border-[#334155] text-slate-400 transition-all duration-500 group-hover:border-[#fef08a]/50 group-hover:text-[#fef08a]
                                ${activeId === service.id ? "border-[#fef08a] text-[#0f172a] bg-[#fef08a] rotate-90 lg:rotate-0" : ""}`}>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    ))}
                </div>

                {/* RIGHT SIDE: Dynamic Dashboard Showcase */}
                <div className="hidden lg:flex lg:w-[60%] bg-[#1e293b]/40 backdrop-blur-xl border border-[#334155]/40 rounded-2xl p-6 relative overflow-hidden shadow-2xl min-h-[380px] flex-col justify-between">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                    
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#334155]/40 pb-3">
                            <span className="text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                                Service Engine / Core Tier {activeService.id}
                            </span>
                            <span className="text-[10px] font-semibold text-[#fef08a] bg-[#fef08a]/10 border border-[#fef08a]/20 px-2.5 py-0.5 rounded-full shadow-sm">
                                {activeService.highlight}
                            </span>
                        </div>

                        <div className="space-y-1">
                            <h4 className="text-2xl font-extrabold tracking-tight text-white">
                                {activeService.title}
                            </h4>
                            <p className="text-xs font-medium text-slate-400 italic">
                                — {activeService.tagline}
                            </p>
                        </div>

                        <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl font-normal">
                            {activeService.desc}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#334155]/40 mt-6">
                        <div>
                            <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest">Base Rate Architecture</span>
                            <span className="text-lg font-black text-white tracking-tight mt-0.5 block">{activeService.pricing}</span>
                        </div>
                        <button className="relative px-5 py-2.5 bg-white text-[#0f172a] hover:bg-[#fef08a] transition-all duration-300 rounded-xl font-bold text-xs tracking-wide flex items-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_25px_rgba(254,240,138,0.2)] group">
                            Initialize This Tier
                            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* MOBILE & TABLET EXPANSION DRAWER */}
                <div className="block lg:hidden bg-[#1e293b]/60 border border-[#334155]/60 rounded-xl p-5 relative overflow-hidden transition-all duration-500">
                    <span className="text-[9px] font-bold tracking-widest text-[#fef08a] bg-[#fef08a]/10 px-2.5 py-1 rounded-md border border-[#fef08a]/20 mb-3 inline-block">
                        {activeService.highlight}
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed mt-1">
                        {activeService.desc}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-3 border-t border-[#334155]/40 mt-5">
                        <div>
                            <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest">Base Cost</span>
                            <span className="text-base font-extrabold text-white tracking-tight">{activeService.pricing}</span>
                        </div>
                        <button className="w-full sm:w-auto px-4 py-2 bg-white text-[#0f172a] rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 shadow-md">
                            Initialize This Tier
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurServices;