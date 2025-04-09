

const CTA = ({title, desc, route, cta, note}) => {
  return (
    <section className="mb-16 w-[90%] max-w-3xl mt-28">
      <div className="text-center flex flex-col align-center p-7 md:p-10 bg-paletteColor1 rounded-xl gap-4 ">
        <p className="font-bold text-lg xs:text-xl sm:text-2xl text-paletteColor3">{title}</p>
        <p className="text-smTextDrkColor">{desc}</p>
        <a
          href={route}
          className="self-center inline-flex items-center justify-center rounded-full bg-paletteColor2 px-6 py-2 text-paletteColor3 text-base font-medium transition duration-300 ease-in-out hover:scale-105 hover:bg-paletteColor3 hover:text-paletteColor1"
        >
          {cta}
        </a>
        <p className="text-smTextDrkColor">{note}</p>
      </div>

    </section>
  );
};

export default CTA;