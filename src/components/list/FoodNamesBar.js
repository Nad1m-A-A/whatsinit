import React from 'react'
import classes from '../../assets/styles/Main.module.css';

function FoodNamesBar({foodNames}) {
    return (
        <div className={classes.outer_food_names_wrapper}>
            <div className={classes.inner_food_names_wrapper}>
                <div className={`${classes.slot} ${classes.food_label} ${classes.special_slot}`}>food⬇/nutrient➡</div>
                {foodNames.map((item,index) => {
                    return (
                    <div className={classes.slot} key={index}>
                        {item}
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FoodNamesBar