import {
  ShoppingBag,
  MessageCircle,
  Truck,
} from "lucide-react"

import { motion } from "framer-motion"

export default function HowToOrder() {

  const steps = [
    {
      icon: <ShoppingBag size={30} />,
      title: "Browse Collections",
      desc: "Explore our premium fashion collections and latest arrivals.",
      number: "01",
    },

    {
      icon: <MessageCircle size={30} />,
      title: "Message On WhatsApp",
      desc: "Contact us directly for product details and easy ordering.",
      number: "02",
    },

    {
      icon: <Truck size={30} />,
      title: "Get Delivered",
      desc: "Receive your premium collections safely at your doorstep.",
      number: "03",
    },
  ]

  return (

    <div className="px-6 md:px-16 py-40 overflow-hidden">

      {/* TITLE */}

      <div className="text-center max-w-4xl mx-auto">

        <p className="uppercase tracking-[6px] text-yellow-300">
          Simple Process
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mt-8 text-white leading-tight">

          How To Order

        </h1>

        <p className="mt-10 text-gray-400 font-light leading-9">

          Experience a smooth and premium ordering process crafted for modern fashion shopping.

        </p>

      </div>

      {/* STEPS */}

      <div className="grid md:grid-cols-3 gap-8 mt-20">

        {steps.map((item, index) => (

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
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-[35px]
              p-10
              text-center
              min-h-[340px]
              flex
              flex-col
              justify-center
              items-center
            "
          >

            {/* NUMBER */}

            <div className="
              absolute
              top-6
              right-6
              text-white/10
              text-6xl
              font-serif
            ">

              {item.number}

            </div>

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

            {/* ICON BOX */}

            <div className="
              relative
              z-10
              w-[90px]
              h-[90px]
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

            <h2 className="relative z-10 text-3xl text-white mt-10 font-serif leading-tight">

              {item.title}

            </h2>

            {/* DESCRIPTION */}

            <p className="
              relative
              z-10
              text-gray-400
              mt-6
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