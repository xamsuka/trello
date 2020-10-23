import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Modal.css";
import Portal from "../Portal/Portal";

class Modal extends Component {

  render() {
    const { isOpen, title, onCancel, children } = this.props;

    return (
      <React.Fragment>
        {isOpen && (
          <Portal>
            <div className="modal">
              <div className="modal__overlay">
                <div className="modal__window">
                  <div className="modal__content">
                    <h2 className="modal__title">{title}</h2>
                    <div className="modal__button modal__body">{children}</div>
                    <button
                      type="button"
                      className="modal__button-close close"
                      aria-label="Close"
                      onClick={onCancel}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Portal>
        )}
      </React.Fragment>
    );
  }
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;
