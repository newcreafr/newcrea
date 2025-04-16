"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ResponsiveMenu({ open, setOpen, headerRef }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleServices = () => setServicesOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = menuRef.current;
      const header = headerRef.current;

      if (
          menu &&
          !menu.contains(event.target) &&
          header &&
          !header.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [open, headerRef, setOpen]);

  return (
      <div
          ref={menuRef}
          className={`fixed top-0 right-0 mt-[72px] z-40 w-full sm:w-[300px] rounded-bl-xl text-paletteColor3 transform transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Navigation */}
        <div className="pl-16 py-6 flex flex-col gap-6 text-base bg-paletteColor1">
          <Link
              href="/"
              onClick={closeMenu}
              className="underline-animation inline-block w-fit text-base"
          >
            Accueil
          </Link>

          {/* Nos services */}
          <div>
            <div className="flex items-center gap-2">
              <Link
                  href="/services"
                  onClick={closeMenu}
                  className="underline-animation inline-block w-fit text-base"
              >
                Nos services
              </Link>
              <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleServices();
                  }}
                  aria-label="Toggle services"
                  className="text-xl text-paletteColor3 hover:text-paletteColor2 transition"
              >
                <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
            </div>

            <div
                className={`transition-all duration-300 ease-in-out  ${
                    servicesOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
            >
              <ul className="space-y-2 pl-2 text-smTextDrkColor">
                {[
                  { href: "/services/creation-site-web", label: "Création de site web" },
                  { href: "/services/refonte-site-web", label: "Refonte de site web" },
                  { href: "/services/creation-identite-visuelle", label: "Création d'identité visuelle" },
                ].map(({ href, label }) => (
                    <li key={href}>
                      <Link
                          href={href}
                          onClick={closeMenu}
                          className="underline-animation inline-block w-fit text-base"
                      >
                        {label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Autres liens */}
          <Link
              href="/realisations"
              onClick={closeMenu}
              className="underline-animation inline-block w-fit text-base"
          >
            Nos réalisations
          </Link>
          <Link
              href="/tarifs"
              onClick={closeMenu}
              className="underline-animation inline-block w-fit text-base"
          >
            Tarifs
          </Link>
          <Link
              href="/aides"
              onClick={closeMenu}
              className="underline-animation inline-block w-fit text-base"
          >
            Aides
          </Link>
          <Link
              href="/a-propos"
              onClick={closeMenu}
              className="underline-animation inline-block w-fit text-base"
          >
            À propos
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-auto flex justify-center items-center px-6 py-6 bg-paletteColor1 rounded-bl-xl">
          <Link
              href="/contact"
              onClick={closeMenu}
              className="text-base inline-flex items-center justify-center rounded-full bg-paletteColor2 px-6 py-2 text-paletteColor3 font-medium transition duration-300 ease-in-out hover:scale-105 hover:bg-paletteColor3 hover:text-paletteColor1"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
  );
}
