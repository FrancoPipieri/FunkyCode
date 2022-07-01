import imagen from '../img/funkoyo.png';
import './navBar.css';
import Icon from './CartWidget.jsx'

function NavBar(){
    return(
        <header>
            <div className='flex nav'>
                <img src={imagen} alt="" className='w-16 m-2' />
                <div className='m-1.5 w-full enlaces'>
                    <div className='flex'>
                        <h1 className="text-3xl font-bold underline text-center titlePage">Funkys Coder</h1>
                        <Icon/>
                    </div>
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
