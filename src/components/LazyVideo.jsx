"use client";

import { useEffect, useRef, useState } from "react";
import Spinner from "@/components/Spinner";

export default function LazyVideo({ className, link }) {
    const containerRef = useRef(null);
    const [loadVideo, setLoadVideo] = useState(false); // active <video />
    const [isLoaded, setIsLoaded] = useState(false);   // video ready

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoadVideo(true); // on commence à charger
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {/* Spinner toujours présent au départ */}
            {!isLoaded && (
                <div className="absolute inset-0 flex justify-center items-center z-10 bg-white/80 rounded-xl">
                    <Spinner />
                </div>
            )}

            {loadVideo && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setIsLoaded(true)}
                    className={`w-full h-auto rounded-xl shadow-2xl xs:rounded-3xl transition-opacity duration-500 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <source src={link} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>
            )}
        </div>
    );
}
