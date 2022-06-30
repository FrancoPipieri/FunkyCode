import imagen from '../img/funkoyo.png';
import './navBar.css';

function NavBar(){
    return(
        <header>
            <div className='flex nav'>
                <img src={imagen} alt="" className='w-16 m-2' />
                <div className='m-1.5 w-full enlaces'>
                    <h1 className="text-3xl font-bold underline text-center">Funkys Coder</h1>
                    <nav>
                        <ul>
                            <li className=" flex justify-end">
                             <a href="/" className='m-2'>Home</a>
                             <a href="/" className='m-2'>Catalogo</a>
                             <a href="/" className='m-2'>Login</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default NavBar
