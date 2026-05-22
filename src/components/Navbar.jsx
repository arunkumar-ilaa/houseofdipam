export default function Navbar(props) {
  return (
    <div className="bg-black text-white p-4">
      <h1 className="text-2xl font-bold">
       {props.title}
      </h1>
    </div>
  )
}