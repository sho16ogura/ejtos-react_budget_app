
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><BiPlusCircle size='1.5em' onClick={event=> increaseAllocation(props.name)} style={{color:"#abef89"}}></BiPlusCircle></td>
            <td><BiMinusCircle size='1.5em' onClick={event=> decreaseAllocation(props.name)} style={{color:"#ff0036"}}></BiMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;