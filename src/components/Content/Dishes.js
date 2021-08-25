export default function Dishes(){
    return (
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
    );
}