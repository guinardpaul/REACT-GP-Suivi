import React, { Component } from 'react';

class DeleteButton extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    console.log(this.props.item);
    this.props.onDelete(this.props.item);
  }

  render() {
    return (
      <button onClick={this.onDelete}>Supprimer</button>
    );
  }

}

export default DeleteButton;
