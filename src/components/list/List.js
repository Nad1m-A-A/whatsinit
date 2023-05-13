import React, { useEffect, useState } from 'react'
import classes from '../../assets/styles/Main.module.css';
import NutrientsNamesBar from './NutrientsNamesBar';
import FoodNamesBar from './FoodNamesBar';
import FoodAndNutrientsLabel from './FoodAndNutrientsLabel';
import FactsRows from './FactsRows';
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
            setFacts(data.map(item => item.facts)); //? to get facts objets into an array
            setNutrientnsNames(Object.keys(data[0].facts)); //? to get nutrients names (facts objects share nutrients names)
            setFoodNames(data.map(item => item.item)); //? to get food names 
        })();
    }, []);

    const dataNotVoid = Boolean(fetchedData.length);
    return (
        <>
            {dataNotVoid && <div className={`${classes.main_board}`}>
                <div className={classes.main_board_content}>
                    <div className={classes.left_column}>
                        <FoodAndNutrientsLabel/>
                        <FoodNamesBar foodNames={foodNames}/>
                    </div>
                    <div className={classes.right_column}>
                        <NutrientsNamesBar nutrientsNames={nutrientsNames}/>
                        <FactsRows facts={facts}/>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default List