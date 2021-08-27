import DessertsData from "../../data/DessertsData";
import DishesData from '../../data/DishesData';
import DrinksData from "../../data/DrinksData";
import React from 'react';


const Option = ({ title, description, img, price, isSelected }) => {

    const [ classes, setClasses] = React.useState("option sub-font");

    function selectItem() {
        if (classes === "option sub-font") {
          setClasses("option sub-font selected");
        } else {
          setClasses("option sub-font");
        }
      }

    return(
        <li className={classes} onClick={()=>selectItem()}>
            <img className="option-pic" src={img} alt={title}/>
            <img className="check" src="img/check.png" alt="item selected"/>
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


    return(
        <ul className="options">
            {items.map((item,index)=> <Option 
                key = {index}
                title={item.title}
                description={item.description}
                img={item.img}
                price={item.price}
                isSelected={item.isSelected}
            />)}
        </ul>
    );
}