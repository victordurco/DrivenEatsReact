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
        let total=0;
        function createMsgDishes(){
            let msgDishes = '- Prato: ';
            dishOrder.forEach((dish)=>{
                if(dish.quantity > 1){ 
                    msgDishes+=`${dish.title}(${dish.quantity}x) `;
                    total+=parseFloat(dish.price.replace(',', '.'));
                }
                else{ 
                    msgDishes+=`${dish.title} `;
                    total+=parseFloat(dish.price.replace(',', '.'));
                }
                });
            return msgDishes;
        }

        function createMsgDrinks(){
            let msgDrinks = '- Prato: ';
            drinkOrder.forEach((drink)=>{
                if(drink.quantity > 1){
                    msgDrinks+=`${drink.title}(${drink.quantity}x) `;
                    total+=parseFloat(drink.price.replace(',', '.'));
                }
                else{ 
                    msgDrinks+=`${drink.title} `;
                    total+=parseFloat(drink.price.replace(',', '.'));
                }
                });
            return msgDrinks;
        }

        function createMsgDesserts(){
            let msgDesserts = '- Prato: ';
            dessertOrder.forEach((dessert)=>{
                if(dessert.quantity > 1){
                    msgDesserts+=`${dessert.title}(${dessert.quantity}x) `;
                    total+=parseFloat(dessert.price.replace(',', '.'));
                }
                else{
                    msgDesserts+=`${dessert.title} `;
                    total+=parseFloat(dessert.price.replace(',', '.'));
                }
                });
            return msgDesserts;
        }

        let msg = `Olá, gostaria de fazer o pedido: \n ${createMsgDishes()} \n ${createMsgDrinks()} \n  ${createMsgDesserts()} \n Total: R$ ${total.toFixed(2)}`;

        return msg;
    }

    function sendMsg(){
        let encodedMsg = encodeURI(createMsg());
        let uri = "https://wa.me/5514998375261?text=";
        uri = uri+encodedMsg;
        window.open(uri);
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
                sendMsg={sendMsg}
            />
        </>
    );
}