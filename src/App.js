import Header from './components/Header'
import Content from "./components/Content/Content";
import Footer from "./components/Footer";
import React from 'react';


export default function App(){
    //VALIDATION FUNCTIONS
    let dishesPointer, drinksPointer, dessertsPointer= [];
    let dishOrder, drinkOrder, dessertOrder = [];
    let buttonShouldBeEneable = { //object with event listener so footer can know when to update
        aInternal: false,
        aListener: function(val) {},
        set a(val) {
          this.aInternal = val;
          this.aListener(val);
        },
        get a() {
          return this.aInternal;
        },
        registerListener: function(listener) {
          this.aListener = listener;
        }
      }
    
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
        dishOrder = dishesPointer.filter((dish)=> dish.quantity > 0);
        drinkOrder = drinksPointer.filter((drink)=> drink.quantity > 0);
        dessertOrder = dessertsPointer.filter((dessert)=> dessert.quantity > 0);

        if(dishOrder.length>0 && drinkOrder.length>0 && dessertOrder.length>0)
           buttonShouldBeEneable.a = true;
        else    
            buttonShouldBeEneable.a = false;
    }

    function createMsg(){
        let msg = 'Olá, gostaria de fazer o pedido: \n';

        function createMsgDishes(){
            let msgDishes = '- Prato: ';
            dishOrder.forEach((dish)=>{
                if(dish.quantity > 1)
                    msgDishes+=`${dish.title}(${dish.quantity}x) `;
                else        
                    msgDishes+=`${dish.title} `
                });
            return msgDishes;
        }

        function createMsgDrinks(){
            let msgDrinks = '- Prato: ';
            drinkOrder.forEach((drink)=>{
                if(drink.quantity > 1)
                    msgDrinks+=`${drink.title}(${drink.quantity}x) `;
                else        
                    msgDrinks+=`${drink.title} `
                });
            return msgDrinks;
        }


        let msg = `Olá, gostaria de fazer o pedido: \n - Prato: Frango Yin Yang (2x) \n - Bebida: Coquinha Gelada \n  - Sobremesa: Pudim \n Total: R$ 27.70`
    }
    


    return(
        <>
            <Header />
            <Content 
                setArrayPointers={setArrayPointers} 
                isOrderEneable={isOrderEneable}
            />
            <Footer 
                buttonShouldBeEneable={buttonShouldBeEneable}
            />
        </>
    );
}