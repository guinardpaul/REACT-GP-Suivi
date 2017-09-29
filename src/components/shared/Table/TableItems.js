import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableItems extends Component {
  render() {
    let attribut = this.props.item + '.' + this.props.attribut;

    return (
      { attribut }
    );
  }
}

TableItems.propTypes = {
  attribut: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default TableItems;