import React, {PureComponent} from 'react';
import Modal from '../../components/Modal/Modal.jsx';

const withModalLogin = (componentModal) => {
  return class WidthModalLogin extends PureComponent {
    constructor() {
      super();
      this.isOpen = false;
    }

    render() {
      return <Modal
      {...this.props}
      />
    }
  }
}
