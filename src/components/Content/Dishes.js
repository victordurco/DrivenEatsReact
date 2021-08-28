import OptionsBox from "./OptionsBox";

export default function Dishes(){
    const selectedDishes = [];

    return (
        <div className="category-container dishes">
            <OptionsBox 
                category='dishes'
            />
        </div>
    );
}