import { useOutletContext } from "react-router-dom"
export default function HostVansDetails(){
    let data = useOutletContext()
    console.log(data)
    return (
        <div className="space-y-4 ">
            <p className="text-gray-900"><span className="text-lg font-medium">Name: </span>{data.name}</p>
            <p className="text-gray-900"><span className="text-lg font-medium">Category: </span>{data.type}</p>
            <p className="text-gray-900"><span className="text-lg font-medium">Description: </span>{data.description}</p>
            <p className="text-gray-900"><span className="text-lg font-medium">Visibility: </span>Public</p>
        </div>
    )
}