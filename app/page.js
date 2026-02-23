import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Image src="/fundolandpage.png" alt="FundoLand" fill className="object-cover opacity-30" priority/>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4988C4] mb-4">Qual tela você quer ir?</h1>
      </div>
      <div className="absolute bottom-60 left-0 right-0 flex justify-center items-center">
        <a href="/contador" className="bg-[#4988C4] text-white text-2xl px-6 py-3 w-70 h-15 rounded-lg text-center flex justify-center items-center font-bold hover:bg-[#3a6ca0]">
          Ir para o Contador
        </a>
        <a href="/calculadora" className="bg-[#4988C4] text-white text-2xl px-6 py-3 w-70 h-15 rounded-lg text-center flex justify-center items-center font-bold hover:bg-[#3a6ca0] ml-15">
          Ir para a Calculadora
        </a><a href="/idade" className="bg-[#4988C4] text-white text-2xl px-6 py-3 w-70 h-15 rounded-lg text-center flex justify-center items-center font-bold hover:bg-[#3a6ca0] ml-15">
          Calcular Idade
        </a>
      </div>
    </div>
  );
}
