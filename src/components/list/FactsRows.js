import React from 'react'
import classes from '../../assets/styles/Main.module.css';
import FactsRow from './FactsRow';

function FactsRows({facts}) {
    return (
        <div className={classes.facts_rows_wrapper}>
            {facts.map((factsObject, index) => {
                return (
                    <FactsRow key={index} facts={factsObject}/>
                )
            })}
        </div>
    )
}

export default FactsRows