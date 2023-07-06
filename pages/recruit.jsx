import React, { useState, useEffect } from "react";
import Image from "next/image";
import thisPic from "/img/recruit10.png";
import goldenRe from "/img/goldrecruit.png";

const items = [
  { value: "Solar Elite 5", rarity: 0.19, img: "/SolarElite5.png" },
  { value: "Flame Herald 5", rarity: 0.19, img: "/FlameHerald5.png" },
  { value: "Heavy Duty 5", rarity: 0.19, img: "/HeavyDu5.png" },
  { value: "Frost Savant 5", rarity: 0.19, img: "/FrostSavant5.png" },
  { value: "Storm Elite 5", rarity: 0.19, img: "/StormElite5.png" },
  { value: "Physci Agent 5", rarity: 0.19, img: "/PsychiAgent5.png" },
  { value: "Aurora Warrior 5", rarity: 0.19, img: "/AuroraWarrior5.png" },

  { value: "Frost Scholar 5", rarity: 0.19, img: "/FrostScholar5.png" },
  { value: "Star Vanguard 5", rarity: 0.19, img: "/StarVanguard5.png" },
  { value: "Magnetic Warrior 5", rarity: 0.19, img: "/MagneticWarrior5.png" },
  { value: "Blood Fighter 5", rarity: 0.19, img: "/BloodFigther5.png" },
  { value: "Ruthless Canon5", rarity: 0.19, img: "/RuthlessCannon5.png" },

  { value: "Eternal Flame 5", rarity: 0.19, img: "/EternalFlame5.png" },
  { value: "War Goddess 5", rarity: 0.19, img: "/WarGoddess5.png" },
  { value: "Furious Firefist 5", rarity: 0.19, img: "/FuriousFirefist5.png" },
  { value: "Wraith Gunner 5", rarity: 0.19, img: "/WraithGunner5.png" },
  { value: "Solar Guardian 5", rarity: 0.19, img: "/SolarGuardian5.png" },

  { value: "War Machine 5", rarity: 0.19, img: "/WarMachine5.png" },
  { value: "Ghost Gaze 5", rarity: 0.19, img: "/GhostGaze5.png" },
  { value: "Storm Heart 5", rarity: 0.19, img: "/StormHeart5.png" },
  { value: "Riot Zealot", rarity: 0.19, img: "/RiotZealot5.png" },
  { value: "Biochemical 5", rarity: 0.19, img: "/BiochemicalWargirl5.png" },

  { value: "Storm Knight5", rarity: 0.19, img: "/StormKnight5.png" },
  { value: "Storm Arrow5", rarity: 0.19, img: "/StormArrow5.png" },
  { value: "Time Collector 5", rarity: 0.19, img: "/TimeCollector5.png" },
  { value: "Machine Herald 5", rarity: 0.19, img: "/MachineHerald5.png" },
  { value: "Explosives 5", rarity: 0.19, img: "/ExplosivesMaestro5.png" },

  { value: "Solar Elite 4", rarity: 1.25, img: "/SolarElite4.png" },
  { value: "Flame Herald 4", rarity: 1.25, img: "/FlameHerald4.png" },
  { value: "Heavy Duty 4", rarity: 1.25, img: "/HeavyDutyInf4.png" },
  { value: "Frost Savant 4", rarity: 1.25, img: "/FrostSavant4.png" },
  { value: "Storm Elite 4", rarity: 1.25, img: "/StormElite4.png" },
  { value: "Psychi Agent4 ", rarity: 1.25, img: "/PsychiAgent4.png" },
  { value: "Aurora Warrior 4", rarity: 1.25, img: "/AuroraWarrior4.png" },
  { value: "Frost Scholar 4", rarity: 1.25, img: "/FrostScholar4.png" },
  { value: "Star Vanguard 4", rarity: 1.25, img: "/StarVanguard4.png" },
  { value: "Magnetic Warrior 4", rarity: 1.25, img: "/MagneticWarrior4.png" },
  { value: "Blood Fighter 4", rarity: 1.25, img: "/BloodFighter4.png" },
  { value: "Ruthless Cannon 4", rarity: 1.25, img: "/RuthlessCannon4.png" },

  { value: "Solar Elite 3", rarity: 2.5, img: "/SolarElite3.png" },
  { value: "Flame Herald 3", rarity: 2.5, img: "/FlameHerald3.png" },
  { value: "Heavy Duty 3", rarity: 2.5, img: "/HeavyDutyInf3.png" },
  { value: "Frost Savant 3", rarity: 2.5, img: "/FrostSavant3.png" },
  { value: "Storm Elite 3", rarity: 2.5, img: "/StormElite3.png" },
  { value: "Pyhsic Agent 3", rarity: 2.5, img: "/PsychiAgent3.png" },
  { value: "Aurora Warrior 3", rarity: 2.5, img: "/AuroraWarrior3.png" },
  { value: "Frost Scholar 3", rarity: 2.5, img: "/FrostScholar3.png" },
  { value: "Star Vanguard3", rarity: 2.5, img: "/StarVanguard3.png" },
  { value: "Magnetic Warrior 3", rarity: 2.5, img: "/MagneticWarrior3.png" },
  { value: "Blood Fighter3", rarity: 2.5, img: "/BloodFighter3.png" },
  { value: "Ruth 3", rarity: 2.5, img: "/RuthlessCannon3.png" },

  { value: "PA 2", rarity: 8.33, img: "/test1.png" },
  { value: "PA 2", rarity: 8.33, img: "/test2.png" },
  { value: "PA 2", rarity: 8.33, img: "/test3.png" },
  { value: "PA 2", rarity: 8.33, img: "/test4.png" },
  { value: "lul 2", rarity: 8.33, img: "/test5.png" },
  { value: "PA 2", rarity: 8.33, img: "/test6.png" },
];

const ResultsGenerator = () => {
  const [results, setResults] = useState([]);
  const [counter, setCounter] = useState({});
  const [goldSpent, setGoldSpent] = useState(0);

  const generateResults = () => {
    const generatedResults = [];

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.random() * 100; // Random number between 0 and 100
      let cumulativePercentage = 0;
      let selectedValue;

      for (const item of items) {
        cumulativePercentage += item.rarity;

        if (randomNum <= cumulativePercentage) {
          selectedValue = item;
          break;
        }
      }

      generatedResults.push(selectedValue);
    }

    setResults(generatedResults);

    // Update the counter
    const updatedCounter = { ...counter };
    generatedResults.forEach((result) => {
      if (updatedCounter[result.value]) {
        updatedCounter[result.value] += 1;
      } else {
        updatedCounter[result.value] = 1;
      }
    });
    setCounter(updatedCounter);

    // Update gold spent
    setGoldSpent((prevGoldSpent) => prevGoldSpent + 2900);
  };

  const resetCounter = () => {
    setCounter({});
    setGoldSpent(0);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center mt-32">
        Recruit Protector Simulator
      </h1>
      <div className="mb-8 relative">
        <Image
          src={goldenRe}
          alt="Golden Image"
          width={500}
          height={500}
          className="rounded-full"
        />
        <p className="text-white mr-2 font-bold text-lg">
          <img src="/gold.png" />
          Gold Spent: {goldSpent}
        </p>
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </div>
      <div className="flex mt-2 justify-center bg-gradient-to-r from-[#1A203E] via-[#192A46] to-[#20314B] rounded-lg">
        {results.map((result, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-2 justify-center"
          >
            <p className="bottom">{counter[result.value] || 0}</p>
            <img src={result.img} alt={result.value} />
          </div>
        ))}
      </div>

      <div className="flex cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110 mt-4">
        <Image
          src={thisPic}
          alt="ThisPic"
          onClick={generateResults}
          className="rounded-full"
        />
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full max-w-xs transition duration-300 ease-in-out hover:scale-110 mt-4 mb-10"
        onClick={resetCounter}
      >
        Reset Counter
      </button>
    </div>
  );
};

export default ResultsGenerator;
