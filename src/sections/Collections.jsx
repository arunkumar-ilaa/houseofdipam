export default function Collections() {

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
    <div className="px-6 md:px-16 py-40">

      <div className="text-center">

        <p className="uppercase tracking-[6px] text-yellow-300">
          Our Collections
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mt-8 mb-20 text-white">

          Signature Styles

        </h1>

      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {products.map((item, index) => (

          <div
            key={index}
            className="group relative overflow-hidden rounded-[40px]"
          >

            <img
              src={item.image}
              alt="fashion"
              className="h-[520px] w-full object-cover group-hover:scale-110 duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-0 p-10">

              <h1 className="text-4xl font-serif text-white">
                {item.title}
              </h1>

              <button className="mt-6 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full text-white hover:bg-yellow-500 hover:text-black duration-500">

                Explore Collection

              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}