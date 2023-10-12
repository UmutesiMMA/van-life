import {Link,Outlet} from 'react-router-dom'
export default function HostLayout(){
    return(
        <>
        <div className='flex gap-28 pl-3 py-5 font-bold'>
        <Link to ='.'>Dashboard</Link>
        <Link to ='Income'>Income</Link>
        <Link to ='Vans'>Vans</Link>
        <Link to ='Reviews'>Reviews</Link>
        </div>
        <Outlet/>
        </>
    )
}