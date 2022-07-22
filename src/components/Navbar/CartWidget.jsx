import icon from '../../img/Cart.png'
import {useNavigate} from 'react-router-dom';

function IconWidget(){


    return(
        <>
        <div className='flex'>
            <img src={icon} alt="CartIcon" className='iconCart' />
            <p className='mx-1'>0</p>
        </div>
        </>
    )
}
export default IconWidget