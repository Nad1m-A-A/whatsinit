import React, { createContext, useReducer } from "react";

const MainContext = createContext();
export default MainContext;

const initialData = {
    food: null,
    user: null,
}

const reducer = (state, action) => {
    if(action.type === "STORE_FOOD")
        return {...state, food: action.payload}

    if(action.type === "STORE_USER")
        return {...state, user: action.payload}

    return state;
}


export const MainContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialData);
    const storeFood = (food) => {
        dispatch({type:"STORE_FOOD", payload:food})
    }
    const storeUser  = (user) => {
        dispatch({type:"STORE_USER", payload:user})
    }
    const contextValue = {
        food: state.food,
        user: state.user,
        storeFood,
        storeUser,
    }
    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
}