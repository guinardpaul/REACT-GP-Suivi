import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableItems from './TableItems';
import ConsulterButton from './ConsulterButton';
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';

class TableBody extends Component {
  constructor(props) {
    super(props);

    this.handleConsulter = this.handleConsulter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleConsulter(obj) {
    console.log(obj);
  }

  handleUpdate(obj) {
    this.props.onUpdate(obj);
  }

  handleDelete(obj) {
    this.props.onDelete(obj);
  }

  render() {
    const tableItems = this.props.listAttributs.map((attr, index) => {
      //let attribut = this.props.item + '.' + attr;
      console.log(this.props.item.attr);
      return <td key={index}>{attr.value}</td>
      /* return <TableItems item={this.props.item} attribut={attr} key={index} /> */
    });

    return (
      <tr>
        {/* <td>{this.props.item.nom}</td> */}
        {tableItems}
        <td>
          <ConsulterButton item={this.props.item} onConsulter={this.handleConsulter} />
          <UpdateButton item={this.props.item} onUpdate={this.handleUpdate} />
          <DeleteButton item={this.props.item} onDelete={this.handleDelete} />
        </td>
      </tr>
    );
  }
}

TableBody.PropTypes = {
  handleConsulter: PropTypes.func,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
  componentDidMount: PropTypes.func,
  getTableItems: PropTypes.func,
  attribut: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  item: PropTypes.object
}

export default TableBody;
