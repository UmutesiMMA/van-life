import { useOutletContext } from "react-router-dom"

export default function HostVansPhotos(){
    let data = useOutletContext()
    return (
        <>
        <img src={data.imageUrl} alt={`${data.name} van`} className="max-h-72 rounded"/>
        </>
    )
}