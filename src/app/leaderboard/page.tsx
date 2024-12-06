import Navbar from "@/components/navbar";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";

export default function LeaderBoard() {
    
    return (
        <>
            <Navbar/>
            <MainContent
                content={
                    <main className="flex flex-col items-center justify-center flex-grow bg-gray-100 py-20 pt-1">
                        <div className="bg-white shadow-lg rounded-lg p-12 w-[300%] max-w-screen-xl">
                            <h1 className="text-4xl font-bold text-center mb-8">Класация</h1>
                            
                            <ol className="list-decimal list-inside text-xl space-y-4">
                                <li>User 1</li>
                                <li>User 2</li>
                                <li>User 3</li>
                            </ol>
                        </div>
                    </main>
                }/>
            <Footer/>
        </>
    )
}