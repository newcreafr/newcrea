const ServiceSection = ({ title, desc, img, route, reverse }) => {
    return (
        <div className={`flex flex-col align-center lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center gap-8 py-12`}>
            <div className="w-full lg:w-2/3 px-4 text-center">
                <h2>{title}</h2>
                <p className="text-gray-700 mb-6">{desc}</p>
                <a href={route} className="inline-block bg-primary text-paletteColor3 px-6 py-3 rounded-md transition">
                    En savoir plus
                </a>
            </div>
            <div className="w-full lg:w-1/3 px-4 max-w-[400px] lg:max-w-none">
                <img src={img} alt={title} className="w-full h-auto" loading="lazy"/>
            </div>
        </div>
    );
};

export default ServiceSection;