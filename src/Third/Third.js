import './Third.css'
import HeadphonesSecond from './HeadphonesSecond/HeadphonesSecond'
let headphonesSecond=[
    {title:"Apple AirPods Pro", price:"19999₴", rate:"4.7", img:"https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/4823/87_4000.jpg/w_600,h_600,r_inside,imdt"},
    {title:"Apple AirPods Pro", price:"19999₴", rate:"4.5", img:"https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/4823/88_4000.jpg/w_600,h_600,r_inside,imdt"},
    {title:"Apple AirPods Pro", price:"19999₴", rate:"4.7", img:"https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/4823/86_4000.jpg/w_600,h_600,r_inside,imdt"}
]

function Third() {
    return(
        <div className="wrapp">
        <div className="headphonesSecondContainer">
       {headphonesSecond.map(item=> <HeadphonesSecond title={item.title} img={item.img} price={item.price} rate={item.rate}/>)}
       </div>
   </div>
    )
}
export default Third;