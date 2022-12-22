import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({props}) => {
	let title = props.title;

	const clickHandler = () => {
		title = 'Updated!'
	}


	return (
		<Card className="expense-item">
			<ExpenseDate props={props.date} />

			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">$ {props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;