import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/logo.png"

export default function Loader({ loading }) {

  return (

    <AnimatePresence>

      {loading && (

        <motion.div

          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="
            fixed
            inset-0
            z-[99999]
            bg-[#120008]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >

          {/* BACKGROUND GLOW */}

          <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"></div>

          {/* CONTENT */}

          <div className="relative z-10 text-center">

            {/* LOGO */}

            <motion.img

              initial={{
                scale: 0.8,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              transition={{
                duration: 1,
              }}

              src={logo}

              alt="logo"

              className="h-50 mx-auto object-contain"
            />

            {/* BRAND */}

            <motion.h1

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1,
                delay: 0.3,
              }}

              className="
                mt-8
                text-4xl
                md:text-5xl
                text-white
                font-serif
                tracking-[4px]
              "
            >

              House Of DiPAM

            </motion.h1>

            {/* LINE */}

            <motion.div

              initial={{
                width: 0,
              }}

              animate={{
                width: "180px",
              }}

              transition={{
                duration: 1.5,
                delay: 0.8,
              }}

              className="
                h-[2px]
                bg-gradient-to-r
                from-yellow-300
                to-pink-400
                mx-auto
                mt-8
                rounded-full
              "
            ></motion.div>

            {/* LOADING TEXT */}

            <motion.p

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                delay: 1.2,
              }}

              className="
                mt-6
                text-gray-400
                uppercase
                tracking-[6px]
                text-sm
              "
            >

              Loading Luxury

            </motion.p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  )
}