import { Header, TodoForm, List } from "./Components";
import { Container } from "react-bootstrap";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
	const [todos, setTodos] = useState(() => {
		let localTodos = localStorage.getItem("todos");
		return localTodos ? JSON.parse(localTodos) : [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<Header className={styles.header} />
			<Container fluid className={styles.main}>
				<TodoForm setTodos={setTodos} todos={todos} />
				<List todos={todos} setTodos={setTodos} />
			</Container>
		</>
	);
}

export default App;
