import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {props.expenses.map(x => <ExpenseItem key={x.id} props={x}/>)}
        </Card>
    );
}

export default Expenses;