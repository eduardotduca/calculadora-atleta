"use client";
import { BoltIcon, CalculatorIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-indigo-950">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-center text-4xl font-bold text-lime-500">
          Calculadora do Atleta
        </h1>

        <h2 className="text-center text-lg text-white">
          Para ser atleta, é preciso ter planejamento!
        </h2>

        <h3 className="text-center text-base mt-2 text-white">
          Descubra o seu IMC e as calorias necessárias para o seu objetivo
        </h3>

        <div className="flex justify-center flex-row gap-x-4 ">
          <Link href={"/imc"} target="_blank">
            <CalculatorIcon className="h-20 w-20 text-lime-500" />
          </Link>

          <Link href={"/macroNutrients"}>
            <BoltIcon className="h-20 w-20 text-lime-500" />
          </Link>
        </div>
      </div>
    </main>
  );
}
