"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const [open, setOpen] = useState(false);
    const headerRef = useRef(null);
    const servicesMenuRef = useRef(null);

    const pathname = usePathname();

    const getPageTitle = (path) => {
        switch (path) {
            case "/":
                return "Accueil";
            case "/services/":
                return "Nos services";
            case "/services/creation-site-web/":
                return "Création de site web";
            case "/services/refonte-site-web/":
                return "Refonte de site web";
            case "/services/creation-identite-visuelle/":
                return "Création d'identité visuelle";
            case "/realisations/":
                return "Nos réalisations";
            case "/tarifs/":
                return "Tarifs";
            case "/aides/":
                return "Aides";
            case "/a-propos/":
                return "À propos";
            case "/contact/":
                return "Contact";
            default:
                return "";
        }
    };

    // Ferme le sous-menu si clic en dehors
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                servicesMenuRef.current &&
                !servicesMenuRef.current.contains(e.target)
            ) {
                setIsHovered(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header ref={headerRef} className="relative">
            <nav className="mx-auto flex w-[90%] items-center justify-between py-4">
                {/* Logo */}
                <Link href="/">
                    <img
                        src="/img/newcrea-logo.svg"
                        alt="Logo Newcrea"
                        className={`w-[40px] md:w-[60px] transition-transform duration-500 ${
                            open ? "scale-110 rotate-[5deg]" : ""
                        }`}
                    />
                </Link>

                {/* Liens Desktop */}
                <p className="inline-block xl:hidden text-smTextDrkColor text-base font-medium absolute left-1/2 transform -translate-x-1/2 select-none">
                    {getPageTitle(pathname)}
                </p>
                <ul className="hidden items-center gap-16 xl:flex">
                    <li>
                    <Link
                            className="underline-animation text-paletteColor3 text-base"
                            href="/"
                        >
                            Accueil
                        </Link>
                    </li>

                    <li
                        ref={servicesMenuRef}
                        className="relative group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="flex items-center gap-2">
                            <Link
                                href="/services"
                                className="text-paletteColor3 underline-animation text-base"
                            >
                                Nos services
                            </Link>
                            <button
                                onClick={() => setIsHovered((prev) => !prev)}
                                aria-label="Toggle services menu"
                                className="text-paletteColor3 hover:text-paletteColor2"
                            >
                                <IoIosArrowDown
                                    className={`transition-transform duration-300 ${
                                        isHovered ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                        </div>

                        <div
                            className={`absolute top-full left-0 mt-3 w-72 rounded-xl bg-paletteColor1 shadow-2xl ring-1 ring-black/10 transition-all duration-300 ease-in-out z-50 ${
                                isHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                            }`}
                        >
                            <ul className="flex flex-col p-4 gap-2 space-y-2">
                                <li>
                                    <Link
                                        href="/services/creation-site-web"
                                        className="text-paletteColor3 underline-animation inline-block mx-4"
                                    >
                                        Création de site web
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/refonte-site-web"
                                        className="text-paletteColor3 underline-animation inline-block mx-4"
                                    >
                                        Refonte de site web
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/creation-identite-visuelle"
                                        className="text-paletteColor3 underline-animation inline-block mx-4"
                                    >
                                        Création d'identité visuelle
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Link
                            className="underline-animation text-paletteColor3 text-base"
                            href="/realisations"
                        >
                            Nos réalisations
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="underline-animation text-paletteColor3 text-base"
                            href="/tarifs"
                        >
                            Tarifs
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="underline-animation text-paletteColor3 text-base"
                            href="/aides"
                        >
                            Aides
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="underline-animation text-paletteColor3 text-base"
                            href="/a-propos"
                        >
                            À propos
                        </Link>
                    </li>
                </ul>

                {/* Bouton contact (desktop uniquement) */}
                <Link
                    href="/contact"
                    className="hidden xl:inline-block text-base self-center hover:cursor-pointer inline-flex items-center justify-center rounded-full bg-paletteColor2 px-6 py-2 text-paletteColor3 font-medium transition duration-300 ease-in-out hover:scale-105 hover:bg-paletteColor3 hover:text-paletteColor1"
                >
                    Nous contacter
                </Link>

                {/* Bouton hamburger mobile */}
                {open ? (
                    <MdClose
                        onClick={() => setOpen(false)}
                        className="xl:hidden text-3xl text-paletteColor3 cursor-pointer"
                    />
                ) : (
                    <MdMenu
                        onClick={() => setOpen(true)}
                        className="xl:hidden text-3xl text-paletteColor3 cursor-pointer"
                    />
                )}
            </nav>

            {/* Menu mobile */}
            <ResponsiveMenu open={open} setOpen={setOpen} headerRef={headerRef}/>
        </header>
    );
}
