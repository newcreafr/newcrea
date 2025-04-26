import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export default function Offre({
  imageSrc,
  altText,
  title,
  description,
  price,
  route
}) {
  return (
    <div className="overflow-hidden flex flex-col h-full border border-borderColor hover:border-paletteColor2 hover:rounded-3xl rounded-lg transition-all duration-300">
      <Image
              src={imageSrc}
              alt={altText}
              className="w-full"
              width={200}
              height={100}
              loading="lazy"
          />
          <div className="p-4 flex flex-col flex-grow">
              <span className="font-semibold block mb-1 normal-text">{title}</span>
              <span className="small-text text-smTextWhtColor">{description}</span>
          </div>
          <div className="p-4">
              <Link className="small-text underline-animation text-paletteColor2" href={route}>
                      En savoir plus
              </Link>
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