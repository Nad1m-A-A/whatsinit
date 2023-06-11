import React, { useEffect, useState } from 'react'
import classes from '../../assets/styles/Main.module.css';
import NutrientsNamesBar from './NutrientsNamesBar';
import FoodNamesBar from './FoodNamesBar';
import FoodAndNutrientsLabel from './FoodAndNutrientsLabel';
import FactsColumns from './FactsColumns';
import useFetch from '../../hooks/useFetch';
import Loader from '../layout/Loader';
import ErrorMessage from '../layout/ErrorMessage';
function List() {
    const [facts, setFacts] = useState([]);
    const [nutrientsNames, setNutrientnsNames] = useState([]);
    const [foodNames, setFoodNames] = useState([]);
    const [data, loading, error] = useFetch("http://localhost/whatsinit/api/food/");
    
    useEffect(() => {
        if(data) {
            setFacts(data.map(item => item.facts)); //? to get facts objets into an array
            setNutrientnsNames(Object.keys(data[0].facts)); //? to get nutrients names (facts objects share nutrients names)
            setFoodNames(data.map(item => item.item)); //? to get food names 
        }
    }, [data]) //x maybe I should add error and loading

    return (
        <>
            {/*//! RETURN WHEN THERE IS DATA */}
            {data && <div className={`${classes.main_board}`}>
                <div className={classes.main_board_content}>
                    <div className={classes.left_column}>
                        <FoodAndNutrientsLabel/>
                        <NutrientsNamesBar nutrientsNames={nutrientsNames}/>
                    </div>
                    <div className={classes.right_column}>
                        <FoodNamesBar foodNames={foodNames}/>
                        <FactsColumns facts={facts}/>
                    </div>
                </div>
            </div>}

            {/*//! RETURN WHEN LOADING */}
            {loading && <Loader/>}

            {/*//! RETURN WHEN THERE IS ERROR */}
            {error && <ErrorMessage error={error}/>}
        </>
    )
}

export default List