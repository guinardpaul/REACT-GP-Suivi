import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  constructor(props) {
    super(props);

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    this.props.onAddClick();
  }

  render() {
    return (
      <button onClick={this.onAdd}>Ajouter</button>
    );
  }
}

AddButton.PropTypes = {
  onAdd: PropTypes.func
}

export default AddButton;
