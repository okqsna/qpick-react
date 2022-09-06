import './First.css';
import Widget from './Widget/Widget';
import Catalog from './Catalog/Catalog';
let cases=[
    {title:"Скляні", img:'https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/5008/59_4000.jpg/w_600,h_600,r_inside,imdt'},
    {title:"Силіконові", img:'https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/4996/43_4000.jpg/w_600,h_600,r_inside,imdt'},
    {title:"Шкіряні", img:'https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/4996/23_4000.jpg/w_600,h_600,r_inside,imdt'}
];

function First(){
    return(
        <div className="wrapp">
            <Widget />
            <div className="casesContainer">
            {cases.map(item=> <Catalog title={item.title} img={item.img}/>)}
            </div>
        </div>
    )
}
export default First;