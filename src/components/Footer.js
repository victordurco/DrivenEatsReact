import {useState} from "react";
import { Link } from 'react-router-dom';

export default function Footer({buttonShouldBeEneable}){
    const [buttonContent, setButtonContent] = useState('Selecione os 3 itens para fechar o pedido');
    const [eneableClass, setEneableClass] = useState('');
    const [disableLink, setDisableLink] = useState('disableLink');

 
    function eneableOrderButton(){
        if (eneableClass === ''){
            setEneableClass('activate-button');
            setButtonContent('Fechar pedido');
            setDisableLink('');
        }
    }

    function desableOrderButton(){
        if (eneableClass === 'activate-button'){
            setEneableClass('');
            setButtonContent('Selecione os 3 itens para fechar o pedido');
            setDisableLink('disableLink');
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
            default:
                break;     
        }
      });

    return(
        <div className="bottom-bar">
            <Link to='/confirm-order' className={disableLink}>
                <button 
                    className={`close-order sub-font white ${eneableClass}`}
                >
                    {buttonContent}
                </button>
            </Link>
        </div>
    );
}