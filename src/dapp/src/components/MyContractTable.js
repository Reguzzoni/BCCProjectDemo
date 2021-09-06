import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

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
              <h2 style={{textAlignVertical: "center",textAlign: "center",}}>My Contracts</h2>
              <BootstrapTable keyField='id' style="width:10%" data={ rows } columns={ columns } />
            </div>;
    }
  }
  
export default MyContractTable;