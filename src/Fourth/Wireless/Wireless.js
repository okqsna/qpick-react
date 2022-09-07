import './Wireless.css'
import Heart from './img/heart.svg'
import Star from './img/star.svg'

function Wireless(props){
    return(
        <div className="wirelessBox">
        <div className="wirelessCard">
           <div className="heartCardsWireless">
               <img src={Heart} alt="heart"></img>
           </div>
           <div className="picCardWireless">
           <img src={props.img} alt="headphones"></img>
           </div>
           <div className="cardWirelessInfo">
               <h2>{props.title}</h2>
               <h4>{props.price}</h4>
           </div>
           <div className='rateWirelessInfo'>
               <img src={Star} alt="star"></img>
               <h4>{props.rate}</h4>
           </div>
       </div>
       </div>
    )
}
export default Wireless;