import styles from "./Header.module.css";
import { ListChecks } from "lucide-react";
import { Container } from "react-bootstrap";

const Header = () => {
	return (
		<>
			<Container>
				<div className={styles.header}>
					<a href="/" className={styles.header__icon}>
						<ListChecks size={48} color="#2d70fd" />
					</a>
					<h1 className={styles.header__text}>To Do List App</h1>
				</div>
			</Container>
		</>
	);
};

export default Header;
