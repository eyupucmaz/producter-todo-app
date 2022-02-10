import { useState } from "react";
import { CheckSquare, Square } from "lucide-react";
import styles from "./Item.module.css";

const Item = ({ todo, todos, setTodos }) => {
	const [isChecked, setIsChecked] = useState(todo.isChecked);

	const handleCheckbox = () => {
		setIsChecked(!isChecked);
		todo.isChecked = !isChecked;
		setTodos([...todos]);
	};

	return (
		<>
			<div className={styles.item}>
				<div className={todo.isChecked ? styles.strike : styles.item__text}>
					{todo.text}
				</div>
				<div className={styles.item__checkbox} onClick={handleCheckbox}>
					{todo.isChecked ? <CheckSquare /> : <Square />}
				</div>
			</div>
		</>
	);
};

export default Item;
