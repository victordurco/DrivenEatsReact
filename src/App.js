import Header from './components/Header'
import Content from "./components/Content/Content";
import Footer from "./components/Footer";
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder';
import './css/reset.css';
import './css/style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


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

        if(dishOrder.length>0 && drinkOrder.length>0 && dessertOrder.length>0){
            buttonShouldBeEneable.a = true;
           localStorage.setItem("dishOrder", JSON.stringify(dishOrder));
           localStorage.setItem("drinkOrder", JSON.stringify(drinkOrder));
           localStorage.setItem("dessertOrder", JSON.stringify(dessertOrder));
        }
        else    
            buttonShouldBeEneable.a = false;
    }



    return(
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
 
                    <Content 
                        setArrayPointers={setArrayPointers} 
                        isOrderEneable={isOrderEneable}
                    />
                    <Footer 
                        buttonShouldBeEneable={buttonShouldBeEneable}
                    />
                </Route>
                <Route path="/confirm-order">
                    <ConfirmOrder />
                </Route>
            </Switch>
              

            
        </Router>
    );
}