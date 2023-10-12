import {Link, useLoaderData} from 'react-router-dom'
import { getHostVans } from '../../api'
import {requireAuth} from '../../Authorization'

export async function HostVansLoader({request}){
    await requireAuth(request)
    return getHostVans() 
}
export default function Vans(){
    let hostVans = useLoaderData()
    const hostVansEls = hostVans.map(van => (
        <Link
            to={van.id}
            key={van.id}
        >
            <div className="flex gap-8 bg-[#eaf8fa] text-yellow-950" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} className='max-h-32 w-40'/>
                <div className="py-8">
                    <h3 className='text-2xl font-semibold'>{van.name}</h3>
                    <p className=' font-medium'>${van.price}/day</p>
                </div>
            </div>
        </Link>))
    return(
        <div className='flex flex-col gap-6 p-10 mb-40'>
        {hostVansEls}
        </div>
    )
}