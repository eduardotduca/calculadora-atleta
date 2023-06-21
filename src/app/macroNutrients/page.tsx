"use client";
import {
  IMC,
  Macronutrients,
  Gender,
  MacronutrientsStrategy,
  PhysicalActivityLevel,
} from "@castrillon7/imc-calculator";
import { useEffect, useState } from "react";
import { BoltIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { GiFruitBowl } from "react-icons/gi";
import Link from "next/link";

interface IMacro {
  fat: number;
  protein: number;
  carbohydrates: number;
}

const genders = ["HOMEM", "MULHER"];
const goals = ["BULKING", "CUTTING", "MANTER"];
const activities = [
  "SEDENTÁRIO",
  "POUCO ATIVO",
  "MUITO ATIVO",
  "EXTREMAMENTE ATIVO",
];

function returnGenderValue(gender: string) {
  switch (gender) {
    case "HOMEM":
      return Gender.MALE;
    case "MULHER":
      return Gender.FEMALE;
    default:
      return Gender.MALE;
  }
}

function returnGoalsValue(goals: string) {
  switch (goals) {
    case "BULKING":
      return MacronutrientsStrategy.BULKING;
    case "CUTTING":
      return MacronutrientsStrategy.CUTTING;
    case "MANTER":
      return MacronutrientsStrategy.MAINTAIN;
    default:
      return MacronutrientsStrategy.MAINTAIN;
  }
}

function returnPhysicialLevel(activities: string) {
  switch (activities) {
    case "SEDENTÁRIO":
      return PhysicalActivityLevel.SEDENTARY;
    case "POUCO ATIVO":
      return PhysicalActivityLevel.SOMEWHAT_ACTIVE;
    case "MUITO ATIVO":
      return PhysicalActivityLevel.HIGHLY_ACTIVE;
    case "EXTREMAMENTE ATIVO":
      return PhysicalActivityLevel.EXTREMELY_ACTIVE;
    default:
      return PhysicalActivityLevel.SOMEWHAT_ACTIVE;
  }
}

export default function Home() {
  const [weight, setWeight] = useState("35");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [activity, setActivity] = useState("");
  const [macro, setMacro] = useState<IMacro>({
    fat: 0,
    protein: 0,
    carbohydrates: 0,
  });

  useEffect(() => {
    if (Number(weight) > 35) {
      const macroCalculo = Macronutrients.calculate(
        Number(weight),
        returnGenderValue(gender),
        returnGoalsValue(goal),
        returnPhysicialLevel(activity)
      );

      setMacro(macroCalculo);
    }
  }, [weight, gender, goal, activity]);

  return (
    <main className="flex justify-center items-center h-screen bg-indigo-950">
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-center gap-">
          <BoltIcon className="h-20 w-20 text-lime-500" />
          <Link href={"/"} target="">
            <ArrowUturnLeftIcon className="h-20 w-20 text-lime-500" />
          </Link>
        </div>
        <h1 className="text-center text-4xl font-bold text-lime-500">
          Calculadora de Macro Nutrientes
        </h1>
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="text"
          id="weight"
          placeholder="Peso (kg)"
          className="bg-white text-black height-20 w-full p-2 rounded-lg text-center"
        />

        <select
          name="gender"
          id=""
          placeholder="Gênero"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          {genders.map((gender, index) => (
            <option key={index} value={gender}>
              {gender}
            </option>
          ))}
        </select>

        <select
          name="goals"
          id=""
          placeholder="Objetivos"
          value={goal}
          onChange={(e) => {
            setGoal(e.target.value);
          }}
        >
          {goals.map((goal, index) => (
            <option key={index} value={goal}>
              {goal}
            </option>
          ))}
        </select>

        <select
          name="activities"
          id=""
          placeholder="Gênero"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        >
          {activities.map((activity, index) => (
            <option key={index} value={activity}>
              {activity}
            </option>
          ))}
        </select>
        <p className="text-center text-xl font-bold text-white">
          Gordura: {macro.fat}g
        </p>
        <p className="text-center text-xl font-bold text-white">
          Proteina: {macro.protein}g
        </p>
        <p className="text-center text-xl font-bold text-white">
          Carboidratos: {macro.carbohydrates}g
        </p>
      </div>
    </main>
  );
}
