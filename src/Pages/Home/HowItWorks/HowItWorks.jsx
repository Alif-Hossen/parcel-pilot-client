const HowItWorks = () => {
    const steps = [
        {
            id: "01",
            phase: "PHASE ONE",
            title: "Doorstep Pickup Request",
            description: "With a single tap on our slick interactive application, schedule an instant or planned pickup. Our geo-routing algorithm immediately assigns the nearest Pilot agent to your location.",
            badge: "Instant Allocation",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            id: "02",
            phase: "PHASE TWO",
            title: "Multi-Layer Cushion Packing",
            description: "Your valuable goods are nested into smart shockproof containers. Sealed with multi-layered eco-friendly wraps and tagged with tamper-proof smart barcodes for bulletproof transit protection.",
            badge: "Shield Guarded",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            id: "03",
            phase: "PHASE THREE",
            title: "Next-Gen Live Transit Network",
            description: "Watch your parcel glide smoothly across high-speed supply pipelines. Equipped with live GPS telemetry, you receive real-time predictive milestone notifications every step of the way.",
            badge: "Live Telemetry",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            id: "04",
            phase: "PHASE FOUR",
            title: "Secure Handover with OTP",
            description: "No missed handovers or security breaches. The pilot verifies your unique cryptographic dynamic OTP at your exact doorstep, ensuring the package hits only the rightful hands.",
            badge: "Verified Access",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-[#0f172a] text-white mt-4 rounded-2xl py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative overflow-hidden">
            
            <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-[#fef08a]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1e293b] to-[#0f172a] border border-[#334155] px-3.5 py-1 rounded-full shadow-inner">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fef08a] animate-ping" />
                    <span className="text-[#fef08a] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        Core Logistics Engine
                    </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-4 tracking-tight">
                    How We Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-amber-200 to-yellow-400">ParcelPilot</span>
                </h2>
                <p className="text-gray-400 mt-3 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                    An ultra-efficient four-stage autonomous pipeline engineered to move your high-priority shipments faster and safer.
                </p>
            </div>

    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {steps.map((step, index) => (
                    <div 
                        key={step.id} 
                        className="group relative bg-gradient-to-b from-[#1e293b]/50 to-[#0f172a]/30 border border-[#1e293b] hover:border-[#fef08a]/30 rounded-2xl p-5 md:p-6 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(254,240,138,0.04)] flex flex-col justify-between"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#fef08a]/0 to-transparent group-hover:via-[#fef08a]/40 transition-all duration-500" />

                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[9px] font-bold tracking-widest text-gray-500 group-hover:text-[#fef08a]/80 transition-colors">
                                    {step.phase}
                                </span>
                                <span className="text-[9px] bg-[#1e293b] text-gray-400 border border-[#334155] px-2 py-0.5 rounded-md group-hover:border-[#fef08a]/20 group-hover:text-[#fef08a] transition-all">
                                    {step.badge}
                                </span>
                            </div>

                            <div className="h-11 w-11 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-[#fef08a] rounded-xl flex items-center justify-center border border-[#334155] mb-5 group-hover:from-[#fef08a] group-hover:to-yellow-400 group-hover:text-[#0f172a] group-hover:rotate-3 transition-all duration-400 shadow-lg">
                                {step.icon}
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#fef08a] transition-colors duration-200 tracking-tight">
                                {step.title}
                            </h3>
                            
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                                {step.description}
                            </p>
                        </div>

                        {index < 3 && (
                            <div className="hidden lg:flex absolute top-1/2 -right-4 items-center justify-center w-3 h-3 z-20 opacity-20 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#fef08a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 relative z-10 bg-gradient-to-r from-[#1e293b]/30 via-[#1e293b]/60 to-[#1e293b]/30 border border-[#1e293b] rounded-2xl p-5 flex flex-wrap justify-around items-center gap-4 text-center">
                <div>
                    <h4 className="text-2xl md:text-3xl font-black text-[#fef08a]">99.4%</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Success Handover</p>
                </div>
                <div className="hidden sm:block w-[1px] h-8 bg-[#334155]" />
                <div>
                    <h4 className="text-2xl md:text-3xl font-black text-white">&lt; 28 Mins</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Collection Time</p>
                </div>
                <div className="hidden sm:block w-[1px] h-8 bg-[#334155]" />
                <div>
                    <h4 className="text-2xl md:text-3xl font-black text-[#fef08a]">100%</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Live Telemetry</p>
                </div>
            </div>

        </section>
    );
};

export default HowItWorks;