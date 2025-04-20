import Link from "next/link";
import Image from "next/image";

const ServiceSection = ({ title, desc, img, route, reverse }) => {
    return (
        <div className={`flex flex-col align-center lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center gap-8`}>
            <div className="w-full lg:w-2/3 px-4 text-center">
                <h2>{title}</h2>
                <p className="mb-12 normal-text text-left">{desc}</p>
                <Link href={route} className="transform rounded-full border-2 border-paletteColor1 bg-white px-4 py-2 text-paletteColor1 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3 normal-text">
                    Je suis intéressé(e)
                </Link>

            </div>
            <div className="w-full lg:w-1/3 px-4 max-w-[400px] lg:max-w-none mt-12">
                <Image
                    src={img}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default ServiceSection;