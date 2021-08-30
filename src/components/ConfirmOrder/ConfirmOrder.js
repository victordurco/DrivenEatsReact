import './ConfirmOrder.css'
import { Link } from 'react-router-dom';


export default function ConfirmOrder(){

    let dishOrder = JSON.parse(localStorage.dishOrder);
    let drinkOrder = JSON.parse(localStorage.drinkOrder);
    let dessertOrder = JSON.parse(localStorage.dessertOrder);

    function calculateTotal(){
        let total=0;
        dishOrder.forEach((dish)=>total+=(parseFloat(dish.price.replace(',', '.')))*dish.quantity);
        drinkOrder.forEach((drink)=>total+=(parseFloat(drink.price.replace(',', '.')))*drink.quantity);
        dessertOrder.forEach((dessert)=>total+=(parseFloat(dessert.price.replace(',', '.')))*dessert.quantity);
        return total.toFixed(2);
    }

    function createMsg(){
        function createMsgDishes(){
            let msgDishes = '- Prato: ';
            dishOrder.forEach((dish)=>{
                if(dish.quantity > 1){ 
                    msgDishes+=`${dish.title}(${dish.quantity}x) `;
                }
                else{ 
                    msgDishes+=`${dish.title} `;
                }
                });
            return msgDishes;
        }

        function createMsgDrinks(){
            let msgDrinks = '- Bebida: ';
            drinkOrder.forEach((drink)=>{
                if(drink.quantity > 1){
                    msgDrinks+=`${drink.title}(${drink.quantity}x) `;
                }
                else{ 
                    msgDrinks+=`${drink.title} `;
                }
                });
            return msgDrinks;
        }

        function createMsgDesserts(){
            let msgDesserts = '- Sobremesa: ';
            dessertOrder.forEach((dessert)=>{
                if(dessert.quantity > 1){
                    msgDesserts+=`${dessert.title}(${dessert.quantity}x) `;
                }
                else{
                    msgDesserts+=`${dessert.title} `;
                }
                });
            return msgDesserts;
        }

        let msg = `Olá, gostaria de fazer o pedido: \n ${createMsgDishes()} \n ${createMsgDrinks()} \n  ${createMsgDesserts()} \n Total: R$ ${calculateTotal()}`;

        return msg;
    }

    function sendMsg(){
        let encodedMsg = encodeURI(createMsg());
        let uri = "https://wa.me/5514998375261?text=";
        uri = uri+encodedMsg;
        window.open(uri);
    }
    
    function OrderItem({title, price, quantity}){
        return(
            <li>
                <span>{title} ({quantity}x)</span><span>R${(parseFloat(price.replace(',', '.'))*quantity).toFixed(2)}</span>
            </li>
        );
    }
    return(
        <div className="confirmScreen">
        <section >
            <h1>Revise seu pedido</h1>
            <div>
                <ul className="order">
                    {dishOrder.map((dish, index)=>
                        <OrderItem
                            key={index}
                            title={dish.title}
                            price={dish.price}
                            quantity={dish.quantity}
                        />)}
                    {drinkOrder.map((drink, index)=>
                        <OrderItem 
                            key={index}
                            title={drink.title}
                            price={drink.price}
                            quantity={drink.quantity}
                        />    
                    )}
                    {dessertOrder.map((dessert, index)=>
                        <OrderItem 
                            key={index}
                            title={dessert.title}
                            price={dessert.price}
                            quantity={dessert.quantity}
                        />    
                    )}
                    <li className="total">
                        <span>TOTAL</span><span>R${calculateTotal()}</span>
                     </li>
                </ul>
                <div className="confirmButtons subfont">
                    <Link to='/'>
                        <button className="confirmButton" onClick={()=>sendMsg()}>Tudo certo, pode pedir!</button>
                        <button className="cancelButton" >Cancelar</button>
                    </Link>
                </div>
            </div>
        </section>    
    </div>
    );
}