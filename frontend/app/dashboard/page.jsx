import Table from "../../components/table";
import Navbar from "../../components/navbar";

export default function Dashboard() {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-white via-[#8ECEE1] to-[#8FBEEA]">
            <Navbar />
            <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                <div className="w-full max-w-6xl">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Dashboard
                        </h1>
                        <p className="text-lg font-semibold text-gray-600 max-w-2xl mx-auto">
                            Track your progress and manage your coding interview preparation tasks.
                        </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}