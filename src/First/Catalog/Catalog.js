import './Catalog.css'

function Catalog(props){
    return(
            <div className="cases">
            <div className='card'>
                <img src={props.img} alt="cases"></img>
                <h2>{props.title}</h2>
        </div>
        </div>
    )
}
export default Catalog;