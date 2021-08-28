import DessertsData from "../../data/DessertsData";
import DishesData from '../../data/DishesData';
import DrinksData from "../../data/DrinksData";
import React from 'react';


const Option = ({ title, description, img, price, quantity, setQuantityInData, index}) => {

    const [ classes, setClasses] = React.useState("option sub-font");
    const [printQuantity, setPrintQuantity] = React.useState(1);

    function selectItem() {
        if (quantity === 0) {
            setPrintQuantity(setQuantityInData(1, index));
            setClasses("option sub-font selected");
        }
      }

    function plusItem(e){
        setPrintQuantity(setQuantityInData(1, index));
        e.stopPropagation();
    }

    function minusItem(e){
        setPrintQuantity(setQuantityInData(-1, index));
        e.stopPropagation();
        if (printQuantity-1===0){
            setClasses("option sub-font");
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

export default function OptionsBox({category}){
    let items =[];
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

    function setQuantityInData(n, i){
        items[i].quantity += n;
        console.log(items);
        return items[i].quantity;
    }

    return(
        <ul className="options">
            {items.map((item,index)=> <Option 
                key = {index}
                title={item.title}
                description={item.description}
                img={item.img}
                price={item.price}
                quantity={item.quantity}
                setQuantityInData={setQuantityInData}
                index={index}
            />)}
        </ul>
    );
}