import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"

import {
  MapPin,
  ArrowUpRight,
} from "lucide-react"

import {
  motion,
} from "framer-motion"

import logo from "../assets/logo.png"

export default function Footer() {

  const links = [
    {
      name: "Home",
      href: "#home",
    },

    {
      name: "Collections",
      href: "#collections",
    },

    {
      name: "Reviews",
      href: "#reviews",
    },

    {
      name: "Contact",
      href: "#contact",
    },
  ]

  return (

    <footer className="relative overflow-hidden border-t border-white/10 px-6 md:px-16 pt-24 pb-10">

      {/* BACKGROUND GLOW */}

      <div className="
        absolute
        top-0
        left-0
        w-[350px]
        h-[350px]
        bg-yellow-500/10
        blur-[140px]
        rounded-full
      "></div>

      <div className="
        absolute
        bottom-0
        right-0
        w-[300px]
        h-[300px]
        bg-pink-500/10
        blur-[140px]
        rounded-full
      "></div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-16">

        {/* BRAND */}

        <div className="xl:col-span-2">

          <img
            src={logo}
            alt="logo"
            className="h-32 object-contain"
          />

          <p className="
            mt-8
            text-gray-400
            font-light
            leading-9
            max-w-lg
          ">

            Premium fashion collections crafted for modern women who love elegance, comfort and timeless boutique style.

          </p>

        

        </div>

        {/* QUICK LINKS */}

        <div>

          <h1 className="text-3xl font-serif text-yellow-300">

            Quick Links

          </h1>

          <div className="flex flex-col gap-5 mt-10">

            {links.map((item, index) => (

              <motion.a

                key={index}

                href={item.href}

                whileHover={{
                  x: 5,
                }}

                className="
                  text-gray-400
                  font-light
                  flex
                  items-center
                  gap-2
                  hover:text-white
                  duration-300
                "
              >

                <ArrowUpRight size={18} />

                {item.name}

              </motion.a>

            ))}

          </div>

        </div>

        {/* CONTACT */}

        <div>

          <h1 className="text-3xl font-serif text-yellow-300">

            Contact

          </h1>

          <div className="mt-10 space-y-6">

            <div>

              <p className="text-white text-lg">
                Instagram
              </p>

              <p className="text-gray-400 font-light mt-2">
                @houseofdipam
              </p>

            </div>

            <div>

              <p className="text-white text-lg">
                WhatsApp
              </p>

              <p className="text-gray-400 font-light mt-2">
                +91 9876543210
              </p>

            </div>

            <div className="flex gap-3 text-gray-400 font-light">

              <MapPin size={20} />

              Tamil Nadu, India

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        mt-20
        pt-8
        border-t
        border-white/10
        flex
        flex-col
        md:flex-row
        gap-4
        justify-between
        items-center
      ">

        <p className="text-gray-500 font-light text-center">

          © 2026 House Of DiPAM. All Rights Reserved.

        </p>

        <p className="text-gray-600 font-light text-sm">

          Designed With Elegance ✨

        </p>

      </div>

    </footer>
  )
}