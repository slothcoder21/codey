import Image from "next/image";
import Table from "../components/table";
import Navbar from "../components/navbar";

export default function Home()
{
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-white via-[#8ECEE1] to-[#8FBEEA]">
      <Navbar />
      <div className="flex flex-col items-center sm:py-20 md:py-40 lg:py-50">
        <h1 className="text-5xl font-bold">Ace your Interviews.</h1>
        <p className="text-md font-semibold text-gray-500">Codey is a platform that helps you prepare and practice for your next coding interviews.</p>
      </div>
    </div>
  )
}