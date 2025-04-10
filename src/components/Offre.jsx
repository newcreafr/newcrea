import PropTypes from "prop-types";

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
      <div className="flex h-full max-w-[500px] flex-row justify-between gap-4 rounded-lg bg-paletteColor3 p-4 border border-borderColor ">
        <img className="size-10" src={imageSrc} alt={altText} />
        <div className="flex flex-grow flex-col items-start justify-start gap-5">
          <h3>{title}</h3>
          <p className="text-smTextWhtColor">{description}</p>
          <div className="mt-auto">
            <p className="mb-5 font-semibold">À partir de {price}€ HT</p>
            <a className="underline-animation text-paletteColor2" href={route}>
              En savoir plus
            </a>
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