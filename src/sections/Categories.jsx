export default function Categories() {
  return (
    <div id="collections" className="px-6 md:px-12 py-24 bg-[#fffaf5]">

      <div className="text-center">

        <p className="uppercase tracking-[4px] text-[#8b5a2b]">
          Our Categories
        </p>

        <h1 className="text-5xl font-serif text-[#4b0017] mt-4">
          Signature Collections
        </h1>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="bg-white rounded-[30px] p-10 shadow-lg hover:-translate-y-3 duration-300 border border-[#f1e1d3]">

          <div className="text-6xl">👗</div>

          <h1 className="text-3xl font-serif text-[#4b0017] mt-6">
            Feeding Kurtas
          </h1>

          <p className="text-gray-500 mt-5 leading-8">
            Elegant and comfortable feeding kurtas designed for modern moms.
          </p>

        </div>

        <div className="bg-white rounded-[30px] p-10 shadow-lg hover:-translate-y-3 duration-300 border border-[#f1e1d3]">

          <div className="text-6xl">✨</div>

          <h1 className="text-3xl font-serif text-[#4b0017] mt-6">
            Trendy Nighties
          </h1>

          <p className="text-gray-500 mt-5 leading-8">
            Premium nightwear collections combining style and comfort.
          </p>

        </div>

        <div className="bg-white rounded-[30px] p-10 shadow-lg hover:-translate-y-3 duration-300 border border-[#f1e1d3]">

          <div className="text-6xl">🧸</div>

          <h1 className="text-3xl font-serif text-[#4b0017] mt-6">
            Kidswear
          </h1>

          <p className="text-gray-500 mt-5 leading-8">
            Cute and comfortable outfits crafted for your little ones.
          </p>

        </div>

      </div>

    </div>
  )
}