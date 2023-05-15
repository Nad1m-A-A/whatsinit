import React from 'react'
import classes from '../../assets/styles/Main.module.css';

function FoodNamesBar({foodNames}) {
    return (
        <div className={`${classes.food_names_bar}`}>
            {foodNames.map((foodName, index) => {
                return (
                    <div className={`${classes.slot}`} key={index}>{foodName}</div>
                )
            })}
        </div>
    )
}

export default FoodNamesBar