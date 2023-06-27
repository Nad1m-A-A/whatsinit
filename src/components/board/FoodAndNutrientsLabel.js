import React from 'react'
import classes from '../../assets/styles/Main.module.css';

function FoodAndNutrientsLabel() {
    return (
            <div className={`${classes.slot} ${classes.food_nutrients_label}`}>
                <div>food➡</div>
                <div>nutrients⬇</div>
                {/* nutrient⬇/food➡ */}
            </div>
    )
}

export default FoodAndNutrientsLabel