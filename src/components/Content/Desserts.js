export default function Desserts(){
    return(
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
    );
}