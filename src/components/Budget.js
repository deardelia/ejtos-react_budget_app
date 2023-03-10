
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const Budget = () => {
    const { currency, budget, expenses, dispatch } = useContext(AppContext);
    // const [currentBudget, setCurrentBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const maxBudget  = 20000;

    const changeValue = (newValue) => {
        if(newValue > maxBudget) {
            alert("The value cannot exceed max budget  £"+maxBudget);
            return;
        }
        if (newValue < totalExpenses) {
            alert("You cannot lower budget value than the spending");
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newValue,
        });
        
    }

    return (
        <div className='alert alert-secondary'>
            <text>{`Budget: ${currency}`}</text>
            <span>
            <input
                required='required'
                type='number'
                id='currentBudget'
                value={budget}
                step={10}
                style={{ marginLeft: '0rem' , size: 10}}
                onChange={(event) => changeValue(event.target.value)}>
            </input>
            </span>
        </div>
    );
};
export default Budget;