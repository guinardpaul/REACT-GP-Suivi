import React, { Component } from 'react';

class ConsulterButton extends Component {
  constructor(props) {
    super(props);

    this.onConsulter = this.onConsulter.bind(this);
  }

  onConsulter() {
    this.props.onConsulter(this.props.item);
  }

  render() {
    return (
      <button onClick={this.onConsulter}>Consulter</button>
    );
  }

}

export default ConsulterButton;
