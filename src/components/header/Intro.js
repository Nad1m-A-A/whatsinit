import React from 'react'
import classes from '../../assets/styles/Main.module.css';
function Intro() {
    return (
        <div className={`${classes.intro}`}>
            <div className={`${classes.special_font}`}>
                <h3>Matter of Fact;</h3>
                <h1>WHAT'S IN IT FOR ME?</h1>
            </div>
            <p>
                There are more than 40 different kinds of nutrients in food and they can generally be classified into the following 7 major groups:
            </p>
            <ul>
                <li className={classes.label}>Water</li>
                <li className={classes.label}>Carbohydrates</li>
                <li className={classes.label}>Proteins</li>
                <li className={classes.label}>Fats</li>
                <li className={classes.label}>Dietary Fibre</li>
                <li className={classes.label}>Vitamins</li>
                <li className={classes.label}>Minerals</li>
            </ul>
            <p>
                'what's in it' sheds the light only on water, carbs, protein, fat, and fiber.
            </p>
        </div>
    )
}

export default Intro