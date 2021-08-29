import OptionsRow from "./OptionsRow";

export default function Drinks({setArrayPointers, isOrderEneable}){
    return(
        <div className="category-container drinks">
            <OptionsRow 
                category='drinks'
                setArrayPointers={setArrayPointers}
                isOrderEneable={isOrderEneable}
             />
            
        </div>
    );
}