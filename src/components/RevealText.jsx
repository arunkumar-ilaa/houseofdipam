import { motion } from "framer-motion"

export default function RevealText({

  children,

  className = "",

  delay = 0,

}) {

  return (

    <div className="overflow-hidden">

      <motion.div

        initial={{
          y: "100%",
          opacity: 0,
        }}

        whileInView={{
          y: 0,
          opacity: 1,
        }}

        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}

        viewport={{
          once: true,
        }}

        className={className}
      >

        {children}

      </motion.div>

    </div>

  )
}