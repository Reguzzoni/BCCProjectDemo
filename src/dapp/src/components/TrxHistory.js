import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

class TrxHistory extends React.Component {
    render() {
        const rows = [ "", "", "", "", "", ""];
        const columns = [{
          dataField: 'name',
          text: 'Payee'
        }, {
          dataField: 'id',
          text: 'ID'
        }, {
          dataField: 'boolean',
          text: 'Status'
        }, {
            dataField: 'name',
            text: 'Amount'
          }, {
            dataField: 'name',
            text: 'Date'
          }];
        
            return <div className="not found">
              <h2 style={{textAlignVertical: "center",textAlign: "center",}}>Transaction history</h2>
              <BootstrapTable keyField='id' style="width:10%" data={ rows } columns={ columns } />
            </div>;
    }
  }
  
export default TrxHistory;