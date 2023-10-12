import about from '/images/about.svg'
import { Link} from 'react-router-dom'
export default function About() {
    return (
        <div className='mb-40'>
            <img src={about} className="w-full" alt='about cover'/>
            <div className='space-y-7  p-9'>
                <h1 className='text-3xl font-bold'>Don&apos;t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="bg-green-300 mx-24 p-10 border rounded-md mb-8">
                <h2 className='mb-5 text-2xl font-semibold'>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="bg-green-700 p-4 rounded-lg text-center text-white font-semibold" to="/vans">Explore our vans</Link>
            </div>
        </div>
    )
}