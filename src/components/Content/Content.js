import Desserts from "./Desserts";
import Dishes from "./Dishes";
import Drinks from "./Drinks";

export default function Content({setArrayPointers, isOrderEneable}){
    return (
    <div className="content">   
        <p className="div-title main-font black">Primeiro, seu prato</p>
        <Dishes 
            setArrayPointers={setArrayPointers} 
            isOrderEneable={isOrderEneable}
        />

        <p className="div-title main-font black">Agora, sua bebida</p>
        <Drinks 
            setArrayPointers={setArrayPointers} 
            isOrderEneable={isOrderEneable}
        />

        <p className="div-title main-font black">Por fim, sua sobremesa</p>
        <Desserts 
            setArrayPointers={setArrayPointers} 
            isOrderEneable={isOrderEneable}
        />
    </div> 
    );
}