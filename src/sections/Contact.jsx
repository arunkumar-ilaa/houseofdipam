import {
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa"

import { MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div
      id="contact"
      className="px-6 md:px-16 py-40"
    >

      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-16 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

        <div className="text-center relative z-10">

          <p className="uppercase tracking-[6px] text-yellow-300">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mt-8 text-white">

            Let’s Connect

          </h1>

          <p className="text-gray-400 mt-8 tracking-[1px] font-extralight mx-auto leading-8">

            Reach out to us for collections, orders and premium fashion enquiries.

          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">

            <button className="bg-green-500 text-white px-10 py-4 rounded-full flex items-center justify-center gap-3 hover:scale-105 duration-300">

              <FaWhatsapp size={22} />

              WhatsApp Us

            </button>

            <button className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full flex items-center hover:bg-gradient-to-r from-pink-500 to-yellow-400
            hover:text-white justify-center gap-3 hover:scale-105 duration-300">

              <FaInstagram size={22} />

              Instagram

            </button>

          </div>

          <div className="mt-16 text-gray-300 flex justify-center items-center font-light gap-3 text-lg">

            <MapPin />

            Tamil Nadu, India

          </div>

        </div>

      </div>

    </div>
  )
}