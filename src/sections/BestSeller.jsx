import { motion } from "framer-motion"

export default function BestSeller() {

  const products = [
    {
      title: "Feeding Kurtas",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Premium Nightwear",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Kidswear",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  return (
    <div
      id="collections"
      className="px-6 md:px-16 py-40"
    >

      {/* TITLE */}

      <div className="text-center">

        <p className="uppercase tracking-[6px] text-yellow-300">
          Best Sellers
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mt-8 text-white">

          Signature Collections

        </h1>

      </div>

      {/* GRID */}

      <div

        style={{
          perspective: 1000,
        }}

        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-3
          gap-10
          mt-24
        "
      >

        {products.map((item, index) => (

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
              rounded-[40px]
              will-change-transform
            "
          >

            {/* IMAGE */}

            <motion.img

              whileHover={{
                scale: 1.08,
              }}

              transition={{
                duration: 0.6,
              }}

              src={item.image}

              alt="fashion"

              loading="lazy"

              className="
                h-[520px]
                w-full
                object-cover
                duration-700
                will-change-transform
              "
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

            {/* CONTENT */}

            <div className="absolute bottom-6 left-0 p-10">

              <h1 className="text-4xl font-serif text-white">
                {item.title}
              </h1>

              <button className="mt-6 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full text-white">

                Explore Collection

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  )
}