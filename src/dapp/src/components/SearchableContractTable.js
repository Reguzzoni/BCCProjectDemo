import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class SearchableContractTable extends React.Component {
    render() {
        const rows = [ "", "", "", "", "", ""];
        const columns = [{
          dataField: 'name',
          text: 'Select'
        }, {
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
            text: 'Role'
          }, {
            dataField: 'name',
            text: 'Details & Contract'
          }];
        
            return <div>
                <h3 style={{textAlignVertical: "center",textAlign: "center",}}>Search Available Contracts</h3>
                <div className="ag-theme-alpine" style={{height: 250}}>
                  <AgGridReact
                      rowData={rows}>
                      <AgGridColumn flex={1} field="SELECT"></AgGridColumn>
                      <AgGridColumn flex={1} field="NETWORK"></AgGridColumn>
                      <AgGridColumn flex={1} field="ID"></AgGridColumn>
                      <AgGridColumn flex={1} field="STATUS"></AgGridColumn>
                      <AgGridColumn flex={1} field="ROLE"></AgGridColumn>
                      <AgGridColumn flex={1} field="DETAILS & CONTRACT"></AgGridColumn>
                  </AgGridReact>
              </div>
              </div>
            ;
    }
  }
  
export default SearchableContractTable;