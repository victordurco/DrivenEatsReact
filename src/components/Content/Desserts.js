import OptionsRow from "./OptionsRow";

export default function Desserts({setArrayPointers, isOrderEneable}){
    return(
        <div className="category-container desserts">
            <OptionsRow 
                category='desserts'
                setArrayPointers={setArrayPointers}
                isOrderEneable={isOrderEneable}
            />
        </div>
    );
}