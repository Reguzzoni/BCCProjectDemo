import React from 'react';
import './dashboard.scss';

function Dashboard(props) {
    console.log("Dashboard props", props);
    return (
        <div className="app">
            <h2 className="titleStyle"
                >You're Welcome to BCC Studio Demo!
            </h2>
        </div>
    );
}

export default Dashboard;
