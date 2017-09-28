import React, { Component } from 'react';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.onAdd=this.onAdd.bind(this);
  }

  onAdd(){

  }

  render() {
    return (
      <button onClick={this.onAdd}>Ajouter</button>
    );
  }

}

export default AddButton;
