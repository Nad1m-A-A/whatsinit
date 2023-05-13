import React from 'react'
import classes from '../../assets/styles/Main.module.css';

function NutrientsNamesBar({nutrientsNames}) {
    return (
        <div className={classes.outer_nutrients_names_wrapper}>
            <div className={`${classes.inner_nutrients_names_wrapper}`}>
                {nutrientsNames.map((nutrientName, index) => {
                    return (
                        <div className={`${classes.slot}`} key={index}>{nutrientName}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default NutrientsNamesBar