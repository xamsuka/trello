import React, { Component } from "react";

class FormRegistration extends Component {
  constructor() {
    super();
    this.iputFirstName = React.createRef();
    this.handleRegistrationuser = this.handleRegistrationuser.bind(this);
  }

  handleRegistrationuser(evt) {
    evt.preventDefault();

    const userData = {};
    userData['firstName'] = this.iputFirstName.current.value;

    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('userData', JSON.stringify(userData));
      this.props.onSubtitForm(userData);
    } else {
      // браузер не поддерживает веб-хранилище
    }
  }

  render() {
    return (
      <form className="form-registration">
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            placeholder="Enter first name"
            ref={this.iputFirstName}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleRegistrationuser}>
          Register
        </button>
      </form>
    );
  }
}

export default FormRegistration;
