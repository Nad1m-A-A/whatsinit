import React from 'react'
import classes from '../../assets/styles/Main.module.css';
import { useState } from 'react';

function NutrientsNamesBar({nutrientsNames}) {
    const nutrientsInfo = ["Water is a chemical substance that is essential for all known forms of life. It is a transparent, tasteless, and odorless liquid at room temperature and appears in nature in various forms, including lakes, rivers, oceans, and even in the atmosphere as water vapor.", "Water is a chemical substance that is essential for all known forms of life. It is a transparent, tasteless, and odorless liquid at room temperature and appears in nature in various forms, including lakes, rivers, oceans, and even in the atmosphere as water vapor.", "Water is a chemical substance that is essential for all known forms of life. It is a transparent, tasteless, and odorless liquid at room temperature and appears in nature in various forms, including lakes, rivers, oceans, and even in the atmosphere as water vapor.", "Water is a chemical substance that is essential for all known forms of life. It is a transparent, tasteless, and odorless liquid at room temperature and appears in nature in various forms, including lakes, rivers, oceans, and even in the atmosphere as water vapor.", "Water is a chemical substance that is essential for all known forms of life. It is a transparent, tasteless, and odorless liquid at room temperature and appears in nature in various forms, including lakes, rivers, oceans, and even in the atmosphere as water vapor.", "Water is a chemical substance that is essential for all known forms of life. It is a transparent, tasteless, and odorless liquid at room temperature and appears in nature in various forms, including lakes, rivers, oceans, and even in the atmosphere as water vapor."]
    const [poperElement, setPoperElement] = useState(null)
    const showPopup = (e) => {
        const popup = e.target.querySelector('span')
        if(!popup) return;
        setPoperElement(popup);
        popup.classList.add(classes.popup);
    }
    const hidePopup = () => {
        poperElement.classList.remove(classes.popup);
    }
    return (
        <div className={classes.nutrients_names_bar}>
            {nutrientsNames.map((nutrientName,index) => {
                return (
                <div data-about_nutrient={nutrientsInfo[index]} onMouseLeave={hidePopup} onMouseOver={showPopup} className={`${classes.slot}`} key={index}>
                    {nutrientName}
                    <span className={classes.nutrient_info}>{nutrientsInfo[index]}</span>
                </div>
                )
            })}
        </div>
    )
}

export default NutrientsNamesBar