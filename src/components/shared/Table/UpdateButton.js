import React, { Component } from 'react';

class UpdateButton extends Component {
  constructor(props) {
    super(props);
    this.onUpdate=this.onUpdate.bind(this);
  }

  onUpdate(){
    
  }

  render() {
    return (
      <button onClick={this.onUpdate}>Modifier</button>
    );
  }

}

export default UpdateButton;
