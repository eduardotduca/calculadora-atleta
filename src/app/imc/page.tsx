"use client";
import {
  IMC,
  Macronutrients,
  Gender,
  MacronutrientsStrategy,
  PhysicalActivityLevel,
} from "@castrillon7/imc-calculator";
import { useState } from "react";
import { CalculatorIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { GiFruitBowl } from "react-icons/gi";
import Link from "next/link";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const imcCalculo = JSON.stringify(
    IMC.calculate(Number(weight), Number(height))
  );

  return (
    <main className="flex justify-center items-center h-screen bg-indigo-950">
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-center gap-">
          <CalculatorIcon className="h-20 w-20 text-lime-500" />
          <Link href={"/"} target="">
            <ArrowUturnLeftIcon className="h-20 w-20 text-lime-500" />
          </Link>
        </div>
        <h1 className="text-center text-4xl font-bold text-lime-500">
          Calculadora de IMC
        </h1>
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="text"
          id="weight"
          placeholder="Peso (kg)"
          className="bg-white text-black height-20 w-full p-2 rounded-lg text-center"
        />
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="text"
          id="height"
          placeholder="Altura (ex: 1.80)"
          className="bg-white text-black height-20 w-full p-2 rounded-lg text-center"
        />
        <p className="text-center text-xl font-bold text-white">
          Resultado: {imcCalculo}
        </p>
      </div>
    </main>
  );
}
