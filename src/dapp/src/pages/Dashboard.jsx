import React from 'react';
import './dashboard.scss';
import Button from "react-bootstrap/Button";

function Dashboard(props) {
    console.log("Dashboard props", props);
    return (
        <div className="App">
            <h2 style={{
                textAlignVertical: "center",
                textAlign: "center",
                color: "rgba(238, 14, 14, 0.767)",
                fontSize: "50px",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
                }}>You're Welcome to BCC Studio Demo!
            </h2>
        </div>
    );
}

export default Dashboard;
