import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className=" h-100 w-100 flex flex-col items-center bg-blue-300 rounded-2xl">
        <div className="text-black text-2xl flex justify-center items-center mt-2 font-bold">Temperature Converter
        </div>
        <div className="h-20 w-50 flex flex-row justify-center items-center mt-5">
          <h1 className="text-black font-bold text-xl mr-2">Cº:</h1>
          <input type="number" className="text-black font-bold text-xl w-50 mt-2 h-10 rounded-2xl bg-white text-center"></input>
        </div>
        <div className="h-20 w-50 flex flex-row justify-center items-center mt-5">
          <h1 className="text-black font-bold text-xl mr-2">°F:</h1>
          <input type="number" className="text-black font-bold text-xl w-50 mt-2 h-10 rounded-2xl bg-white text-center"></input>
        </div>
        <button className="text-black text-2xl h-10 w-50 bg-white rounded-2xl font-bold mt-10">Calcular</button>
      </div>
    </div>
  );
}
