import Header from './components/Header'
import Content from "./components/Content/Content";
import Footer from "./components/Footer";
import React from 'react';


export default function App(){
    //VALIDATION FUNCTIONS
    let dishesPointer, drinksPointer, dessertsPointer= [];
    const [buttonContent, setButtonContent] = React.useState('Selecione os 3 itens para fechar o pedido');
    const [eneableClass, setEneableClass] = React.useState('');


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

    function eneableOrderButton(){
        if (eneableClass === ''){
            setEneableClass('activate-button');
            setButtonContent('Fechar pedido');
        }
    }

    function desableOrderButton(){
        if (eneableClass === 'activate-button'){
            setEneableClass('');
            setButtonContent('Selecione os 3 itens para fechar o pedido');
        }
    }

    function isOrderEneable(){
        let dishOrder = dishesPointer.filter((dish)=> dish.quantity > 0);
        let drinkOrder = drinksPointer.filter((drink)=> drink.quantity > 0);
        let dessertOrder = dessertsPointer.filter((dessert)=> dessert.quantity > 0);

        if(dishOrder.length>0 && drinkOrder.length>0 && dessertOrder.length>0)
           eneableOrderButton();
        else    
            desableOrderButton();
    }

    


    return(
        <>
            <Header />
            <Content 
                setArrayPointers={setArrayPointers} 
                isOrderEneable={isOrderEneable}
            />
            <Footer 
                buttonContent={buttonContent}
                eneableClass={eneableClass}
            />
        </>
    );
}