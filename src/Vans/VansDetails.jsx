import {getVan} from '../../api.js'
import { useLoaderData, Link, useLocation} from 'react-router-dom'
import colors from '../helper/colors.jsx'
export function Loader({params}){
    return getVan(params.id)
}
export default function VansDetails(){
    
    const van=useLoaderData()
    const location = useLocation()
    console.log(location)
    let url =location.state?.url ||'' 
    console.log(url)
    return(
        <>
        <Link 
        to={`..${url}`}
        relative="path" 
        className='p-5 underline'
        >&#8592; Back to {url ==='?'? 'all':location.state.name} vans </Link>
        <div key={van.id} className='flex flex-col px-24 py-6 space-y-3 mb-40' >
                <img src={van.imageUrl} alt='van' className='max-h-[33rem] max-w-5xl rounded-md'/>
                <p  className='text-2xl font-semibold'>{van.name}</p>
               <p className='font-medium'>{van.price}/day</p>
                <div className={`py-2 w-24 text-center ${colors(van.type)} text-white font-bold rounded-md`}>{van.type}</div>
                <p className='text-xl py-3'>{van.description}</p>
                <Link to='..' className={`${colors(van.type)} p-3 rounded-md text-center text-white font-bold md:w-[45rem] mx-auto`}> Rent the van </Link>
        </div>
        </>
    )
}