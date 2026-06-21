import { useState } from "react";

const FAQ = () => {
    const faqData = [
        {
            id: "01",
            question: "How can I track my parcel in real-time?",
            answer: "Once initialized, a live cryptographic telemetry link is generated. Access this via your dashboard to monitor exact GPS routing and estimated arrival time down to the minute."
        },
        {
            id: "02",
            question: "What happens if a delivery attempt fails?",
            answer: "If doorstep verification fails, the parcel is safely rerouted to the nearest micro-hub. We will automatically prompt you to configure a secondary delivery window."
        },
        {
            id: "03",
            question: "Are there size or weight restrictions for cargo?",
            answer: "Standard priority handles items up to 25kg, while our specialized Enterprise Freight fleet handles heavy payloads and bulk pallets with custom route locks."
        },
        {
            id: "04",
            question: "How does cryptographic OTP verification work?",
            answer: "To guarantee absolute trust, high-value items require a secure handover. A dynamic OTP is sent to your number, which must be validated by our pilot agent."
        },
        {
            id: "05",
            question: "Can I schedule a specific delivery time slot?",
            answer: "Yes, our priority loop allows you to select customized delivery windows. You can manage and adjust these slots directly from your dispatcher dashboard."
        },
        {
            id: "06",
            question: "What items are strictly prohibited in the network?",
            answer: "We do not transport hazardous chemicals, illegal substances, or combustible materials. All packages pass through automated non-invasive scanning."
        },
        {
            id: "07",
            question: "How do I claim insurance for a damaged shipment?",
            answer: "File a claim instantly through your dashboard. Our live telemetry log accelerates the process, settling verified enterprise claims within 48 business hours."
        },
        {
            id: "08",
            question: "Do you offer international shipping options?",
            answer: "Yes, our automated global network bridges cross-border transit channels. We handle customs clearance protocols seamlessly with end-to-end cryptographic documentation."
        }
    ];

    const [hoveredId, setHoveredId] = useState(null);
    const [mobileOpenId, setMobileOpenId] = useState(null);

    const handleMobileClick = (id) => {
        setMobileOpenId(mobileOpenId === id ? null : id);
    };

    return (
        <section className="max-w-7xl mx-auto w-full my-2 bg-[#0f172a] py-10 md:py-14 px-4 sm:px-6 lg:px-8 rounded-2xl border border-[#1e293b] relative overflow-hidden">
            
            <div className="absolute top-[-10%] left-[-15%] w-[400px] h-[400px] bg-gradient-to-tr from-blue-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-15%] w-[400px] h-[400px] bg-gradient-to-bl from-[#fef08a]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14 relative z-10 space-y-3">
                <div className="inline-flex items-center space-x-2 bg-[#1e293b]/60 backdrop-blur-md border border-[#334155]/60 px-3.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fef08a] shadow-[0_0_10px_#fef08a]" />
                    <span className="text-[#fef08a] text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                        Engine Support
                    </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Questions</span>
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-normal leading-relaxed">
                    Everything you need to know about our automated routing pipelines, security protocols, and enterprise infrastructure.
                </p>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                
                <div className="hidden md:grid grid-cols-2 gap-4">
                    {faqData.map((item) => {
                        const isHovered = hoveredId === item.id;
                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`p-5 rounded-xl border transition-all duration-500 relative overflow-hidden cursor-pointer flex flex-col justify-start h-fit
                                    ${isHovered 
                                        ? "bg-[#1e293b]/80 border-[#fef08a]/30 shadow-[0_15px_35px_rgba(0,0,0,0.4)] translate-y-[-2px]" 
                                        : "bg-[#1e293b]/20 border-[#1e293b] hover:border-[#334155]"}`}
                            >
                                <div className="flex items-center justify-end mb-1">
                                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isHovered ? "bg-[#fef08a] shadow-[0_0_8px_#fef08a]" : "bg-transparent"}`} />
                                </div>

                                <h3 className="text-sm md:text-base font-bold tracking-tight text-slate-200">
                                    {item.question}
                                </h3>
                                
                                <div className={`transition-all duration-500 ease-in-out grid ${isHovered ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0"}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal border-t border-[#334155]/30 pt-2.5">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="block md:hidden space-y-3">
                    {faqData.map((item) => {
                        const isOpen = mobileOpenId === item.id;
                        return (
                            <div 
                                key={item.id}
                                className={`border rounded-xl transition-all duration-300 ${isOpen ? "bg-[#1e293b]/60 border-[#fef08a]/30 shadow-lg" : "bg-transparent border-[#1e293b]"}`}
                            >
                                <button
                                    onClick={() => handleMobileClick(item.id)}
                                    className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-slate-200"
                                >
                                    <span className={isOpen ? "text-[#fef08a]" : ""}>{item.question}</span>
                                    <div className={`w-5 h-5 flex-shrink-0 rounded-full border border-[#334155] flex items-center justify-center transition-transform duration-300 ${isOpen ? "bg-[#fef08a] border-[#fef08a] text-[#0f172a] rotate-180" : "text-slate-400"}`}>
                                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <div className={`transition-all duration-300 ease-in-out grid ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                    <div className="overflow-hidden">
                                        <p className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-[#334155]/30 pt-2">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FAQ;