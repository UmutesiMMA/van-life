import {Link, useLoaderData,defer,Await} from 'react-router-dom'
import {Suspense } from  'react'
import { getHostVans } from '../../api'
import {requireAuth} from '../../Authorization'

export async function HostVansLoader({request}){
    await requireAuth(request)
    return defer({hostVans:getHostVans()})
}

export default function Vans(){
    let hostVansPromise = useLoaderData()

    function renderHostVans(hostVans){
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

    return(
        <Suspense fallback={<h4 className='text-3xl ml-5'>Loading your vans list</h4>}>
        <Await resolve={hostVansPromise.hostVans}>
            {renderHostVans}               
        </Await>
        </Suspense>
        
    )
}