import { useEffect, useState } from "react"

import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"

import {
  Menu,
  X,
} from "lucide-react"

// LOGO IMPORT

import logo from "../assets/logo.svg"

export default function Navbar() {

  // MOBILE MENU

  const [open, setOpen] = useState(false)

  // STICKY NAVBAR

  const [sticky, setSticky] = useState(false)

  // SCROLL DETECT

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {
        setSticky(true)
      } else {
        setSticky(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <div
      className={`
        fixed
        left-1/2
        -translate-x-1/2
        z-50
        w-[92%]
        md:w-[85%]
        duration-500

        ${
          sticky
            ? "top-3"
            : "top-7"
        }
      `}
    >

      {/* NAVBAR */}

      <div
        className={`
          backdrop-blur-2xl
          bg-white/10
          border
          border-white/20
          rounded-full
          px-5
          md:px-8
          flex
          items-center
          justify-between
          duration-500
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]

          ${
            sticky
              ? "py-2"
              : "py-2"
          }
        `}
      >

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="logo"
            className={`
              object-contain
              duration-500

              ${
                sticky
                  ? "h-9 md:h-10"
                  : "h-10 md:h-12"
              }
            `}
          />

        </div>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-10 uppercase font-light tracking-[3px] text-sm text-white">

          <a
            href="#home"
            className="relative group"
          >

            Home

            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-yellow-300 duration-300 group-hover:w-full"></span>

          </a>

          <a
            href="#collections"
            className="relative group"
          >

            Collections

            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-yellow-300 duration-300 group-hover:w-full"></span>

          </a>

          <a
            href="#about"
            className="relative group"
          >

            About

            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-yellow-300 duration-300 group-hover:w-full"></span>

          </a>

          <a
            href="#reviews"
            className="relative group"
          >

            Reviews

            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-yellow-300 duration-300 group-hover:w-full"></span>

          </a>

          <a
            href="#contact"
            className="relative group"
          >

            Contact

            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-yellow-300 duration-300 group-hover:w-full"></span>

          </a>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-5">

          {/* SOCIAL */}

          <div className="hidden md:flex gap-6 text-yellow-300 text-2xl">

            <FaInstagram className="cursor-pointer hover:scale-110 hover:text-white duration-300" />

            <FaWhatsapp className="cursor-pointer hover:scale-110 hover:text-white duration-300" />

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >

            {open ? <X size={28} /> : <Menu size={28} />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`md:hidden overflow-hidden duration-500 ease-in-out ${
          open
            ? "max-h-[500px] opacity-100 mt-4"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="mx-2 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[35px] p-8 flex flex-col gap-8 text-white uppercase tracking-[3px] text-sm">

          <a
            href="#home"
            onClick={() => setOpen(false)}
          >
            Home
          </a>

          <a
            href="#collections"
            onClick={() => setOpen(false)}
          >
            Collections
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
          >
            About
          </a>

          <a
            href="#reviews"
            onClick={() => setOpen(false)}
          >
            Reviews
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>

          {/* MOBILE SOCIAL */}

          <div className="flex gap-6 text-yellow-300 text-2xl pt-4 border-t border-white/10">

            <FaInstagram />

            <FaWhatsapp />

          </div>

        </div>

      </div>

    </div>
  )
}