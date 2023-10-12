import { NavLink,Link,Navigate} from 'react-router-dom'
const active={
    color:'white',
}

export default function Header(){
    return(
        <div className='flex items-center py-3 gap-10 pr-3'>
        <Link to='/' className='mr-auto text-4xl font-bold'>#VANLIFE</Link>
        <NavLink 
        to='Host' 
        className=' font-bold hover:text-green-900 hover:underline'
        > Host </NavLink>
        <NavLink 
        to='About'
        className={`font-bold hover:text-green-900 hover:underline ${({isActive})=>isActive?active:undefined}`}
        >About</NavLink>
        <NavLink 
        to='Vans'
        className=' font-bold hover:text-green-900 hover:underline'
        >Vans</NavLink>
        <NavLink 
        to='Login'
        className=' font-bold hover:text-green-900 hover:underline'
        >Login</NavLink>
        < NavLink
        to='/Logout'
        className=' font-bold hover:text-green-900 hover:underline'
        >Logout</NavLink
        >
        </div>                                       
        )
}