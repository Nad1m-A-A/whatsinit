import React from 'react'
import classes from '../../assets/styles/Main.module.css';

function NutrientsNamesBar({nutrientsNames}) {
    console.log(nutrientsNames);
    return (
        <div className={`${classes.nutrients_names_bar}`}>
            {nutrientsNames.map((nutrientName, index) => {
                return (
                    <div className={`${classes.slot}`} key={index}>{nutrientName}</div>
                )
            })}
        </div>
    )
}

export default NutrientsNamesBar