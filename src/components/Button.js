import PropTypes from "prop-types";
//import { useState } from "react";

const Button = ({ color, text, onToggle }) => {
	// const [show, setToggleShow] = useState(false);

	// const onClick = (e) => {
	// 	// e.preventDefault();

	// 	setToggleShow(!show);
	// 	console.log(show);
	// 	onToggle({ show });

	// 	//setToggleShow(true);
	// };

	return (
		<button
			style={{ backgroundColor: color }}
			className="btn"
			onClick={() => onToggle()}
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "steelblue",
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
};

export default Button;
