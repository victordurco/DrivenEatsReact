let dishesPointer, drinksPointer, dessertsPointer= [];

function setArrayPointers(category, array){
    switch(category){
        case 'dishes':
            dishesPointer=array;
            break;
        case 'drinks':
            drinksPointer=array;
            break;
        case 'desserts':
            dessertsPointer=array;
            break;
    }

}

function isOrderEneable(){
    if(dishesPointer===undefined || drinksPointer===undefined || dessertsPointer===undefined)
        return;
    let dishOrder = dishesPointer.filter((dish)=> dish.quantity > 0);
    let drinkOrder = drinksPointer.filter((drink)=> drink.quantity > 0);
    let dessertOrder = dessertsPointer.filter((dessert)=> dessert.quantity > 0);

    if(dishOrder.length>0 && drinkOrder.length>0 && dessertOrder.length>0)
        alert("VALIDA ESSE BOTAO MEU FILHO")
    else    
        alert("DESLIGA ESSE BOTAO MEU FILHO")
}

export {
    setArrayPointers,
    isOrderEneable
}


