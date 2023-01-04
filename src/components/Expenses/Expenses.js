import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023')
    console.log(filteredYear)

    const filterChangeHandler = (year) => {
        setFilteredYear(year)
    }
    // console.log(props.expenses.filter(x => x.date.getFullYear().toString() === filteredYear))
    // props.expenses.forEach(el => {
    //     console.log(el.date.getFullYear().toString())
    // })
    return (
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {/* {props.expenses.map(x => <ExpenseItem key={x.id} props={x} />)} */}
                {props.expenses
                    .filter(x => x.date.getFullYear().toString() === filteredYear)
                    .map(x => <ExpenseItem key={x.id} props={x} />)
                }
            </Card>
    );
}

export default Expenses;