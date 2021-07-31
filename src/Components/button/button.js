import PropTypes from "prop-types";
import s from "./button.module.css";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
