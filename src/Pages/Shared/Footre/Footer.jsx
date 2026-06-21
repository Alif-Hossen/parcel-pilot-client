
const Footer = () => {
    return (
        <footer className="rounded-lg my-4 bg-[#0f172a] text-[#fef08a] pt-16 pb-8 border-t border-[#1e293b]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12 pb-12 border-b border-[#1e293b]">
                    
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="h-9 w-9 bg-[#fef08a] rounded-lg flex items-center justify-center text-[#0f172a] font-bold text-xl">
                                P
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Parcel<span className="text-[#fef08a]">Pilot</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                            Experience the next generation of logistics. Fast, secure, and reliable parcel delivery solutions tailored for your modern business needs.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="h-9 w-9 rounded-full bg-[#1e293b] hover:bg-[#fef08a] hover:text-[#0f172a] text-gray-400 flex items-center justify-center transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
                            </a>
                            <a href="#" className="h-9 w-9 rounded-full bg-[#1e293b] hover:bg-[#fef08a] hover:text-[#0f172a] text-gray-400 flex items-center justify-center transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                            </a>
                            <a href="#" className="h-9 w-9 rounded-full bg-[#1e293b] hover:bg-[#fef08a] hover:text-[#0f172a] text-gray-400 flex items-center justify-center transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Services</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Express Delivery</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Standard Shipping</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Cargo & Logistics</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Warehouse Storage</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Our Riders</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Press Kit</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Support</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Parcel Tracking</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#fef08a] transition-colors duration-200">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <div>
                        &copy; {new Date().getFullYear()} Parcel Pilot. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;