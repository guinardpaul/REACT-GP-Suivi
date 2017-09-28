import React, { Component } from 'react';
import TableItems from './TableItems';

class Table extends Component {

  render() {
    const list = this.props.list.map((item, index) => {
      return <TableItems item={item} key={index} />
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    );
  }

}

export default Table;
