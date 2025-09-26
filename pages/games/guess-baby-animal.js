"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";

const animals = [
    { name: "fry", image: "/images/fry.jpg" },           // baby fish
    { name: "kitten", image: "/images/kitten.jpg" },       // baby cat
    { name: "puppy", image: "/images/puppy.jpg" },         // baby dog
    { name: "leveret", image: "/images/baby hare.jpg" }, // baby hare
    { name: "cub", image: "/images/baby bear_lion.jpg" },             // baby bear/lion
    { name: "calf", image: "/images/calf.jpg" },           // baby cow/elephant
    { name: "fawn", image: "/images/baby deer.jpg" },           // baby deer
    { name: "chick", image: "/images/baby chicken.jpg" },         // baby chicken
    { name: "gosling", image: "/images/baby goose.jpg" },     // baby goose
    { name: "duckling", image: "/images/baby duck.jpg" },   // baby duck
    { name: "poult", image: "/images/baby turkey.jpg" },     // baby turkey
    { name: "joey", image: "/images/baby kangaroo.jpg" },           // baby kangaroo
    { name: "eyas", image: "/images/baby falcon_hawk.jpg" },       // baby falcon/hawk
    { name: "hatchling", image: "/images/baby reptile_turtle.jpg" }, // baby reptile/turtle
    { name: "larva", image: "/images/baby insect.jpg" },         // baby insect
    { name: "tadpole", image: "images/baby frog.jpg" },     // baby frog
    { name: "puggle", image: "/images/baby platypus.jpg" },       // baby platypus
    { name: "fledgling", image: "/images/fledgling.jpg" }, // baby bird
    { name: "owlet", image: "/images/baby owl.jpg" },     // baby owl
    { name: "cub", image: "/images/baby big cat.jpg" }              // baby big cat/bear
];

export default function GuessBabyAnimalMCQ() {
    const [currentAnimal, setCurrentAnimal] = useState(null);
    const [options, setOptions] = useState([]);
    const [result, setResult] = useState("");
    const [score, setScore] = useState(0);

    useEffect(() => {
        pickRandomAnimal();
    }, []);

    const pickRandomAnimal = () => {
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        setCurrentAnimal(randomAnimal);
        setResult("");

        // Create 5 options
        let choices = [randomAnimal.name];
        while (choices.length < 5) {
            const randomOption = animals[Math.floor(Math.random() * animals.length)].name;
            if (!choices.includes(randomOption)) {
                choices.push(randomOption);
            }
        }

        // Shuffle options
        setOptions(choices.sort(() => Math.random() - 0.5));
    };

    const checkAnswer = (answer) => {
        if (answer === currentAnimal.name) {
            setScore(score + 10);
            setResult("🎉 Correct! +10 points");

            // Auto move to next animal after 1 second
            setTimeout(() => {
                pickRandomAnimal();
            }, 1000);
        } else {
            setScore(score - 5);
            setResult(`❌ Wrong! -5 points. It was "${currentAnimal.name}"`);
        }
    };

    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <Header />
            <div className="my-8 p-4 bg-orange-50 border rounded shadow">
                <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
                <AdBanner />
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-4">
                <h1 className="text-3xl font-bold text-orange-500 mb-4">Guess the Baby Animal</h1>
                <h2 className="text-xl font-semibold mb-6">Score: {score}</h2>

                {currentAnimal && (
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
                        <Image
                            src={currentAnimal.image}
                            alt={currentAnimal.name}
                            width={256}       // corresponds to w-64
                            height={256}      // corresponds to h-64
                            className="object-cover rounded-lg mb-4 mx-auto"
                        />

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => checkAnswer(option)}
                                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        <div className="mt-4 font-semibold text-lg">{result}</div>

                        <button
                            onClick={pickRandomAnimal}
                            className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                        >
                            Next Animal
                        </button>
                    </div>
                )}
                <div className="my-8 p-4 bg-orange-50 border rounded shadow">
                    <h3 className="text-lg font-semibold mb-3 text-orange-600">Sponsored</h3>
                    <AdBanner />
                </div>
                <Footer />
            </div>
        </div>
    );
}
