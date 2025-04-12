import PropTypes from "prop-types";

export default function PourquoiNousSection({
    img,
    title,
    desc
}) {
    return (
        <div className="flex flex-1 flex-col items-center gap-4 max-w-[500px] rounded-lg bg-paletteColor3 p-4 border border-borderColor text-center">
            <img className="size-10" src={img}/>
            <h3>{title}</h3>
            <p className="text-smTextWhtColor">{desc}</p>
        </div>
    );
}


PourquoiNousSection.propTypes = {
    img: PropTypes.string.required,
    title: PropTypes.string.required,
    desc: PropTypes.string.required,
}