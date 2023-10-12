import {getVans} from '../../api.js'
import {useLoaderData,Link, useSearchParams} from 'react-router-dom'
import colors from '../helper/colors.jsx'

export async function Loader(){
    return getVans()
}

export default function Vans(){
    const [searchParams , setSearchParams] = useSearchParams()
    let typeFilter = searchParams.get('type')

    const vans = useLoaderData()
    let displayedVans = typeFilter ? vans.filter(van=>van.type===typeFilter):vans 
    let elements = displayedVans.map((van)=>(
        <div key={van.id} >
            <Link to={`${van.id}`} state = {{url:`?${searchParams.toString()}`,name:van.type}} className='space-y-2'>
                <img src={van.imageUrl} alt='van' className='rounded-md'/>
                <div className='flex justify-between pr-3'>
                    <p  className='text-xl font-semibold'>{van.name}</p>
                    <p>{van.price}/day</p>
                </div>
                <div className={`p-2 w-24 ${colors(van.type)} text-white text-center font-bold rounded-md`}>{van.type}</div>
            </Link>
        </div>
    ))
    return(
    <>
       <h3 className='text-3xl font-semibold p-6'>Explore our vans options</h3>
       <div className='flex gap-6 p-6 '>
        <button onClick={()=>setSearchParams({type:'simple'})} className={`px-6 py-2 rounded font-medium hover:bg-[#E17654] hover:text-white ${typeFilter === 'simple'? 'bg-[#E17654] text-white':'bg-green-300'}`}>Simple</button>
        <button onClick={()=>setSearchParams({type:'luxury'})} className={`px-6 py-2 rounded font-medium hover:bg-[#161616] hover:text-white ${typeFilter === 'luxury'? 'bg-[#161616] text-white':'bg-green-300'}`}>Luxury</button>
        <button onClick={()=>setSearchParams({type:'rugged'})} className={`px-6 py-2 rounded font-medium hover:bg-[#115E59] hover:text-white ${typeFilter === 'rugged'? 'bg-[#115E59] text-white':'bg-green-300'}`}>Rugged</button>
        {typeFilter && <button onClick={()=>setSearchParams({})} className={`px-6 py-2 rounded font-medium hover:bg-green-700 hover:text-white ${typeFilter === ''? 'bg-green-700 text-white':'bg-green-300'}`} >Clear filter</button>}
       </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 p-4 mb-40'>
            {elements}
        </div>
    </>
    )
}