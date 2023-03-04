
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import * as NumericInput from "react-numeric-input";

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const maxBudget  = 20000;
    const changeValue = (newValue) => {
        console.log(newValue)
        if(newValue > maxBudget) {
            alert("The value cannot exceed max budget  £"+maxBudget);
            return;
        } 
        dispatch({
            type: 'SET_BUDGET',
            payload: newValue,
        });
        if (budget < totalExpenses) {
            alert("You cannot lower budget value than the spending");
            return;
        }
    }

    return (
        <div className='alert alert-secondary'>
            <text>Budget: £</text>
            <span>
            <NumericInput step={10} precision={0} value={budget} onChange={changeValue}/>
            </span>
        </div>
    );
};
export default Budget;