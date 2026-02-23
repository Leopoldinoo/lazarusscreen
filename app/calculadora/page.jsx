import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className=" h-100 w-100 flex flex-col items-center bg-zinc-200 rounded-2xl">
        <div className="w-80 h-15 bg-transparent flex justify-around mt-10 items-center">
          <h1 className="text-black font-bold text-2xl">A = </h1>
          <input type="number" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-25 h-15 border border-gray-300 rounded-md p-2 bg-white text-black text-center"/>
        </div>
        <div className="w-80 h-15 bg-transparent flex justify-around mt-5 mb-5 items-center">
          <h1 className="text-black font-bold text-2xl">B = </h1>
          <input type="number" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-25 h-15 border border-gray-300 rounded-md p-2 bg-white text-black text-center"/>
        </div>
        <div className="w-80 h-15 bg-transparent flex justify-center items-center">
          <h1 className="text-black font-bold text-lg">Resultado = </h1>
          <input type="number" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-25 h-15 border border-gray-300 rounded-md ml-6 p-2 bg-white text-black text-center"/>
        </div>
        <div className="w-80 h-15 bg-transparent mt-5 flex justify-center gap-5 items-center">
          <button className="text-black text-2xl h-full w-15 bg-white font-bold">+</button>
          <button className="text-black text-2xl h-full w-15 bg-white font-bold">-</button>
          <button className="text-black text-2xl h-full w-15 bg-white font-bold">x</button>
          <button className="text-black text-2xl h-full w-15 bg-white font-bold">/</button>
        </div>
        <h1 className="text-black font-bold text-xl mt-4">Senac Lavras</h1>
      </div>
    </div>
  );
}
