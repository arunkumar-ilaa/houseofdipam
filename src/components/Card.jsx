export default function Card(props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-60">
      
      <h1 className="text-2xl font-bold text-black">
        {props.name}
      </h1>

      <p className="text-gray-500 mt-2">
        ₹ {props.price}
      </p>

      <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
        Buy Now
      </button>

    </div>
  )
}