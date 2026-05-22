import {
  motion,
} from "framer-motion"

import {
  Sparkles,
  Crown,
} from "lucide-react"

export default function Story() {

  return (

    <div
      id="about"
      className="px-6 md:px-16 py-40 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}

        <motion.div

          initial={{
            opacity: 0,
            x: -60,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="relative"
        >

          {/* MAIN IMAGE */}

          <div className="overflow-hidden rounded-[45px]">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
              alt="fashion"
              className="
                rounded-[45px]
                h-[620px]
                w-full
                object-cover
                hover:scale-105
                duration-700
              "
            />

          </div>

          {/* CUSTOMER CARD */}

          <motion.div

            whileHover={{
              y: -5,
            }}

            className="
              absolute
              -bottom-10
              -right-5
              md:-right-10
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-[35px]
              p-8
              w-[260px]
              text-white
              shadow-[0_0_40px_rgba(255,255,255,0.05)]
            "
          >

            <div className="flex items-center gap-3 text-yellow-300">

              <Sparkles size={22} />

              <p className="uppercase tracking-[3px] text-sm">

                Trusted Brand

              </p>

            </div>

            <h1 className="text-5xl font-serif text-yellow-300 mt-5">

              1K+

            </h1>

            <p className="mt-3 text-gray-300 leading-7 font-light">

              Happy customers loving our premium collections.

            </p>

          </motion.div>

        </motion.div>

        {/* CONTENT SIDE */}

        <motion.div

          initial={{
            opacity: 0,
            x: 60,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="max-w-xl"
        >

          {/* SMALL TITLE */}

          <p className="uppercase tracking-[6px] text-yellow-300">

            About Our Brand

          </p>

          {/* MAIN TITLE */}

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mt-8 text-white">

            Fashion Crafted <br />

            With Elegance

          </h1>

          {/* DESCRIPTION */}

          <p className="
            mt-10
            text-gray-300
            leading-9
            font-light
            text-lg
          ">

            House Of DiPAM was created with a vision to blend elegance, comfort and timeless fashion for modern women, mothers and kids. Every collection is thoughtfully crafted with premium fabrics and boutique aesthetics.

          </p>

          {/* FEATURES */}

          <div className="space-y-6 mt-12">

            <div className="
              flex
              items-center
              gap-4
              text-white
            ">

              <div className="
                w-[55px]
                h-[55px]
                rounded-2xl
                bg-yellow-400/10
                border
                border-yellow-300/20
                flex
                items-center
                justify-center
                text-yellow-300
              ">

                <Crown size={22} />

              </div>

              <div>

                <h1 className="text-xl font-serif">

                  Premium Boutique Experience

                </h1>

                <p className="text-gray-400 font-light mt-1">

                  Luxury collections designed with elegance.

                </p>

              </div>

            </div>

            <div className="
              flex
              items-center
              gap-4
              text-white
            ">

              <div className="
                w-[55px]
                h-[55px]
                rounded-2xl
                bg-yellow-400/10
                border
                border-yellow-300/20
                flex
                items-center
                justify-center
                text-yellow-300
              ">

                <Sparkles size={22} />

              </div>

              <div>

                <h1 className="text-xl font-serif">

                  Modern Elegant Collections

                </h1>

                <p className="text-gray-400 font-light mt-1">

                  Fashion crafted for confident modern women.

                </p>

              </div>

            </div>

          </div>

         

        </motion.div>

      </div>

    </div>
  )
}