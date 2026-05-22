export default function Noise() {

  return (

    <div
      className="
        fixed
        inset-0
        pointer-events-none
        opacity-[0.04]
        z-[999]
      "
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    ></div>

  )
}