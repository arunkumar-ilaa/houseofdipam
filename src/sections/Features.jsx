import {
  Sparkles,
  Crown,
  Truck,
  MessageCircle,
} from "lucide-react"

import { motion } from "framer-motion"

export default function Features() {

  const data = [
    {
      icon: <Sparkles size={28} />,
      title: "Premium Fabric",
      desc: "Premium fabrics crafted for comfort and elegance.",
    },

    {
      icon: <Truck size={28} />,
      title: "Fast Delivery",
      desc: "Quick and reliable delivery experience across India.",
    },

    {
      icon: <Crown size={28} />,
      title: "Luxury Collections",
      desc: "Elegant collections designed for women.",
    },

    {
      icon: <MessageCircle size={28} />,
      title: "WhatsApp Support",
      desc: "Easy ordering and instant support through WhatsApp.",
    },
  ]

  return (

    <div className="px-6 md:px-16 -mt-10 relative z-20 pb-40 ">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6">

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
              relative
              overflow-hidden
              bg-gradient-to-b
              from-white/10
              to-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[35px]
              p-10
              text-center
              text-white
              min-h-[280px]
              flex
              flex-col
              justify-center
              items-center
            "
          >

            {/* HOVER GLOW */}

            <div className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              duration-500
              bg-gradient-to-b
              from-yellow-400/10
              to-transparent
            "></div>

            {/* ICON */}

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

            <h1 className="relative z-10 mt-8 text-2xl font-serif">

              {item.title}

            </h1>

            {/* DESCRIPTION */}

            <p className="
              relative
              z-10
              mt-5
              text-gray-400
              font-light
              leading-8
            ">

              {item.desc}

            </p>

          </motion.div>

        ))}

      </div>

    </div>
  )
}