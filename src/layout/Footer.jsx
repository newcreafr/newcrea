export default function Footer() {
  return (
    <footer className="w-full border-t border-borderColor">
      <div className="m-auto mb-10 mt-14 w-[90%] text-center text-paletteColor1">
        <div className="mb-4 flex flex-col justify-around gap-10 md:m-0 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="mb-4 text-2xl font-bold text-paletteColor2">
              NewCrea
            </p>
            <p className="mb-4 text-base font-semibold xs:text-lg">
              Votre Agence Web à Nancy
            </p>
            <div>
              <p className="font-semibold">Suivez nous sur :</p>
              <div>
                <a href="#" className="group inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="size-8 fill-smTextWhtColor transition duration-300 group-hover:fill-paletteColor2"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,13c1.1,0,2,0.9,2,2 s-0.9,2-2,2s-2-0.9-2-2S35.9,13,37,13z M25,15c5.52,0,10,4.48,10,10s-4.48,10-10,10s-10-4.48-10-10S19.48,15,25,15z M25,18 c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S28.87,18,25,18z" />
                  </svg>
                </a>
                <a href="#" className="group inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="size-8 fill-smTextWhtColor transition duration-300 group-hover:fill-paletteColor2"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />
                  </svg>
                </a>
                <a href="#" className="group inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="size-8 fill-smTextWhtColor transition duration-300 group-hover:fill-paletteColor2"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                  </svg>
                </a>
              </div>
            </div>
            <a
              className="footer-link text-smTextWhtColor"
              href="contact"
            >
              Contactez nous
            </a>
          </div>
          <div className="flex flex-col gap-2 md:items-start">
            <p className="mb-2 font-semibold">Menu</p>
            <div className="flex flex-col gap-2 text-smTextWhtColor md:items-start">
              <a className="footer-link" href="/">
                Accueil
              </a>
              <a className="footer-link" href="/#offers">
                Nos offres
              </a>
              <a className="footer-link" href="/">
                Notre processus de création
              </a>
              <a className="footer-link" href="/">
                Nos réalisations
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t-2 border-t-paletteColor2 pt-4">
          <p>NewCrea 2025. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
