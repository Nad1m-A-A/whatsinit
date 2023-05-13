import React from 'react'
import classes from '../../assets/styles/Main.module.css';
function Header() {
    return (
        <div className={`${classes.home_header} ${classes.centered_column_flex} ${classes.responsive_padding}`}>
            <div className={`${classes.special_font}`}>
                <h3>Matter of Fact;</h3>
                <h1>WHAT'S IN IT FOR ME?</h1>
            </div>
            <div className={`${classes.home_description}`}>
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
                    `what's in it` sheds the light only on Water, Carbs, Protein, Fat, and Fiber.
                </p>
            </div>
        </div>
    )
}

export default Header