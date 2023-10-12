import { useOutletContext } from "react-router-dom"
export default function HostVansPrice(){
    let data = useOutletContext()
    return (
        <p>${data.price} / day</p>
    )
}