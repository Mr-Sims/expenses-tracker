import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

    // console.log(onAddExpense);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        onAddExpense(expenseData)
    };

    return (
        <div className='new-expense'>
            
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
            
        </div>
    );
};

export default NewExpense;