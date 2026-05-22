import { useEffect, useState } from "react"

export default function Testimonials() {

  const reviews = [
    {
      name: "Priya",
      review:
        "Absolutely loved the premium quality and elegant stitching.",
    },

    {
      name: "Nivetha",
      review:
        "The nightwear collection is stylish and very comfortable.",
    },

    {
      name: "Keerthana",
      review:
        "Packaging and delivery experience felt truly premium.",
    },

    {
      name: "Aishwarya",
      review:
        "Elegant collections with very soft and comfortable fabrics.",
    },

    {
      name: "Harini",
      review:
        "The fitting and fabric quality exceeded my expectations.",
    },

    {
      name: "Deepika",
      review:
        "Beautiful collections with premium boutique feel.",
    },
  ]

  const [current, setCurrent] = useState(0)

  // AUTO SLIDE

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide()

    }, 4000)

    return () => clearInterval(interval)

  }, [current])

  // NEXT

  const nextSlide = () => {

    if (window.innerWidth < 768) {

      // MOBILE

      if (current >= reviews.length - 1) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }

    } else {

      // DESKTOP

      if (current >= reviews.length - 3) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }

    }

  }

  return (
    <div id="reviews" className="px-6 md:px-16 py-20 overflow-hidden">

      <div className="text-center">

        <p className="uppercase tracking-[6px] text-yellow-300">
          Customer Love
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mt-8 text-white">

          What Women Say

        </h1>

      </div>

      {/* SLIDER */}

      <div className="relative justify-center px-2 md:px-10 mt-24">

        <div className="overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out gap-2 md:gap-8"
            style={{
              transform:
                window.innerWidth < 768
                  ? `translateX(-${current * 102}%)`
                  : `translateX(-${current * 33.33}%)`,
            }}
          >

            {reviews.map((item, index) => (

              <div
                key={index}
                className="
                  min-w-full
                  md:min-w-[31%]
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-[40px]
                  p-6
                  md:p-10
                "
              >

                <div className="text-yellow-300 text-2xl">
                  ★★★★★
                </div>

                <p className="text-gray-300 leading-8 md:leading-9 font-extralight text-base md:text-lg mt-6">

                  “{item.review}”

                </p>

                <h1 className="mt-5 md:mt-5 text-xl md:text-2xl text-white font-serif">

                  {item.name}

                </h1>

              </div>

            ))}

          </div>

        </div>

        {/* DOTS */}

        <div className="flex justify-center gap-3 mt-10">

          {Array.from({
            length:
              window.innerWidth < 768
                ? reviews.length
                : reviews.length - 2,
          }).map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full duration-300 ${
                current === index
                  ? "bg-yellow-300"
                  : "bg-white/30"
              }`}
            ></button>

          ))}

        </div>

      </div>

    </div>
  )
}