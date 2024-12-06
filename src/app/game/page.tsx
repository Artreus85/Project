"use client"

import Navbar from "@/components/navbar";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";
import GameQuestion from "@/components/game-question";

export default function Game() {
    const handleOptionSelect = (selectedOption: string) => {
        console.log("Избран отговор:", selectedOption);
    };

    
    return (
        <>
            <Navbar/>
            <MainContent 
                content={
                    <main className="flex flex-col items-center justify-center flex-grow bg-gray-100 py-20 pt-1">
                        <div className="bg-white shadow-lg rounded-lg p-8 max-w-10x w-full">
                            <h1 className="text-3xl font-bold text-center mb-6">Игра</h1>

                            <GameQuestion
                                question="Къде се намира обектът от снимката?"
                                imageSrc="/game-question-images/testImage1.jpg" // Path to your image
                                options={["В сервиза", "На магистралата", "В Тракия"]}
                                onOptionSelect={handleOptionSelect} // Passing event handler here
                            />
                        </div>
                    </main>
                }/>
            <Footer/>
        </>
    );
}