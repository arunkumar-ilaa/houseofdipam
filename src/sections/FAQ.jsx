import {
  Plus,
  Minus,
} from "lucide-react"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

import {
  useState,
} from "react"

export default function FAQ() {

  const [open, setOpen] = useState(0)

  const faqs = [
    {
      q: "Do you provide delivery across India?",
      a: "Yes. We deliver our premium collections safely and quickly across India with trusted delivery partners.",
    },

    {
      q: "Do you take WhatsApp orders?",
      a: "Yes. You can directly message us on WhatsApp to place your orders easily and quickly.",
    },

    {
      q: "Are the fabrics comfortable for daily wear?",
      a: "Absolutely. Our collections are crafted using premium fabrics designed for comfort, elegance and everyday wear.",
    },

    {
      q: "Do you launch new collections regularly?",
      a: "Yes. We frequently introduce trendy new arrivals and exclusive fashion collections for modern women and kids.",
    },
  ]

  return (

    <div className="px-6 md:px-16 py-40 overflow-hidden">

      {/* TITLE */}

      <div className="text-center max-w-4xl mx-auto">

        <p className="uppercase tracking-[6px] text-yellow-300">
          FAQ
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mt-8 text-white leading-tight">

          Frequently Asked Questions

        </h1>

        <p className="mt-10 text-gray-400 font-light leading-9">

          Everything you need to know about our collections, delivery and ordering process.

        </p>

      </div>

      {/* FAQ */}

      <div className="max-w-5xl mx-auto mt-20 space-y-6">

        {faqs.map((item, index) => (

          <motion.div

            key={index}

            whileHover={{
              y: -3,
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
              overflow-hidden
            "
          >

            {/* QUESTION */}

            <button

              onClick={() =>
                setOpen(open === index ? null : index)
              }

              className="
                w-full
                flex
                items-center
                justify-between
                gap-6
                text-left
                p-8
                md:p-10
              "
            >

              <h1 className="text-2xl md:text-3xl text-white font-serif leading-tight">

                {item.q}

              </h1>

              <div className="
                min-w-[55px]
                min-h-[55px]
                rounded-2xl
                bg-yellow-400/10
                border
                border-yellow-300/20
                flex
                items-center
                justify-center
                text-yellow-300
              ">

                {open === index ? <Minus /> : <Plus />}

              </div>

            </button>

            {/* ANSWER */}

            <AnimatePresence>

              {open === index && (

                <motion.div

                  initial={{
                    height: 0,
                    opacity: 0,
                  }}

                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}

                  exit={{
                    height: 0,
                    opacity: 0,
                  }}

                  transition={{
                    duration: 0.4,
                  }}

                  className="overflow-hidden"
                >

                  <p className="
                    px-8
                    md:px-10
                    pb-10
                    text-gray-400
                    font-light
                    leading-8
                  ">

                    {item.a}

                  </p>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </div>
  )
}