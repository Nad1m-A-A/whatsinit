import React from 'react'
import classes from '../../assets/styles/Main.module.css';

function FoodAndNutrientsLabel() {
    return (
            <div className={`${classes.slot} ${classes.food_nutrients_label}`}>
                {/* <div>nutrients</div>
                <div>food</div> */}
                nutrient⬇/food➡
            </div>
    )
}

export default FoodAndNutrientsLabel