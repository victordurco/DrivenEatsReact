export default function Drinks(){
    return(
        <div class="category-container drinks">
        <ul class="options">
            <li class="option sub-font" onclick="selectItem(this, 7.0, 'drinks');">
                <img class="option-pic" src="./img/coquinha_gelada 1.png" alt="coca cola"/>
                <img class="check" src="img/check.png" alt="item selected"/>
                <p class="option-title  black">Coquinha gelada</p>
                <p class="option-description  cinza">Lata 350ml</p>
                <span>R$ <span class="option-price">7,00</span></span>
            </li>
            <li class="option sub-font" onclick="selectItem(this, 4.9, 'drinks');">
                <img class="option-pic" src="./img/Suco-de-Laranja.jpg" alt="suco de laranja"/>
                <img class="check" src="img/check.png" alt="item selected"/>
                <p class="option-title  black">Suco de Laranja</p>
                <p class="option-description  cinza">Copo 400ml</p>
                <span>R$ <span class="option-price">4,90</span></span>
            </li>
            <li class="option sub-font" onclick="selectItem(this, 3.0, 'drinks');">
                <img class="option-pic" src="./img/agua.jpg" alt="agua mineral"/>
                <img class="check" src="img/check.png" alt="item selected"/>
                <p class="option-title  black">Água mineral</p>
                <p class="option-description  cinza">Garrafa 500ml</p>
                <span>R$ <span class="option-price">3,00</span></span>
            </li>
            <li class="option sub-font" onclick="selectItem(this, 5.0, 'drinks');">
                <img class="option-pic" src="./img/cervejagelada.jpg" alt="cerveja"/>
                <img class="check" src="img/check.png" alt="item selected"/>
                <p class="option-title  black">Cerveja gelada</p>
                <p class="option-description  cinza">Lata 350ml</p>
                <span>R$ <span class="option-price">5,00</span></span>
            </li>
            <li class="option sub-font" onclick="selectItem(this, 5.9, 'drinks');">
                <img class="option-pic" src="./img/suco-melancia.jpeg" alt="suco de melancia"/>
                <img class="check" src="img/check.png" alt="item selected"/>
                <p class="option-title  black">Suco de melancia</p>
                <p class="option-description  cinza">copo 350ml</p>
                <span>R$ <span class="option-price">5,90</span></span>
            </li>
        </ul>
    </div>
    );
}