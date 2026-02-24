import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className=" h-100 w-100 flex flex-col items-center bg-zinc-200 rounded-2xl">
        <div className="h-20 w-50 flex flex-col justify-center items-center mt-10">
          <h1 className="text-black font-bold text-2xl">Nome:</h1>
          <input type="text" className="text-black font-bold text-xl w-50 mt-2 h-10 rounded-2xl bg-white text-center"></input>
        </div>
        <div className="h-20 w-50 flex flex-col justify-center items-center mt-5">
          <h1 className="text-black font-bold text-2xl">Sobrenome:</h1>
          <input type="text" className="text-black font-bold text-xl w-50 mt-2 h-10 rounded-2xl bg-white text-center"></input>
        </div>
        <button className="text-black text-2xl h-10 w-50 bg-white rounded-2xl font-bold mt-10">Exibir Nome</button>
      </div>

    </div>
  );
}
