import {redirect} from 'react-router-dom'
export async function requireAuth(request) {
    const isLoggedin = localStorage.getItem("loggedin")
    let url = new URL(request.url)
    if(!isLoggedin){
        throw redirect(`/Login?message=You must log in first  && redirectTo=${url.pathname}`)
    }
    return null
}