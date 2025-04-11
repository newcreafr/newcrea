"use client";

import  { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto flex w-[90%] items-center justify-between text-sm xs:text-base">
      <div>
        <img
          className="w-[40px] py-4 md:w-[60px]"
          src="/img/newcrea-logo.svg"
          alt="Logo Newcrea"
        />
      </div>
      <ul className="hidden items-center gap-[4vw] text-paletteColor3 md:flex">
        <li>
          <Link className="underline-animation" href="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="underline-animation" href="/services">
            Nos offres
          </Link>
        </li>
        <li>
          <Link className="underline-animation" href="/">
            Nos réalisations
          </Link>
        </li>
      </ul>
      <Link
        className="transform rounded-full bg-paletteColor2 px-4 py-2 text-paletteColor3 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105 hover:bg-paletteColor3 hover:text-paletteColor1"
        href="/contact"
      >
        Nous contacter
      </Link>
      <MdMenu
        id="hbg-menu"
        className="cursor-pointer select-none text-4xl text-paletteColor3 md:hidden md:text-6xl"
        onClick={() => setOpen((prev) => !prev)}
      />
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </nav>
  );
}
