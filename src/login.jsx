import {Form,redirect,useSearchParams,useNavigation,useActionData} from 'react-router-dom'
import {userLogin } from '../api'

export async function verifyUser({request}) {
    
    let data = await request.formData()
    let email  = data.get('email')
    let password = data.get('password')
    try {
        
        await userLogin({email,password})    
        localStorage.setItem("loggedin", true)
        let prevUrl= new URL(request.url)
        let prevPathname = prevUrl.searchParams.get("redirectTo") ||'Host/Vans' 
        throw redirect(`../${prevPathname}`)
    } catch (error) {
        return error.message
    }
}
export default function Login(){
    const[searchParams,setSearchParams]=useSearchParams()
    const errormsg = useActionData()
    const loadingState =  useNavigation()
    return(
        <>
        {searchParams &&!errormsg && <pre className='text-red-700 text-lg text-center pt-8'>{searchParams.get("message")}</pre>}
        {errormsg && <pre className='text-red-700 text-lg text-center pt-8'>{errormsg}</pre>}

        <Form method='POST' className='flex flex-col items-center mt-[5%] bg-green-300 py-14 rounded-md mx-[20%] space-y-4 mb-44'>
            <input 
            type="text" 
            placeholder='Email here'
            name='email'
            className='p-3 border-none placeholder-gray-400' />
            <input 
            type="password" 
            placeholder='Password'  
            name='password'         
            className='p-3 border-[1px] placeholder-gray-400' />
            <button className='bg-green-400 p-3 w-44 rounded-md' >{loadingState.state ==='submitting'?  'Logging in' : 'Login'}</button>
        </Form>
        </>
    )
}