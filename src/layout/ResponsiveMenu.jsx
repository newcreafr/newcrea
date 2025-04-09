import  { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function ResponsiveMenu({ open, setOpen }) {
  const menuRef = useRef(null);

  useEffect(() => {
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-0 top-16 z-20 h-auto w-[300px] mins:left-auto mins:right-0 mins:w-[50%]"
        >
          <div
            ref={menuRef}
            className="bg-paletteColor1 text-paletteColor3 py-6 text-sm font-semibold mins:rounded-bl-3xl xs:text-base md:hidden"
          >
            <ul className="flex flex-col items-center justify-center gap-6">
              <li>
                <a
                  className="underline-animation"
                  href="/"
                  onClick={() => setOpen(false)}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  className="underline-animation"
                  href="/#offers"
                  onClick={() => setOpen(false)}
                >
                  Nos offres
                </a>
              </li>
              <li>
                <a
                  className="underline-animation"
                  href="/"
                  onClick={() => setOpen(false)}
                >
                  Nos réalisations
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
