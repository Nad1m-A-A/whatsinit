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

    const filterBoard = (e) => {
        const filteredFactArray = data.filter(food => food.item.startsWith(e.target.value.toLowerCase()));
        if(filteredFactArray.length > 0) {
            setFacts(filteredFactArray.map(food => food.facts))
            setNutrientnsNames(Object.keys(filteredFactArray[0].facts));
            setFoodNames(filteredFactArray.map(item => item.item))
        }
    }

    return (
        <section className={classes.board_section}>
            {data && <div className={classes.board_wrapper}>
                <div className={classes.board_caption_and_filters}>
                    <h3>Here is a table including nutrients facts:</h3>
                    <input onChange={filterBoard} className={classes.search_input} placeholder='Search items'/>
                </div>
                <div className={`${classes.main_board}`}>
                    {/*//! RETURN WHEN THERE IS DATA */}
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
                </div>
            </div>}
            {/*//! RETURN WHEN LOADING */}
            {loading && <Loader/>}

            {/*//! RETURN WHEN THERE IS ERROR */}
            {error && <ErrorMessage error={error}/>}
        </section>            
    )
}

export default List