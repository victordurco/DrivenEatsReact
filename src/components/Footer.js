import React from "react";

export default function Footer({buttonShouldBeEneable, sendMsg}){
    const [buttonContent, setButtonContent] = React.useState('Selecione os 3 itens para fechar o pedido');
    const [eneableClass, setEneableClass] = React.useState('');
    const [buttonFunction, setButtonFunction] = React.useState('');

 
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

    function setButtonOnClick(status){
        if(status)
            sendMsg();
    }

    buttonShouldBeEneable.registerListener(function(val) {
        switch(val){
            case true:
                eneableOrderButton();
                break;
            case false:
                desableOrderButton();
                break;        
        }
      });

    return(
        <div className="bottom-bar">
            <button 
                className={`close-order sub-font white ${eneableClass}`}
                onClick={()=>setButtonOnClick(buttonShouldBeEneable.a)}
            >
                {buttonContent}
            </button>
        </div>
    );
}