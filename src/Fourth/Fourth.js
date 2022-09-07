import './Fourth.css'
import Wireless from './Wireless/Wireless'
let wireless=[
    {title:"Apple AirPods", price:"5999₴", rate:"4.7", img:"https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/5028/70_4000.jpg/w_600,h_600,r_inside,imdt"},
    {title:"Apple AirPods Pro", price:"5999₴", rate:"4.7", img:"https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/5110/52_4000.jpg/w_600,h_600,r_inside,imdt"},
    {title:"Apple AirPods Pro", price:"19999₴", rate:"4.7", img:"https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/4823/85_4000.jpg/w_600,h_600,r_inside,imdt"}
]


function Fourth(){
    return(
        <div className="wrapp">
            <div className='wirelessContainer'>
            {wireless.map(item=> <Wireless title={item.title} img={item.img} price={item.price} rate={item.rate}/>)}
            </div>
        </div>
    )
}
export default Fourth;