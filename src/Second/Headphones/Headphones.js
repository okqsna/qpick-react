import './Headphones.css'
import Heart from './img/heart.svg'
import Star from './img/star.svg'
function Headphones(props){
    return(
        <div class="headphonesBox">
            <div className="headphonesCard">
                <div className="heartCards">
                    <img src={Heart} alt="heart"></img>
                </div>
                <div className="picCard">
                <img src={props.img} alt="headphones"></img>
                </div>
                <div className="cardInfo">
                    <h2>{props.title}</h2>
                    <h4>{props.price}</h4>
                </div>
                <div className='rateInfo'>
                    <img src={Star} alt="star"></img>
                    <h4>{props.rate}</h4>
                </div>
            </div>
        </div>
    )
}
export default Headphones;