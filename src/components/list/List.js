import React, { useEffect, useState } from 'react'
import classes from '../../assets/styles/Main.module.css';
import FactsRow from './FactsRow';
import NutrientsNamesBar from './NutrientsNamesBar';
import FoodNamesBar from './FoodNamesBar';
function List() {
    const [fetchedData, setFetchedData] = useState([]);
    const [facts, setFacts] = useState([]);
    const [nutrientsNames, setNutrientnsNames] = useState([]);
    const [foodNames, setFoodNames] = useState([]);

    useEffect(() => {
        (async function fetchData() {
            const response = await fetch("http://localhost/whatsinit/api/food/");
            const data = await response.json();
            setFetchedData(data);
            setFacts(data.map(item => item.facts)); //! to get facts objets into an array
            setNutrientnsNames(Object.keys(data[0].facts)); //! to get nutrients names (facts objects share nutrients names)
            setFoodNames(data.map(item => item.item)); //! to get food names 
        })();
    }, []);

    const dataNotVoid = Boolean(fetchedData.length);
    return (
        <>
            {dataNotVoid && <div className={`${classes.list}`}>
                <FoodNamesBar foodNames={foodNames}/>
                <div className={`${classes.nutrients_wrapper}`}>
                        <NutrientsNamesBar nutrientsNames={nutrientsNames}/>
                        {facts.map((factsObject, index) => {
                            return (
                                <FactsRow key={index} facts={factsObject}/>
                            )
                        })}
                </div>
            </div>}
        </>
    )
}

export default List