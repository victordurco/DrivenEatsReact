import React from "react";

export default function Footer({buttonShouldBeEneable}){
    const [buttonContent, setButtonContent] = React.useState('Selecione os 3 itens para fechar o pedido');
    const [eneableClass, setEneableClass] = React.useState('');
  

 
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
                onClick=''
            >
                {buttonContent}
            </button>
        </div>
    );
}