import DessertsData from "../../data/DessertsData";
import DishesData from '../../data/DishesData';
import DrinksData from "../../data/DrinksData";

const Option = (props) => {
    const {title, description, img, price} = props;
    return(
        <li className="option sub-font" onclick="#">
            <img className="option-pic" src={img} alt={title}/>
            <img className="check" src="img/check.png" alt="item selected"/>
            <p className="option-title  black">{title}</p>
            <p className="option-description  cinza">{description}</p>
            <span>R$ <span className="option-price">{price}</span></span>
        </li>
    );
}

export default function OptionsBox(props){
    let items =[];
    const {category} = props;
    switch (category){
        case 'desserts':
            items = DessertsData();
            break;
        case 'drinks':
            items = DrinksData();
            break;
        case 'dishes':
            items = DishesData();
            break;
    }
    return(
        <ul className="options">
            {items.map((item,index)=> <Option 
                key = {index}
                title={item.title}
                description={item.description}
                img={item.img}
                price={item.price}
            />)}
        </ul>
    );
}