import { useRouteError } from "react-router-dom"

export default function Error(){
    let error = useRouteError()
    console.log(error)
    return(
        <div className="text-center pt-32">
        <pre className="text-2xl">{error.message}</pre>
        <pre className="">{error.status} - {error.statusText}</pre>
        </div>
    )
}