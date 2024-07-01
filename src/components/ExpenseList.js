
import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';




const ExpenseList = () => {
    const { expenses, dispatch} = useContext(AppContext);

    const changeCurrency = (curr) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        })
    }

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="changeCurrency">Currency</label>
                    </div>
                    <select className="custom-select" id="changeCurrency" style={{ backgroundColor: '#adff2f' }} onChange={(event) => changeCurrency(event.target.value)}>
                        <option value="£" name="pound">£ Pound</option>
                        <option value="$" name="dolloar">$ Dollar</option>
                        <option value="€" name="euro">€ Euro</option>
                        <option value="₹" name="ruppee">₹ Ruppee</option>
                        <option value="¥" name="yen">¥ Yen/Yuan</option>
                    </select>
                </div>
            </div>

            <table className='table'>
                <thead className="thead-light">
                    <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;