import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class MyContractTable extends React.Component {
    render() {
        const rows = [ "", "", "", "", "", ""];
        const columns = [{
          dataField: 'name',
          text: 'Network'
        }, {
          dataField: 'id',
          text: 'ID'
        }, {
          dataField: 'boolean',
          text: 'Status'
        }, {
            dataField: 'name',
            text: 'Contract'
          }, {
            dataField: 'name',
            text: 'Subscribe Request'
          }];
        
            return <div>
              <h3 style={{textAlignVertical: "center",textAlign: "center",}}>My Contracts</h3>
              <div className="ag-theme-alpine" style={{height: 250}}>
                  <AgGridReact
                      rowData={rows}>
                      <AgGridColumn flex={1} field="NETWORK"></AgGridColumn>
                      <AgGridColumn flex={1} field="ID"></AgGridColumn>
                      <AgGridColumn flex={1} field="STATUS"></AgGridColumn>
                      <AgGridColumn flex={1} field="CONTRACT"></AgGridColumn>
                      <AgGridColumn flex={1} field="SUBSCRIBE REQUEST"></AgGridColumn>
                  </AgGridReact>
                </div>;
            </div>;
    }
  }
  
export default MyContractTable;