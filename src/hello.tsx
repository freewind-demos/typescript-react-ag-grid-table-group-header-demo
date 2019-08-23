import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const columnDefs = [{
  headerName: "User Name",
  children: [{
    headerName: "First Name",
    field: 'firstName'
  }, {
    headerName: "Last Name",
    field: 'lastName'
  }], field: "make"
}, {
  headerName: "Age", field: "age"
}]

const rowData = [{
    firstName: "AAA", lastName:"BBB", age: 37
  }, {
  firstName: "CCC", lastName:"DDD", age: 73
  }, {
  firstName: "EEE", lastName:"FFF", age: 25
  }]
;

export default function Hello() {
  return <div>
    <h1>Hello React-AgGrid</h1>
    <div
      className="ag-theme-balham"
      style={{
        height: '500px',
        width: '600px'
      }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}>
      </AgGridReact>
    </div>
  </div>
};
