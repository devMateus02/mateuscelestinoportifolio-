import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-[0px] w-full z-[100] bg-white shadow-[0_10px_100px_rgba(0,0,0,0.1)] box-border px-8 py-4 flex items-center justify-between">
      <div className="group flex items-center gap-4 cursor-pointer">
        <img className="w-[60px]" src="port.png" alt="Logo" />
        <a
          className="text-lg font-bold transition duration-200 ease-in-out group-hover:text-[rgb(165,84,241)]"
          href="#home"
        >
          Mateus celestino
        </a>
      </div>

   
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span
          className={`block h-0.5 w-full bg-gray-700 rounded transform transition duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-gray-700 rounded transition duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-gray-700 rounded transform transition duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

    
      <ul
        className={`list-none md:flex md:flex-row md:gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out origin-top ${
          open ? "scale-y-100" : "scale-y-0"
        } md:scale-y-100 transform md:transform-none overflow-hidden`}
      >
        <li>
          <a
            className="block px-6 py-3 md:p-0 nav-link hover:text-[rgb(165,84,241)]"
            href="#home"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="block px-6 py-3 md:p-0 nav-link hover:text-[rgb(165,84,241)]"
            href="#sobre"
            onClick={() => setOpen(false)}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            className="block px-6 py-3 md:p-0 nav-link hover:text-[rgb(165,84,241)]"
            href="#portifolio"
            onClick={() => setOpen(false)}
          >
            Portfólio
          </a>
        </li>
        <li>
          <a
            className="block px-6 py-3 md:p-0 nav-link hover:text-[rgb(165,84,241)]"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
