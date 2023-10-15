import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs,getDoc,doc,query,where } from "firebase/firestore/lite"
const firebaseConfig = {
  apiKey: "AIzaSyBMMWtY4Y0GTf457QF0AAgcJofnWcaV5hs",
  authDomain: "van-life-8dbf8.firebaseapp.com",
  projectId: "van-life-8dbf8",
  storageBucket: "van-life-8dbf8.appspot.com",
  messagingSenderId: "756393118226",
  appId: "1:756393118226:web:3784792ef24fa455d726cb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}
export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}
// export async function getVans(id){

//     const res = id? await fetch(`/api/vans/${id}`):await  fetch("/api/vans")
//     if(!res.ok){
//         throw{
//             message:'Failed to fetch vans data',
//             statusText:res.statusText,
//             status:res.status
//         }
//     }
//     let data = await res.json()
// return data.vans
// }

// export async function getHostVans(id){

//     const res = id ? await fetch(`/api/host/vans/${id}`):await  fetch("/api/host/vans")
//     if(!res.ok){
//         throw{
//             message:'Failed to fetch Your vans data',
//             statusText:res.statusText,
//             status:res.status
//         }
//     }
//     let data = await res.json()
// return data.vans
// }
// export async function userLogin(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }

//     return data
// }

