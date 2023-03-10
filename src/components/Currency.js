
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
   
    const changeValue = (newValue) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newValue,
        });
        
    }

    return (
        <div className={`alert alert-success`}>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeValue(event.target.value)}>
                <option defaultValue>{`Currency (default $ Dollar)`}</option>
                <option value="$" name="dollar"> Currency $ Dollar</option>
                <option value="£" name="pound">Currency £ Pound</option>
                <option value="€" name="euro">Currency € Euro</option>
                <option value="₹" name="ruppe">Currency ₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;