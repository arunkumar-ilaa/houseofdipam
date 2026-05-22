import { motion } from "framer-motion"
import { useState } from "react"
import RevealText from "../components/RevealText"
import heroImage from "../assets/hero3.png"

export default function Hero() {

  // PARALLAX POSITION

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  // MOUSE MOVE

  const handleMouseMove = (e) => {

    const { clientX, clientY } = e

    // SUBTLE MOVEMENT

    const x = (window.innerWidth / 2 - clientX) / 80

    const y = (window.innerHeight / 2 - clientY) / 80

    setPosition({
      x,
      y,
    })

  }

  return (

    <div

      id="home"

      onMouseMove={handleMouseMove}

      className="
        relative
        min-h-[120vh]
        flex
        justify-start
        pt-40
        text-center
        px-5
        overflow-hidden
      "
    >

      {/* FLOATING ORB 1 */}

      <motion.div

        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-yellow-500/10
          blur-[150px]
          rounded-full
        "
      ></motion.div>

      {/* FLOATING ORB 2 */}

      <motion.div

        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-pink-500/10
          blur-[150px]
          rounded-full
        "
      ></motion.div>

      {/* HERO IMAGE */}

      <motion.img

        initial={{
          scale: 1.1,
          opacity: 0,
        }}

        animate={{
          x: position.x,
          y: position.y,
          scale: 1,
          opacity: 1,
        }}

        transition={{
          type: "spring",
          stiffness: 30,
        }}

        src={heroImage}

        alt="fashion"

        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          will-change-transform
        "
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#2b000d]/80 via-black/60 to-[#120008]"></div>

      {/* CONTENT */}

      <motion.div

        animate={{
          x: position.x / 2,
          y: position.y / 2,
        }}

        transition={{
          type: "spring",
          stiffness: 40,
        }}

        className="relative z-10 max-w-4xl mx-auto"
      >

        {/* SMALL TITLE */}

        <motion.p

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.2,
          }}

          className="uppercase tracking-[8px] text-yellow-300 text-sm"
        >

          Elegance Woven Daily

        </motion.p>

        {/* MAIN TITLE */}

       <RevealText

  delay={0.5}

  className="
    text-5xl
    md:text-7xl
    font-serif
    leading-tight
    mt-10
    text-white
  "
>

  Luxury Fashion <br />

  For Modern Women

</RevealText>

        {/* DESCRIPTION */}

        <motion.p

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
            delay: 0.8,
          }}

          className="
            mt-10
            text-lg
            text-gray-300
            leading-9
            tracking-[1px]
            font-light
            mx-auto
          "
        >

          Premium feeding kurtas, trendy nightwear and adorable kidswear collections crafted with elegance, comfort and timeless style.

        </motion.p>

        {/* BUTTONS */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
            delay: 1.1,
          }}

          className="
            flex
            flex-col
            md:flex-row
            gap-6
            justify-center
            mt-14
          "
        >

          {/* BUTTON 1 */}

          <motion.button

            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0px 0px 30px rgba(255,215,0,0.35)",
            }}

            whileTap={{
              scale: 0.95,
            }}

            transition={{
              type: "spring",
              stiffness: 300,
            }}

            className="
              bg-yellow-500
              text-black
              px-10
              py-4
              rounded-full
              font-semibold
              duration-500
            "
          >

            Shop Collection

          </motion.button>

          {/* BUTTON 2 */}

          <motion.button

            whileHover={{
              scale: 1.05,
              y: -3,
            }}

            whileTap={{
              scale: 0.95,
            }}

            transition={{
              type: "spring",
              stiffness: 300,
            }}

            className="
              bg-white/10
              text-white
              backdrop-blur-xl
              border
              border-white/20
              px-10
              py-4
              hover:bg-white
              hover:text-black
              rounded-full
              duration-500
            "
          >

            WhatsApp Order

          </motion.button>

        </motion.div>

      </motion.div>

    </div>
  )
}