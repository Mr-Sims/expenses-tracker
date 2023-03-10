import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const enteredData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        onSaveExpenseData(enteredData)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2023-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={onCancel} >Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );

};

export default ExpenseForm;