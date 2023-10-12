import{Outlet, useLoaderData,NavLink} from 'react-router-dom'
import { getHostVans } from '../../api'
import colors from '../helper/colors'

export function hVansInfo ({params}){
    return getHostVans(params.id)
}
export default function HostVansInfo(){
    const activeStyle={
        textDecoration:'underline'
    }
    let hostVansDetails = useLoaderData()
    return(<section className='bg-[#eaf8fa] p-5 mb-40 mt-10'>
        <div className='flex flex-col md:flex-row gap-9 mt-16'>
        <img src={hostVansDetails.imageUrl} alt={`${hostVansDetails.name} van`} className='max-h-64 w-[30rem] md:w-80 rounded' />
        <div className='md:pt-14 flex flex-col gap-3'>
            <p className={`p-2 w-24 ${colors(hostVansDetails.type)} text-white text-center font-bold rounded-md`}>{hostVansDetails.type}</p>
            <h3 className='text-2xl font-semibold'>{hostVansDetails.name}</h3>
            <p><span className='font-bold'>${hostVansDetails.price}</span>/day</p>
        </div>  
        </div>   
        <div>
            <div className='flex gap-16 text-xl font-medium text-gray-900 my-8'>
            <NavLink 
            to='.' 
            end
            className='hover:underline'
            style={({isActive})=>isActive?activeStyle:null} >Details</NavLink>
            <NavLink 
            to='Price' 
            className='hover:underline'
            style={({isActive})=>isActive?activeStyle:null} >Pricing</NavLink>
            <NavLink 
            to='Photos' 
            className='hover:underline'
            style={({isActive})=>isActive?activeStyle:null} >Photos</NavLink>
            </div>
        <Outlet context={hostVansDetails}/>
        </div>   
        </section>
    )
}