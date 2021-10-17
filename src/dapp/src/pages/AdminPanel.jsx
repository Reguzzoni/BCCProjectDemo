import React from 'react';
import AdminContractTable from '../components/AdminContractTable';
import Button from "react-bootstrap/Button";


export default function AdminPanel() {
    return <div style={{
        justifyContent:"center",
        alignSelf:"center"
    }}>
        
        <AdminContractTable>
        </AdminContractTable>
        
        <Button style={{width:"98%", margin:"20px 1% 20px 1%"}}
        disabled={true}
        > Create Business Network
        </Button>
    </div>;
          
}