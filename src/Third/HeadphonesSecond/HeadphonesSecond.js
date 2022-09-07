import './HeadphonesSecond.css'
import Heart from './img/heart.svg'
import Star from './img/star.svg'

function HeadphonesSecond(props){
    return(
        <div className="headphonesSecondBox">
             <div className="headphonesSecondCard">
                <div className="heartCardsSecond">
                    <img src={Heart} alt="heart"></img>
                </div>
                <div className="picCardSecond">
                <img src={props.img} alt="headphones"></img>
                </div>
                <div className="cardSecondInfo">
                    <h2>{props.title}</h2>
                    <h4>{props.price}</h4>
                </div>
                <div className='rateSecondInfo'>
                    <img src={Star} alt="star"></img>
                    <h4>{props.rate}</h4>
                </div>
            </div>
        </div>
    )
}
export default HeadphonesSecond;