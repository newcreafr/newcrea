import PropTypes from "prop-types";
import Link from "next/link";

export default function Offre({
  imageSrc,
  altText,
  title,
  description,
  price,
  route
}) {
  return (
      <div>
        <div
            className="flex h-full lg:pr-16 max-w-[500px] flex-col lg:flex-row justify-between gap-4 rounded-lg bg-paletteColor3 p-4 border border-borderColor items-center lg:items-start text-center lg:text-left">
          <img className="size-10" src={imageSrc} alt={altText} loading="lazy"/>
          <div className="flex flex-grow flex-col items-center lg:items-start gap-5 h-full">
            <h3>{title}</h3>
            <p className="text-smTextWhtColor small-text">{description}</p>
            <div className="mt-auto justify-self-end">
              {/*<p className="mb-5 font-semibold small-text">À partir de {price}€ HT</p>*/}
              <Link className="small-text underline-animation text-paletteColor2" href={route}>
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

Offre.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired
}