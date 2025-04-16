import Link from "next/link";


const CTA = ({title, route, cta}) => {
  return (
    <section className="mb-16 max-w-3xl mt-28">
      <div className="text-center flex flex-col align-center p-7 md:p-10 bg-paletteColor1 rounded-xl gap-4 ">
        <p className="font-bold text-paletteColor3 big-text">{title}</p>
        <Link
          href={route}
          className="normal-text self-center hover:cursor-pointer inline-flex items-center justify-center rounded-full bg-paletteColor2 px-6 py-2 text-paletteColor3 font-medium transition duration-300 ease-in-out hover:scale-105 hover:bg-paletteColor3 hover:text-paletteColor1"
        >
          {cta}
        </Link>
        <p className="text-smTextDrkColor normal-text">Réponse sous 24h, sans engagement.</p>
      </div>

    </section>
  );
};

export default CTA;