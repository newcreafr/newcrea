import PropTypes from "prop-types";
import Image from "next/image";

export default function PourquoiNousSection({
    img,
    title,
    desc,
    alt
}) {
    return (
        <div className="flex flex-1 flex-col items-center gap-4 max-w-[500px] rounded-lg bg-paletteColor3 py-4 px-6 border border-borderColor text-center">
            <Image src={img} alt={alt} width={40} height={40} loading="lazy" />
            <h3>{title}</h3>
            <p className="small-text text-smTextWhtColor text-left">{desc}</p>
        </div>
    );
}


PourquoiNousSection.propTypes = {
    img: PropTypes.string.required,
    title: PropTypes.string.required,
    desc: PropTypes.string.required,
    alt: PropTypes.string.required,
}