import {
  FaInstagram,
} from "react-icons/fa"

import {
  motion,
} from "framer-motion"

export default function Instagram() {

  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
      caption: "Elegant everyday fashion ✨",
    },

    {
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
      caption: "Premium comfort collections 🤍",
    },

    {
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      caption: "Luxury styles for modern women 🌸",
    },

    {
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop",
      caption: "Fashion crafted with elegance 💫",
    },
  ]

  return (

    <div className="px-6 md:px-16 py-40 overflow-hidden">

      {/* TITLE */}

      <div className="text-center max-w-4xl mx-auto">

        <p className="uppercase tracking-[6px] text-yellow-300">
          Follow Us
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mt-8 text-white leading-tight">

          Instagram Feed

        </h1>

        <p className="text-gray-400 mt-8 font-light tracking-[1px] mx-auto leading-8">

          Explore our latest collections, premium styles and boutique aesthetics.

        </p>

      </div>

      {/* POSTS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20">

        {posts.map((item, index) => (

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
              rounded-[35px]
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
            "
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={item.image}
                alt="insta"
                loading="lazy"
                className="
                  h-[320px]
                  w-full
                  object-cover
                  group-hover:scale-110
                  duration-700
                "
              />

            </div>

            {/* OVERLAY */}

            <div className="
              absolute
              inset-0
              bg-black/20
              opacity-0
              group-hover:opacity-100
              duration-500
              flex
              items-center
              justify-center
            ">

              <div className="
                w-[70px]
                h-[70px]
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                flex
                items-center
                justify-center
                text-white
                text-2xl
              ">

                <FaInstagram />

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-6">

              <p className="text-gray-300 leading-7 font-light">

                {item.caption}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

      {/* BUTTON */}

      <div className="flex justify-center mt-16">

        <motion.a

          href="#"

          whileHover={{
            scale: 1.05,
            y: -3,
          }}

          whileTap={{
            scale: 0.95,
          }}

          className="
            bg-gradient-to-r
            from-pink-500
            to-yellow-400
            text-white
            px-10
            py-4
            rounded-full
            flex
            items-center
            gap-3
            font-medium
          "
        >

          <FaInstagram />

          Follow On Instagram

        </motion.a>

      </div>

    </div>
  )
}