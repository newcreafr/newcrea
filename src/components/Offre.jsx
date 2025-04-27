import PropTypes from "prop-types";
import Link from "next/link";

export default function Offre({
  title,
  description,
  route
}) {
    return (
        <div className="flex flex-col justify-between h-full border border-borderColor hover:border-paletteColor2 hover:rounded-3xl rounded-lg transition-all duration-300 p-6">
            <div>
                <h3 className="font-semibold mb-4 normal-text">{title}</h3>
                <p className="small-text text-smTextWhtColor">{description}</p>
            </div>
            <div className="mt-6">
                <Link
                    href={route}
                    className="small-text underline-animation text-paletteColor2"
                >
                    En savoir plus
                </Link>
            </div>
        </div>
    );
}

Offre.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};
