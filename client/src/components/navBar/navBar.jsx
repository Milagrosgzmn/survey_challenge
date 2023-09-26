import {Link} from 'react-router-dom';

export default function NavBar (){

    return(
        <nav className="w-screen h-16 flex 
        bg-pink-800 items-center text-xl text-white
        ">
            <ul className='inline-flex justify-evenly w-3/6 px-4'>
                <li className='px-4 font-semibold hover:brightness-150 hover:border-b-2 active:opacity-75 outline-none duration-300 group'><Link to='/' >Home</Link></li>
                <li className='font-semibold px-4 hover:brightness-150 hover:border-b-2 active:opacity-75 outline-none duration-300 group'><Link to='/consult' >Resultados</Link></li>
            </ul>
        </nav>
    );
}