import { Link } from "react-router-dom";

export  default function NotFound  (){
    return(
        <div  className="mt-[25%] flex flex-col items-center space-y-6">
        <h4 className="text-4xl font-bold "> 404! Page not found</h4>
        <Link to='/' className="p-3 border-[1px]  border-blue-500 rounded-sm w-24 text-center">Home</Link>
        </div>
    )

}