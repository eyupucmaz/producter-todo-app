import { Trash2 } from "lucide-react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../Item/Item";
import styles from "./List.module.css";

const List = ({ todos, setTodos }) => {
	const handleDelete = () => {
		console.log("cliked");
		setTodos(todos.filter((todo) => todo.isChecked !== true));
	};

	return (
		<>
			<Container>
				<Row className="justify-content-center">
					<Col sm md={10} lg={7} className={styles.list}>
						<div className={styles.list__header}>Your Tasks</div>
						{todos?.map((todo, index) => (
							<Item key={index} todo={todo} todos={todos} setTodos={setTodos} />
						))}
						<div className={styles.list__footer}>
							<p className={styles.footer__text}>clear all completed tasks</p>
							<button className={styles.footer__button} onClick={handleDelete}>
								<Trash2 className={styles.footer__button_icon} />
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default List;
