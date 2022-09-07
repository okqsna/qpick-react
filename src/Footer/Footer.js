import './Footer.css'
import World from './img/world.svg'
import Telegram from './img/Telegram.svg'
import Insta from './img/Instagram.svg'
import Whatsapp from './img/Whatsapp.svg'
function Footer() {
    return(
        <div className='footer__wrapp'>
            <div className="logo__footer">
                <p>QPICK</p>
            </div>
            <div className="col1__footer">
                <p>Вибранні</p>
                <p>Корзина</p>
                <p>Контакти</p>
            </div>
            <div className='lang__footer'>
                <div className='topLang'>
                    <p>Умови сервісу</p>
                </div>
                <div className="chooseLang">
                    <img src={World} alt="language"></img>
                    <h3>Укр</h3>
                    <p>Eng</p>
                </div>
            </div>
            <div className="socialsFooter">
                <img src={Insta} alt="socials"></img>
                <img src={Telegram} alt="socials"></img>
                <img src={Whatsapp} alt="socials"></img>
            </div>
        </div>
    )
}
export default Footer;