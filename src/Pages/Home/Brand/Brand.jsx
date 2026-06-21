import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import brand1 from '../../../assets/brands/amazon.png';
import brand2 from '../../../assets/brands/casio.png';
import brand3 from '../../../assets/brands/moonstar.png';
import brand4 from '../../../assets/brands/randstad.png';
import brand5 from '../../../assets/brands/amazon_vector.png';
import brand6 from '../../../assets/brands/star.png';
import brand7 from '../../../assets/brands/start_people.png';

const Brand = () => {
    const brands = [
        { name: "Brand 1", src: brand1 },
        { name: "Brand 2", src: brand2 },
        { name: "Brand 3", src: brand3 },
        { name: "Brand 4", src: brand4 },
        { name: "Brand 5", src: brand5 },
        { name: "Brand 6", src: brand6 },
        { name: "Brand 7", src: brand7 },
    ];

    return (
        <section className="max-w-7xl mx-auto w-full my-2 bg-[#0f172a] py-8 md:py-12 px-6 rounded-2xl border border-[#1e293b] relative overflow-hidden">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#fef08a03_0%,_transparent_70%)] pointer-events-none" />

            <div className="text-center mb-8 relative z-10">
                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.25em] mb-1.5">
                    Global Network
                </p>
                <h2 className="text-base md:text-lg font-medium text-slate-400 tracking-tight">
                    Trusted by forward-thinking teams <span className="text-white font-semibold">worldwide</span>
                </h2>
            </div>

            <div className="relative z-10 flex items-center">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={4500}
                    allowTouchMove={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 3, spaceBetween: 16 },
                        768: { slidesPerView: 5, spaceBetween: 24 },
                        1024: { slidesPerView: 6, spaceBetween: 32 },
                    }}
                    className="w-full flex items-center py-2"
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            
                            <div className="flex items-center justify-center h-14 w-full max-w-[140px] bg-white p-2.5 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] transition-all duration-300 ease-out group cursor-pointer">
                                <img 
                                    src={brand.src} 
                                    alt={brand.name} 
                                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="absolute top-0 left-0 h-full w-16 md:w-36 bg-gradient-to-r from-[#0f172a] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-16 md:w-36 bg-gradient-to-l from-[#0f172a] to-transparent z-20 pointer-events-none" />

        </section>
    );
};

export default Brand;