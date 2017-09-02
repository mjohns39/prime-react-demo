import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column'

export default class CarTable extends Component {
  constructor() {
    super();
    this.state = {
      cars: []
    };
    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];
  }

  componentDidMount() {
    let url = 'http://localhost:9000/cars';
    fetch(url)
    .then(response => {
      if(response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(data => {
      this.setState({cars: data._embedded.cars});
    });

  }
  render() {
    var dynamicColumns = this.cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
          });
    return (
      <div className="Baml-home">
        <DataTable value={this.state.cars}>
          {dynamicColumns}
        </DataTable>
      </div>
    )
  }

}
