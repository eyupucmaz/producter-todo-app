import { useEffect, useState } from "react";
import { ListPlus } from "lucide-react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./TodoForm.module.css";

const TodoForm = ({ todos, setTodos }) => {
	const [text, setText] = useState("");

	const [todo, setTodo] = useState({
		text: text,
		isChecked: false,
		id: Date.now(),
	});
	const handleChange = (e) => {
		setText(e.target.value);
	};

	useEffect(() => {
		setTodo({ text: text, isChecked: false, id: Date.now() });
	}, [text]);

	const handleClick = () => {
		if (text.length > 0) {
			setTodos([...todos, todo]);
			setText("");
		}
	};
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleClick();
		}
	};

	return (
		<>
			<Container>
				<Row className="justify-content-center">
					<Col sm md={10} lg={7} className={styles.form__container}>
						<div className={styles.form}>
							<input
								type="text"
								placeholder="Add new task"
								className={styles.form__input}
								onChange={handleChange}
								value={text}
								onKeyPress={handleKeyPress}
							/>
							<button
								type="button"
								className={styles.form__button}
								onClick={handleClick}
							>
								<ListPlus size={36} className={styles.button__icon} />
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TodoForm;
