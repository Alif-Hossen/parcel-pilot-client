import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import bannerImg4 from "../../../assets/banner/banner4.png";

const Banner = () => {
    return (
       
        <div className="max-w-10xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-[2px]">
            <Carousel 
                autoPlay={true}           
                infiniteLoop={true}       
                interval={3000}           
                showThumbs={false} 
                showStatus={false}
                showArrows={true}
                className="overflow-hidden rounded-xl shadow-lg"
            >
                <div className="w-full min-h-[400px] md:h-[500px] bg-[#0f172a] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-0">
                    <div className="w-full md:w-1/2 text-left space-y-4">
                        <span className="bg-[#fef08a] text-[#0f172a] text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            Step 01: Request
                        </span>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Smart <span className="text-[#fef08a]">Doorstep Pickup</span>
                        </h1>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-md">
                            Just schedule a time, and our ParcelPilot hero will arrive to collect your package securely.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                        <img className="max-h-[250px] md:max-h-[400px] w-auto object-contain" src={bannerImg1} alt="Pickup" />
                    </div>
                </div>

                <div className="w-full min-h-[400px] md:h-[500px] bg-[#0f172a] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-0">
                    <div className="w-full md:w-1/2 text-left space-y-4">
                        <span className="bg-[#fef08a] text-[#0f172a] text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            Step 02: Protection
                        </span>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Ultra-Safe <span className="text-[#fef08a]">Packaging</span>
                        </h1>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-md">
                            We use premium multi-layer cushioning to ensure your goods stay intact throughout the journey.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                        <img className="max-h-[250px] md:max-h-[400px] w-auto object-contain" src={bannerImg2} alt="Packing" />
                    </div>
                </div>

                <div className="w-full min-h-[400px] md:h-[500px] bg-[#0f172a] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-0">
                    <div className="w-full md:w-1/2 text-left space-y-4">
                        <span className="bg-[#fef08a] text-[#0f172a] text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            Step 03: Speed
                        </span>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Live <span className="text-[#fef08a]">Real-time Transit</span>
                        </h1>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-md">
                            Your parcel is moving! Track the exact location of your package with our high-speed logic network.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                        <img className="max-h-[250px] md:max-h-[400px] w-auto object-contain" src={bannerImg3} alt="Transit" />
                    </div>
                </div>

                <div className="w-full min-h-[400px] md:h-[500px] bg-[#0f172a] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-0">
                    <div className="w-full md:w-1/2 text-left space-y-4">
                        <span className="bg-[#fef08a] text-[#0f172a] text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            Step 04: Arrival
                        </span>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Successful <span className="text-[#fef08a]">Handover</span>
                        </h1>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-md">
                            Mission accomplished. The parcel reached its destination right on time and in perfect condition.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                        <img className="max-h-[250px] md:max-h-[400px] w-auto object-contain" src={bannerImg4} alt="Delivery" />
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;