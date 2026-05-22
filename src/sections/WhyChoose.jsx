import {
  Crown,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react"

import { motion } from "framer-motion"

export default function WhyChoose() {

  const data = [
    {
      icon: <Crown size={28} />,
      title: "Premium Quality",
      desc: "Crafted with carefully selected premium fabrics.",
    },

    {
      icon: <ShieldCheck size={28} />,
      title: "Trusted Brand",
      desc: "Loved by thousands of happy fashion customers.",
    },

    {
      icon: <Truck size={28} />,
      title: "Fast Delivery",
      desc: "Quick and reliable delivery across India.",
    },

    {
      icon: <Sparkles size={28} />,
      title: "Elegant Designs",
      desc: "Modern styles designed with timeless elegance.",
    },
  ]

  return (

    <div className="px-6 md:px-16 py-40 overflow-hidden">

      {/* TITLE */}

      <div className="text-center max-w-4xl mx-auto">

        <p className="uppercase tracking-[6px] text-yellow-300">
          Why Choose Us
        </p>

        <h1 className="text-5xl md:text-6xl font-serif mt-8 text-white leading-tight">

          Crafted For Modern Women

        </h1>

       

      </div>

      {/* CARDS */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

        {data.map((item, index) => (

          <motion.div

            key={index}

            whileHover={{
              y: -10,
              scale: 1.02,
            }}

            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}

            className="
              group
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-[35px]
              p-10
              text-center
              relative
              overflow-hidden
              min-h-[320px]
              flex
              flex-col
              justify-center
              items-center
            "
          >

            {/* GLOW */}

            <div className="
              absolute
              top-0
              left-0
              w-full
              h-full
              opacity-0
              group-hover:opacity-100
              duration-500
              bg-gradient-to-b
              from-yellow-400/10
              to-transparent
            "></div>

            {/* ICON BOX */}

            <div className="
              relative
              z-10
              w-[80px]
              h-[80px]
              rounded-3xl
              bg-yellow-400/10
              border
              border-yellow-300/20
              flex
              items-center
              justify-center
              text-yellow-300
            ">

              {item.icon}

            </div>

            {/* TITLE */}

            <h1 className="relative z-10 text-2xl font-serif text-white mt-8">

              {item.title}

            </h1>

            {/* DESC */}

            <p className="relative z-10 text-gray-400 font-light leading-8 mt-5">

              {item.desc}

            </p>

          </motion.div>

        ))}

      </div>

    </div>
  )
}