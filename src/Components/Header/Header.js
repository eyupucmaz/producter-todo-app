import styles from "./Header.module.css";
import { ListChecks } from "lucide-react";

const Header = () => {
	return (
		<>
			<nav className={styles.header}>
				<a href="/" className={styles.header__link}>
					<ListChecks size={36} className={styles.header__link_icon}/>
				</a>
				<h1 className={styles.header__text}>to-do list app</h1>
			</nav>
		</>
	);
};

export default Header;
