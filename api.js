export async function getVans(id){

    const res = id? await fetch(`/api/vans/${id}`):await  fetch("/api/vans")
    if(!res.ok){
        throw{
            message:'Failed to fetch vans data',
            statusText:res.statusText,
            status:res.status
        }
    }
    let data = await res.json()
return data.vans
}

export async function getHostVans(id){

    const res = id ? await fetch(`/api/host/vans/${id}`):await  fetch("/api/host/vans")
    if(!res.ok){
        throw{
            message:'Failed to fetch Your vans data',
            statusText:res.statusText,
            status:res.status
        }
    }
    let data = await res.json()
return data.vans
}
export async function userLogin(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

