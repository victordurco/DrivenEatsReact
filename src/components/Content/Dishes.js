import OptionsRow from "./OptionsRow";

export default function Dishes({setArrayPointers, isOrderEneable}){

    return (
        <div className="category-container dishes">
            <OptionsRow 
                category='dishes'
                setArrayPointers={setArrayPointers}
                isOrderEneable={isOrderEneable}
            />
        </div>
    );
}