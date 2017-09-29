import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableItems extends Component {
  render() {
    return (
      <td>{this.props.data}</td>
    );
  }
}

TableItems.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default TableItems;
