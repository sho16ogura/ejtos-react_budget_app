import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch, expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const submitEvent = () => {
        if(newBudget > 20000){
            setNewBudget(20000);
            alert('You cannot exceed the upper limit value of budget');
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(newBudget < totalExpenses){
            setNewBudget(totalExpenses);
            alert('You cannot reduce the budget value lower than spending');
            return;
        }

        dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{ width: '5rem' }}/>
            <button className="btn btn-primary" onClick={submitEvent} >
                Save
            </button>
        </div>
    );
};

export default Budget;