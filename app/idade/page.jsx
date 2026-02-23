import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className=" h-100 w-100 flex flex-col items-center bg-zinc-200 rounded-2xl">
        <div className="h-20 w-full flex justify-around items-center bg-transparent mt-10">
          <h1 className="text-black font-bold text-2xl">Ano Atual</h1>
          <input type="number" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-white font-bold text-xl w-25 h-15 rounded-2xl bg-purple-500 text-center"></input>
        </div>
        <div className="h-20 w-full flex justify-center items-center bg-transparent">
          <h1 className="text-black font-bold text-lg">Ano de Nascimento</h1>
          <input type="number" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-white ml-10 font-bold text-xl w-25 rounded-2xl h-15 bg-purple-500 text-center"></input>
        </div>
        <div className="h-20 w-full flex justify-center items-center bg-transparent">
          <h1 className="text-black font-bold text-2xl">Idade</h1>
          <input type="number" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-white ml-36 font-bold text-xl w-25 rounded-2xl h-15 bg-purple-500 text-center"></input>
        </div>
        <div className="h-20 w-full flex justify-center items-center bg-transparent mt-5">
          <button className="text-black text-2xl h-10 w-40 bg-purple-500 rounded-2xl font-bold">Calcular</button>
        </div>
      </div>
    </div>
  );
}
