import { useState, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    if (center) {
        map.setView(center, zoom, { animate: true, duration: 1.5 });
    }
    return null;
};

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData() || [];
    
    const [searchQuery, setSearchQuery] = useState("");
    const [mapCenter, setMapCenter] = useState(position);
    const [mapZoom, setMapZoom] = useState(7);
    const [suggestions, setSuggestions] = useState([]);
    
    const markerRefs = useRef({});

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (value.trim().length > 0) {
            const filtered = serviceCenters.filter(center =>
                center.district.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelectDistrict = (center) => {
        const lat = parseFloat(center.latitude);
        const lon = parseFloat(center.longitude);
        
        setMapCenter([lat, lon]);
        setMapZoom(10);
        setSearchQuery(center.district);
        setSuggestions([]);

        const marker = markerRefs.current[center.district];
        if (marker) {
            setTimeout(() => {
                marker.openPopup();
            }, 1500);
        }
    };

    return (
        <section className="max-w-7xl mx-auto w-full my-2 bg-[#0f172a] py-10 md:py-14 px-4 sm:px-6 lg:px-8 rounded-2xl border border-[#1e293b] relative overflow-hidden">
            
            <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#fef08a]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center mb-8 relative z-10 space-y-3">
                <div className="inline-flex items-center space-x-2 bg-[#1e293b]/60 backdrop-blur-md border border-[#334155]/60 px-3.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fef08a] shadow-[0_0_10px_#fef08a]" />
                    <span className="text-[#fef08a] text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
                        Network Hub
                    </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    We Are Available In <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">64 Districts</span>
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-normal leading-relaxed">
                    Our fast and automated network spans across every corner of Bangladesh, making sure your parcels land safely.
                </p>
            </div>

            <div className="relative z-20 max-w-md mx-auto mb-6">
                <div className="relative bg-[#1e293b]/80 backdrop-blur-xl border border-[#334155]/80 rounded-xl shadow-lg transition-all duration-300 focus-within:border-[#fef08a]/40 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search your district (e.g., Dhaka, Bogura)..."
                        className="w-full bg-transparent pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none font-medium"
                    />
                </div>

                {suggestions.length > 0 && (
                    <ul className="absolute z-30 w-full mt-2 bg-[#1e293b]/95 backdrop-blur-2xl border border-[#334155] rounded-xl max-h-60 overflow-y-auto shadow-[0_15px_30px_rgba(0,0,0,0.5)] divide-y divide-[#334155]/40 custom-scrollbar">
                        {suggestions.map((center, idx) => (
                            <li key={idx}>
                                <button
                                    onClick={() => handleSelectDistrict(center)}
                                    className="w-full text-left px-4 py-3 text-xs sm:text-sm text-slate-200 hover:text-[#fef08a] hover:bg-[#0f172a]/60 transition-all duration-200 font-medium flex items-center justify-between"
                                >
                                    <span>{center.district}</span>
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Fly To Hub ↗</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="relative z-10 w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-[#1e293b] shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                <MapContainer
                    center={mapCenter}
                    zoom={mapZoom}
                    scrollWheelZoom={false}
                    className="w-full h-full"
                >
                    <ChangeView center={mapCenter} zoom={mapZoom} />

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />

                    {serviceCenters.map((center, index) => (
                        <Marker 
                            position={[parseFloat(center.latitude), parseFloat(center.longitude)]} 
                            key={index}
                            ref={(el) => (markerRefs.current[center.district] = el)}
                            eventHandlers={{
                                mouseover: (e) => {
                                    e.target.openPopup();
                                },
                                mouseout: (e) => {
                                    e.target.closePopup();
                                }
                            }}
                        >
                            <Popup closeButton={false} className="custom-popup">
                                <div className="p-1.5 font-sans pointer-events-none min-w-[150px]">
                                    <h4 className="font-extrabold text-sm mb-1 text-indigo-600 tracking-tight">{center.district}</h4>
                                    <div className="w-full h-[1px] bg-gray-100 my-1" />
                                    <p className="text-[11px] text-gray-500 leading-relaxed m-0">
                                        <span className="font-bold text-gray-700 block mb-0.5">Coverage Area:</span> 
                                        {center.covered_area.join(', ')}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .custom-popup .leaflet-popup-content-wrapper {
                    background: rgba(255, 255, 255, 0.98);
                    border-radius: 12px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                    border: 1px solid rgba(0,0,0,0.05);
                }
                .custom-popup .leaflet-popup-tip {
                    background: rgba(255, 255, 255, 0.98);
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #334155;
                    border-radius: 9999px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #475569;
                }
            `}} />

        </section>
    );
};

export default Coverage;