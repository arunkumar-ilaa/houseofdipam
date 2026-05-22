import { FaWhatsapp } from "react-icons/fa"

import { motion } from "framer-motion"

export default function FloatingWhatsapp() {

  return (

    <motion.a

      href="https://wa.me/919876543210"

      target="_blank"

      rel="noopener noreferrer"

      initial={{
        opacity: 0,
        scale: 0,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      transition={{
        duration: 0.5,
        delay: 0.3,
      }}

      whileHover={{
        scale: 1.08,
      }}

      whileTap={{
        scale: 0.95,
      }}

      className="
        fixed
        bottom-24
        right-6
        z-[9999]
        flex
        items-center
        gap-3
        bg-green-500
        text-white
        px-5
        py-4
        rounded-full
        shadow-[0_0_30px_rgba(34,197,94,0.5)]
      "
    >

      <FaWhatsapp size={24} />

      <span className="hidden md:block font-medium">

        Chat With Us

      </span>

    </motion.a>

  )
}