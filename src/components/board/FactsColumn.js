import React from 'react'
import classes from '../../assets/styles/Main.module.css';

function FactsColumn({facts}) {
    const factsArray = Object.values(facts);
    const latsIndex = factsArray.length - 1;
    for (let i = 0; i < factsArray.length; i++) {
        //? FIRST INDEX
        if(i === 0) {
            factsArray[i] = factsArray[i].split("%")[0].padStart(2,"0") + "%"
        }
        //? LAST INDEX
        else if (i === latsIndex) {
            factsArray[i] = factsArray[i].split("kcal")[0].padStart(3,"0") + "kcal"
        }
        //? NEITHER FIRST NOR LAST INDEX
        else {
            factsArray[i] = Number(factsArray[i]).toFixed(2) + "g";
        }
    }

    return (
        <div className={`${classes.facts_column}`}>
            {factsArray.map((fact, index) => {
                return (
                    <div className={`${classes.slot}`} key={index}>
                        {fact}
                    </div>
                )
            })}
        </div>
    )
}

export default FactsColumn