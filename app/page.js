import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className=" h-100 w-100 flex items-center justify-around bg-zinc-200 rounded-2xl">
        <div className="h-25 w-25 items-center justify-center bg-white text-black rounded-xl">
          <button className="w-full h-full text-center text-black text-2xl border-2 border-zinc-300 shadow-xl/15">0</button>
        </div>
        <div className="h-50 w-50 flex flex-col items-center justify-center bg-transparent text-black gap-3">
          <button className="w-full bg-white text-black text-xl rounded-lg border-2 border-zinc-300 shadow-xl/15">Incrementar</button>
          <button className="w-full bg-white text-black text-xl rounded-lg border-2 border-zinc-300 shadow-xl/15">Zerar</button>
          <button className="w-full bg-white text-black text-xl rounded-lg border-2 border-zinc-300 shadow-xl/15">Decrementar </button>
        </div>
      </div>
    </div>
  );
}
