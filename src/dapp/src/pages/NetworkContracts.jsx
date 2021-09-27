import React from 'react';
import MyContractTable from '../components/MyContractTable';
import SearchableContractTable from '../components/SearchableContractTable';


export default function NetworkContracts() {
    return <div className="networkContract">
        <SearchableContractTable></SearchableContractTable>
        <MyContractTable></MyContractTable>
    </div>;
          
}
