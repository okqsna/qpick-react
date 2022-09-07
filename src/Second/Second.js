import './Second.css'
import Headphones from './Headphones/Headphones'

let headphones=[
    {title:"Apple BYZ S852I", price:"1099₴", rate:"4.7", img:"https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/3451/60_4000.jpg/w_600,h_600,r_inside,imdt"},
    {title:"Apple EarPods", price:"1099₴", rate:"4.5", img:"https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/3451/60_4000.jpg/w_600,h_600,r_inside,imdt"},
    {title:"Apple EarPods", price:"1099₴", rate:"4.5", img:"https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/2854/45_4000.jpg/w_600,h_600,r_inside,imdt"}
]

function Second(){
    return(
        <div className="wrapp">
             <div className="headphonesContainer">
            {headphones.map(item=> <Headphones title={item.title} img={item.img} price={item.price} rate={item.rate}/>)}
            </div>
        </div>
    )
}
export default Second;