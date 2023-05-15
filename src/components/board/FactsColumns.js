import React from 'react'
import classes from '../../assets/styles/Main.module.css';
import FactsColumn from './FactsColumn';

function FactsColumns({facts}) {
    return (
        <div className={classes.facts_columns_wrapper}>
            {facts.map((factsObject, index) => {
                return (
                    <FactsColumn key={index} facts={factsObject}/>
                )
            })}
        </div>
    )
}

export default FactsColumns