import { motion, useScroll } from "framer-motion"

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll()

  return (

    <motion.div

      className="
        fixed
        top-0
        left-0
        right-0
        h-[3px]
        origin-left
        z-[9999]
        bg-gradient-to-r
        from-yellow-300
        via-yellow-500
        to-pink-400
      "

      style={{
        scaleX: scrollYProgress,
      }}
    />

  )
}