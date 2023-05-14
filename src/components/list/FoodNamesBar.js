import React from 'react'
import classes from '../../assets/styles/Main.module.css';

function FoodNamesBar({foodNames}) {
    console.log(foodNames);
    return (
        <div className={classes.food_names_bar}>
            {foodNames.map((item,index) => {
                return (
                <div className={classes.slot} key={index}>
                    {item}
                </div>
                )
            })}
        </div>
    )
}

export default FoodNamesBar