import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = (year) => {
        setFilteredYear(year)
    }

    const filteredExpenses = props.expenses.filter(x => x.date.getFullYear().toString() === filteredYear)
   
    return (
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
    );
}

export default Expenses;