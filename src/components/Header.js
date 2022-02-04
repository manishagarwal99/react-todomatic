import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onToggle }) => {
	// const [show, setToggleShow] = useState(false);

	// const ToggleShow = (show) => {
	// 	// e.preventDefault();

	// 	onToggle({ show });

	// 	//setToggleShow(true);
	// };

	return (
		<header className="header">
			<h1>{title}</h1>
			<Button color="green" text="Add" onToggle={onToggle} />
		</header>
	);
};

// Header.defaultProps = {
// 	title: "Task Tracker",
// };
// Header.propTypes = {
// 	title: PropTypes.string.isRequired,
// };

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header;
