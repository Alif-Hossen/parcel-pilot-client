import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const CustomerSay = () => {
    const reviews = [
        {
            name: "Alexander Pierce",
            role: "Logistics Director",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704d", // এখানে তোমার লোকাল ইমেজ ভেরিয়েবল বসাবে
            review: "The cryptographic tracking system provided by this platform is a game changer. We reduced our transit loss by 40% in the first quarter itself. Absolute precision!",
            rating: 5
        },
        {
            name: "Sarah Jenkins",
            role: "Operations Manager",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
            review: "Customer support is top-notch. Whenever we had a complex routing issue, their pilot agents were there to guide us in real-time. Highly recommended for enterprises.",
            rating: 5
        },
        {
            name: "David Chen",
            role: "Supply Chain Analyst",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
            review: "The automated documentation and customs clearance protocols are seamless. It saved us hundreds of manual hours every week. A must-have tool for global shipping.",
            rating: 5
        },
        {
            name: "Michael Ross",
            role: "Fleet Supervisor",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
            review: "Flash-routed delivery and OTP verification have built immense trust with our high-value clients. The interface is clean, fast, and very professional.",
            rating: 5
        },
        {
            name: "Emily Watson",
            role: "E-commerce Founder",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704h",
            review: "Integrating their API was surprisingly easy. Our customers love the real-time GPS updates on their parcels. This infrastructure is truly next-gen.",
            rating: 4
        }
    ];

    return (
        <section className="max-w-7xl mx-auto w-full my-2 bg-[#0f172a] py-12 md:py-16 px-6 rounded-2xl border border-[#1e293b] relative overflow-hidden">
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#fef08a]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header Section */}
            <div className="max-w-3xl mx-auto text-center mb-12 relative z-10 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-[#1e293b]/60 backdrop-blur-md border border-[#334155]/60 px-3.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fef08a] shadow-[0_0_10px_#fef08a]" />
                    <span className="text-[#fef08a] text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                        Wall of Love
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Customers Say</span>
                </h2>
                <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-normal">
                    Discover how our automated infrastructure is transforming logistics for thousands of businesses worldwide.
                </p>
            </div>

            {/* Swiper Carousel Container */}
            <div className="relative z-10 px-2 pb-12">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    loop={true}
                    spaceBetween={24}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="testimonial-swiper"
                >
                    {reviews.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#1e293b]/40 backdrop-blur-sm border border-[#334155]/50 p-8 rounded-2xl h-full flex flex-col justify-between hover:border-[#fef08a]/30 transition-all duration-300 group">
                                <div>
                                    {/* Quote Icon */}
                                    <div className="text-[#fef08a]/20 group-hover:text-[#fef08a]/40 transition-colors duration-300 mb-4">
                                        <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12H13.017V9C13.017 7.34315 14.3601 6 16.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H16.017L16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91239 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12H1.017V9C1.017 7.34315 2.36015 6 4.017 6H7.017C8.67386 6 10.017 7.34315 10.017 9V15C10.017 16.6569 8.67386 18 7.017 18H4.017L4.017 21H2.017Z" /></svg>
                                    </div>
                                    
                                    {/* Star Rating */}
                                    <div className="flex space-x-1 mb-4">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-[#fef08a]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                        "{item.review}"
                                    </p>
                                </div>

                                {/* User Info */}
                                <div className="flex items-center space-x-4 border-t border-[#334155]/40 pt-6">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-12 h-12 rounded-full border-2 border-[#fef08a]/20 object-cover"
                                    />
                                    <div>
                                        <h4 className="text-white text-sm font-bold tracking-tight">{item.name}</h4>
                                        <p className="text-slate-500 text-[11px] font-medium uppercase tracking-wider">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Pagination Style (Add to your global CSS if needed) */}
            <style dangerouslySetInnerHTML={{ __html: `
                .testimonial-swiper .swiper-pagination-bullet {
                    background: #334155;
                    opacity: 1;
                }
                .testimonial-swiper .swiper-pagination-bullet-active {
                    background: #fef08a !important;
                    width: 24px;
                    border-radius: 4px;
                }
            `}} />

        </section>
    );
};

export default CustomerSay;