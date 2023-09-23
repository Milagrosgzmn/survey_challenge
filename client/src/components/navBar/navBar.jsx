import {Link} from 'react-router-dom';

export default function NavBar (){

    return(
        <nav className="w-screen bg-red-500">
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/consult' >Resultados</Link></li>
            </ul>
        </nav>
    );
}