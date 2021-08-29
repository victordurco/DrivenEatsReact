import React from "react";

export default function Footer(){
    const [buttonContent, setButtonContent] = React.useState('Selecione os 3 itens para fechar o pedido');
    const [eneableClass, setEneableClass] = React.useState('');

    function eneableOrderButton(){
        setEneableClass('activate-button');
        setButtonContent('Fechar pedido');
    }

    return(
        <div className="bottom-bar">
            <button 
                className={`close-order sub-font white ${eneableClass}`}
                eneableOrderButton={eneableOrderButton}
            >{buttonContent}</button>
        </div>
    );
}