import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = ({props}) => {
	const [title, setTitle] = useState(props.title);
	console.log('evaluated by react', props.id)


	const clickHandler = () => {
		setTitle(`Updated ${props.id}`)
		console.log('updated', props.id)
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
