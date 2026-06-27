import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <section className="min-h-screen w-full bg-[#050814] flex flex-col items-center justify-between py-10 px-6 relative overflow-hidden font-sans select-none">
            
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-80" />
            
            <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

            <div className="w-full max-w-7xl mx-auto flex items-center justify-start relative z-10">
                <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 bg-[#fef08a] rounded-xl flex items-center justify-center text-[#0f172a] font-black text-xl shadow-[0_0_20px_rgba(254,240,138,0.3)] animate-bounce" style={{ animationDuration: '3s' }}>
                        P
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Parcel<span className="text-[#fef08a]">Pilot</span>
                    </span>
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center flex-grow">
                
                <div className="relative w-64 h-64 flex items-center justify-center mb-4">
                    <div className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '25s' }} />
                    <div className="absolute inset-6 border border-cyan-500/40 rounded-full animate-ping opacity-25" style={{ animationDuration: '4s' }} />
                    <div className="absolute w-24 h-24 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
                    
                    <div className="absolute text-[#fef08a] animate-bounce" style={{ animationDuration: '4s' }}>
                        <svg className="w-12 h-12 drop-shadow-[0_0_15px_#fef08a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 drop-shadow-[0_0_40px_rgba(6,182,212,0.15)] leading-none mb-4 select-none uppercase animate-pulse">
                    404
                </h1>

                <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-wider uppercase mb-4 max-w-2xl px-4 relative overflow-hidden">
                    Houston, We Have A <span className="text-[#fef08a] font-black tracking-normal relative inline-block animate-pulse">(Delivery)</span> Problem.
                </h2>

                
                <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-md mx-auto font-normal leading-relaxed px-6 mb-8">
                    The signal tracking link is broken. Your package has bypassed the standard atmospheric protocols and drifted into deep space.
                </p>

                <Link 
                    to="/" 
                    className="group inline-flex items-center space-x-3 bg-[#fef08a] hover:bg-[#fde047] text-[#0f172a] text-sm md:text-base font-extrabold px-10 py-4 rounded-full shadow-[0_0_30px_rgba(254,240,138,0.2)] transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0f172a] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0f172a]"></span>
                    </span>
                    <span>Re-Route to Home Base</span>
                </Link>
            </div>

            <div className="w-full max-w-xl mx-auto flex items-center justify-between text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-slate-500/80 relative z-10 border-t border-slate-900 pt-6 px-4">
                <Link to="/support" className="hover:text-[#fef08a] transition-colors duration-300">Support Center</Link>
                <Link to="/tracking" className="hover:text-[#fef08a] transition-colors duration-300">Track Parcel</Link>
                <Link to="/" className="hover:text-[#fef08a] transition-colors duration-300">Homepage</Link>
            </div>

            <div className="absolute top-1/4 left-[-10%] w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shooting-star opacity-40 pointer-events-none" />

            
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes shooting-star {
                    0% { transform: translateX(0) translateY(0) rotate(-35deg); opacity: 0; }
                    10% { opacity: 0.7; }
                    30% { transform: translateX(120vw) translateY(80vh) rotate(-35deg); opacity: 0; }
                    100% { transform: translateX(120vw) translateY(80vh) rotate(-35deg); opacity: 0; }
                }
                .animate-shooting-star {
                    animation: shooting-star 7s infinite ease-in-out;
                }
            `}} />

        </section>
    );
};

export default ErrorPage;