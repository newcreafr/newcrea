import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ResponsiveMenu({ open, setOpen }) {
  const menuRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);
    }

    function handleClickOutside(event) {
      if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          !document.getElementById("hbg-menu")?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  const handleAnimationEnd = () => {
    if (!open) {
      setShow(false);
    }
  };

  return (
      show && (
          <div
              onAnimationEnd={handleAnimationEnd}
              className={`absolute left-0 top-16 z-20 h-auto w-[300px] mins:left-auto mins:right-0 mins:w-[50%] ${
                  open ? "animate-fade-in" : "animate-fade-out"
              }`}
          >
            <div
                ref={menuRef}
                className="bg-paletteColor1 text-paletteColor3 py-6 text-sm font-semibold mins:rounded-bl-3xl xs:text-base md:hidden"
            >
              <ul className="flex flex-col items-center justify-center gap-6">
                <li>
                  <Link className="underline-animation" href="/" onClick={() => setOpen(false)}>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link className="underline-animation" href="/services" onClick={() => setOpen(false)}>
                    Nos services
                  </Link>
                </li>
                <li>
                  <Link className="underline-animation" href="/" onClick={() => setOpen(false)}>
                    Nos réalisations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      )
  );
}
