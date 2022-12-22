import './ExpenseDate.css';

const ExpenseDate = ({ props }) => {
    const month = props.toLocaleString('en-US', { month: 'short' });
    const day = props.toLocaleString('en-US', { day: '2-digit' });
    const year = props.getFullYear()

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;