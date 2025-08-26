import React, { useState, useEffect } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // ativa scroll após 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed max-w-[100vw] top-0 left-0 z-50 transition-all duration-600 ease-in-out px-8 py-4 flex items-center md:justify-between
    ${scrolled ? "bg md:mt-2 md:rounded-2xl backdrop-blur-md shadow-md transition-all" : "bg-transparent shadow-md"}
    ${scrolled ? "w-full md:w-1/2 md:left-[25%] justify-center" : "w-full"}
  `}
    >
      {/* <div className={`group flex items-center gap-4 cursor-pointer
           ${scrolled ? "hidden transition-all" : "text-white"}
        `}>
        <a
          className={`hidden md:block text-lg font-bold transition-colors duration-300 ${
            scrolled ? "hidden transition-all" : "text-white"
          } group-hover:text-purple-500`}
          href="#home"
        >
          Mateus Celestino
        </a>
      </div> */}

      {/* Botão Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span
          className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white rounded transition duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Links */}
      <ul
        className={`list-none md:flex md:flex-row md:gap-6 absolute md:static top-full left-0 w-full md:w-auto md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out origin-top
          ${open ? "scale-y-100 bg" : "scale-y-0"} md:scale-y-100 transform md:transform-none overflow-hidden
          ${scrolled ? "md:gap-20": ""}`}
      >
        {["home", "sobre", "portifolio", "contato"].map((link) => (
          <li key={link}>
            <a
              className="block px-6 py-3 md:p-0 font-semibold text-white md:text-white transition-all hover:text-purple-500"
              href={`#${link}`}
              onClick={() => setOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
