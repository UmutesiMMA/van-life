import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Layout from './Layout.jsx'
import Home from './Home'
import About from './About'
import Vans,{Loader} from './Vans/Vans.jsx'
import VansDetails,{Loader as vanLoader} from './Vans/VansDetails';
import HostLayout from './Host/HostLayout'
import Dashboard from './Host/Dashboard'
import HostIncome from './Host/HostIncome'
import HostVans,{HostVansLoader} from './Host/HostVans'
import HostVansInfo,{hVansInfo} from './Host/HostVansInfo';
import HostVansDetails from './Host/HostVansDetails';
import HostVansPrice from './Host/HostVansPrice';
import HostVansPhotos from './Host/HostVansPhotos';
import HostReviews from './Host/HostReviews'
import NotFound from './NotFound';
import Login,{verifyUser} from './login';

localStorage.removeItem('loggedin')
import '../server'
import { requireAuth } from '../Authorization';
import Logout from './logOut';

export default function App() {
let router =  createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}> 
    <Route index element={<Home/>}/>
    <Route path='About' element={<About/> }/>
    <Route path='Vans' element={<Vans/>} loader={Loader}/>
    <Route path='Vans/:id' element={<VansDetails/>} loader={vanLoader}/>
    <Route path='Host' element={<HostLayout/>}>
      <Route index element={<Dashboard/>} loader={async ({request})=>await requireAuth(request)}/>
      <Route  path='Income'  element={<HostIncome/>} />
      <Route  path='Vans'  element={<HostVans/>} loader={HostVansLoader}/>
      <Route path='Vans/:id' element={<HostVansInfo/>} loader={hVansInfo}>
            <Route index element={<HostVansDetails/>} />
             <Route path='Price' element={<HostVansPrice/>} />
            <Route path='Photos' element={<HostVansPhotos/>} />
      </Route>      
      <Route  path='Reviews'  element={<HostReviews/>}/>
    </Route>
    <Route path='Login'element={<Login/>} action={verifyUser}/>
    <Route path='Logout' element={<Logout/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Route>

))
  return (
    <RouterProvider router={router}/>
  )
}