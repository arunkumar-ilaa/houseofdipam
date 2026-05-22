import { useEffect, useState } from "react"

import { ChevronUp } from "lucide-react"

import { motion, AnimatePresence } from "framer-motion"

export default function ScrollTop() {

  const [show, setShow] = useState(false)

  // SHOW BUTTON

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 500) {
        setShow(true)
      } else {
        setShow(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  // SCROLL TOP

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

  }

  return (

    <AnimatePresence>

      {show && (

        <motion.button

          initial={{
            opacity: 0,
            y: 50,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            y: 50,
          }}

          transition={{
            duration: 0.4,
          }}

          onClick={scrollTop}

          whileHover={{
            scale: 1.08,
            y: -3,
          }}

          whileTap={{
            scale: 0.95,
          }}

          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            w-12
            h-12
            rounded-full
            bg-yellow-400
            text-black
            flex
            items-center
            justify-center
            shadow-[0_0_30px_rgba(250,204,21,0.4)]
          "
        >

          <ChevronUp size={24} />

        </motion.button>

      )}

    </AnimatePresence>

  )
}