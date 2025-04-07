import PresentationVideo from "./PresentationVideo";

export default function Presentation() {
  return (
    <>
      <div className="mx-auto mt-16 flex w-[90%] flex-col items-center text-center">
        <h1>
          <span className="newcrea-title mb-10 inline-block text-paletteColor2">
            NewCrea
          </span>
          <br />
          Votre Agence Web à Nancy
        </h1>
        <p className="my-7">
          Développez une présence digitale qui vous ressemble, grâce à nos
          solutions modernes et sur mesure.
        </p>
        <div className="flex gap-2 text-sm xs:gap-4 xs:text-base">
          <a
            className="transform rounded-full border-2 border-paletteColor1 bg-white px-4 py-2 text-paletteColor1 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3"
            href="#offers"
          >
            Découvrir nos offres
          </a>
        </div>
      </div>
      <PresentationVideo />
    </>
  );
}
