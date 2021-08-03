import PropTypes from "prop-types";
import React, { Component } from "react";

import s from "./modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
