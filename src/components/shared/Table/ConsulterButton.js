import React, { Component } from 'react';

class ConsulterButton extends Component {
  constructor(props) {
    super(props);
    this.onConsulter=this.onConsulter.bind(this);
  }

  onConsulter(client){
    console.log('consulter client :' + client);
  }

  render() {
    return (
      <button onClick={this.onConsulter}>Consulter</button>
    );
  }

}

export default ConsulterButton;
