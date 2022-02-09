import { ListPlus } from "lucide-react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./TodoForm.module.css";

const TodoForm = () => {
	return (
		<>
			<Container>
				<Row className="d-flex justify-content-center">
					<Col sm md={10} lg={7} className={styles.form}>
						<input
							type="text"
							placeholder="Add new task"
							className={styles.form__input}
						/>
						<button className={styles.form__button}>
								<ListPlus size={36} className={styles.button__icon}/>
							</button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TodoForm;
