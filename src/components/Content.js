export default function Content(){
    return (
        <div class="content">   
        <p class="div-title main-font black">Primeiro, seu prato</p>
        <div class="category-container dishes">
            <ul class="options">
                <li class="option sub-font " onclick="selectItem(this, 14.9, 'dishes');">
                    <img class="option-pic" src="./img/frango_yin_yang 1.png" alt="frango yin yang"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Frango Yin Yang</p>
                    <p class="option-description  cinza">Um pouco de batata, um pouco de salada</p>
                    <span>R$ <span class="option-price">14,90</span></span>
                </li>
                <li class="option sub-font" onclick="selectItem(this, 18.9, 'dishes');">
                    <img  class="option-pic" src="./img/strogonoff.jpeg" alt="Strogonoff vegetariano"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Strogonoff vegetariano</p>
                    <p class="option-description  cinza">Strogonoff de cogumelos</p>
                    <span>R$ <span class="option-price">18,90</span></span>
                </li>
                <li class="option sub-font" onclick="selectItem(this, 25.5, 'dishes');">
                    <img class="option-pic" src="./img/Hamburguer.jpg" alt="hamburguer"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Hamburguer</p>
                    <p class="option-description  cinza">Acompanha batatas e refri</p>
                    <span>R$ <span class="option-price">25,5</span></span>
                </li>
                <li class="option sub-font" onclick="selectItem(this, 20.0, 'dishes');">
                    <img class="option-pic" src="./img/lasanha.jpg" alt="lasanha"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Lasanha</p>
                    <p class="option-description  cinza">Lasanha a bolonhesa</p>
                    <span>R$ <span class="option-price">20,00</span></span>
                </li>
                <li class="option sub-font" onclick="selectItem(this, 21.5, 'dishes');">
                    <img class="option-pic" src="./img/feijoada.jpg" alt="feijoada"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Feijoada</p>
                    <p class="option-description  cinza">Acompanha arroz e farofa</p>
                    <span>R$ <span class="option-price">21,50</span></span>
                </li>
            </ul>
        </div>

        <p class="div-title main-font black">Agora, sua bebida</p>
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

        <p class="div-title main-font black">Por fim, sua sobremesa</p>
        <div class="category-container desserts">
            <ul class="options">
                <li class="option sub-font" onclick="selectItem(this, 7.9, 'desserts');">
                    <img class="option-pic" src="./img/pudim 1.png" alt="Pudim"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Pudim</p>
                    <p class="option-description  cinza">Apenas pudim</p>
                    <span>R$ <span class="option-price">7,90</span></span>
                </li>
                <li class="option sub-font" onclick="selectItem(this, 6.0, 'desserts');">
                    <img class="option-pic" src="./img/brigadeiro.jpeg" alt="brigadeiro"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Brigadeiro</p>
                    <p class="option-description  cinza">Brigadeiro de chocolate</p>
                    <span>R$ <span class="option-price">6,00</span></span>
                </li>
                <li class="option sub-font" onclick="selectItem(this, 8.0, 'desserts');">
                    <img class="option-pic" src="./img/quindim.jpeg" alt="Quindim"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Quindim</p>
                    <p class="option-description  cinza">Quindim</p>
                    <span>R$ <span class="option-price">8,00</span></span>
                </li>
                <li class="option sub-font" onclick="selectItem(this, 7.5, 'desserts');">
                    <img class="option-pic" src="./img/pave.jpg" alt="pavê"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Pavê</p>
                    <p class="option-description  cinza">Ou pra cumê?</p>
                    <span>R$ <span class="option-price">7,50</span></span>
                </li>
                <li class="option sub-font" onclick="selectItem(this, 3.5, 'desserts');">
                    <img class="option-pic" src="./img/suflair.jpeg" alt="Suflair"/>
                    <img class="check" src="img/check.png" alt="item selected"/>
                    <p class="option-title  black">Suflair</p>
                    <p class="option-description  cinza">Suflair</p>
                    <span>R$ <span class="option-price">3,50</span></span>
                </li>
            </ul>
        </div>
    </div> 
    );
}