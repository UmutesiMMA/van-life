// import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="bg-home bg-no-repeat bg-cover w-full min-h-[490px] text-white px-10  md:px-24">
            <h1 className="text-4xl  font-bold p-12">You got the travel plans, we got the travel vans.</h1>
            <p className="text-xl py-3 mb-16">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans" className="bg-green-900 text-white px-44 py-4 rounded-md flex justify-center ">Find your van</Link>
        </div>
    )
}