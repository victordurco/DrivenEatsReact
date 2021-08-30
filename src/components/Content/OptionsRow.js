import DessertsData from "../../data/DessertsData";
import DishesData from '../../data/DishesData';
import DrinksData from "../../data/DrinksData";
import {useState} from 'react';
 


const Option = ({ title, description, img, price, setQuantityInData, isOrderEneable, index}) => {

    const [ classes, setClasses] = useState("option sub-font");
    const [printQuantity, setPrintQuantity] = useState(1);

    //EVENTS ON OPTION
    function selectItem() {
        if (classes === "option sub-font") {
            setPrintQuantity(setQuantityInData(1, index));
            setClasses("option sub-font selected");
            isOrderEneable();
        }
      }
    
    function deselectItem(){
        setClasses("option sub-font");
    }

    function plusItem(e){
        setPrintQuantity(setQuantityInData(1, index));
        isOrderEneable();
        e.stopPropagation();
    }

    function minusItem(e){
        setPrintQuantity(setQuantityInData(-1, index));
        isOrderEneable();
        e.stopPropagation();
        if (printQuantity-1===0){
            deselectItem();
        }
    }

    return(
        <li className={classes} onClick={()=>selectItem()}>
            <img className="option-pic" src={img} alt={title}/>
            <div className="itemAmount"><button onClick={(e)=>minusItem(e)}>-</button>{printQuantity}<button onClick={(e)=>plusItem(e)}>+</button></div>
            <p className="option-title  black">{title}</p>
            <p className="option-description  cinza">{description}</p>
            <span>R$ <span className="option-price">{price}</span></span>
        </li>
    );
}

export default function OptionsRow({category, setArrayPointers, isOrderEneable}){
    let items =[];
    switch (category){
        case 'desserts':
            items = DessertsData();
            setArrayPointers('desserts', items);
            break;
        case 'drinks':
            items = DrinksData();
            setArrayPointers('drinks', items);
            break;
        case 'dishes':
            items = DishesData();
            setArrayPointers('dishes', items);
            break;
        default:
            break;
    }

    function setQuantityInData(n, i){
        items[i].quantity += n;
        return items[i].quantity;
    }

    return(
        <ul className="options">
            {items.map((item,index)=> 
                <Option 
                    key = {index}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    price={item.price}
                    setQuantityInData={setQuantityInData}
                    isOrderEneable={isOrderEneable}
                    index={index}
                />
            )}
        </ul>
    );
}