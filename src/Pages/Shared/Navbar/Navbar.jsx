import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#0f172a] border-b border-[#1e293b] sticky top-0 z-50 rounded-2xl my-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    <div className="flex items-center space-x-3">
                        <div className="h-9 w-9 bg-[#fef08a] rounded-lg flex items-center justify-center text-[#0f172a] font-bold text-xl">
                            P
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Parcel<span className="text-[#fef08a]">Pilot</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-[#fef08a] text-sm font-medium transition-colors duration-200">Home</a>
                        <a href="#" className="text-gray-300 hover:text-[#fef08a] text-sm font-medium transition-colors duration-200">Track Parcel</a>
                        <a href="#" className="text-gray-300 hover:text-[#fef08a] text-sm font-medium transition-colors duration-200">Services</a>
                        <a href="#" className="text-gray-300 hover:text-[#fef08a] text-sm font-medium transition-colors duration-200">Pricing</a>
                        <a href="#" className="text-gray-300 hover:text-[#fef08a] text-sm font-medium transition-colors duration-200">Contact</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-300 hover:text-[#fef08a] text-sm font-medium transition-colors duration-200 px-3 py-2">
                            Login
                        </button>
                        <button className="bg-[#fef08a] hover:bg-[#fde047] text-[#0f172a] text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm">
                            Get Started
                        </button>
                    </div>

                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#fef08a] hover:bg-[#1e293b] transition-all duration-200"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#0f172a] border-t border-[#1e293b]`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="block bg-[#1e293b] text-[#fef08a] px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#" className="block text-gray-300 hover:bg-[#1e293b] hover:text-[#fef08a] px-3 py-2 rounded-md text-base font-medium transition-colors">Track Parcel</a>
                    <a href="#" className="block text-gray-300 hover:bg-[#1e293b] hover:text-[#fef08a] px-3 py-2 rounded-md text-base font-medium transition-colors">Services</a>
                    <a href="#" className="block text-gray-300 hover:bg-[#1e293b] hover:text-[#fef08a] px-3 py-2 rounded-md text-base font-medium transition-colors">Pricing</a>
                    <a href="#" className="block text-gray-300 hover:bg-[#1e293b] hover:text-[#fef08a] px-3 py-2 rounded-md text-base font-medium transition-colors">Contact</a>
                </div>
                <div className="pt-4 pb-4 border-t border-[#1e293b] px-5 flex flex-col gap-3">
                    <button className="w-full text-center text-gray-300 hover:text-[#fef08a] text-base font-medium py-2 transition-colors">
                        Login
                    </button>
                    <button className="w-full bg-[#fef08a] hover:bg-[#fde047] text-[#0f172a] text-center text-base font-semibold py-2.5 rounded-lg transition-all">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;