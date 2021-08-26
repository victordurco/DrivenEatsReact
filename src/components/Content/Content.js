import Desserts from "./Desserts";
import Dishes from "./Dishes";
import Drinks from "./Drinks";

export default function Content(){
    return (
    <div className="content">   
        <p className="div-title main-font black">Primeiro, seu prato</p>
        <Dishes />

        <p className="div-title main-font black">Agora, sua bebida</p>
        <Drinks />

        <p className="div-title main-font black">Por fim, sua sobremesa</p>
        <Desserts />
    </div> 
    );
}