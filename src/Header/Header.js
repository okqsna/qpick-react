import './Header.css'
import Phone from "./img/phone.svg" 
import Arrow from "./img/arrow.svg"
import Heart from './img/heart.svg'
import Cart from './img/cart.svg'
function Header(){
    return(
        <div className="header">
            <div className="header__left">
            <div className="logo__header"><p>GPICK</p></div>
            <div className="phoneChooser">
                <img src={Phone} alt='phone icon'></img>
                <p>Вибрати модель телефону</p>
                <img src={Arrow} alt="arrow"></img>
            </div>
            </div>
            <div className="header__right">
                <div className="icons__right">
                    <img src={Heart} alt="Heart"></img>
                    <img src={Cart} alt="Cart"></img>
                </div>
            </div>
        </div>
    )
}
export default Header;