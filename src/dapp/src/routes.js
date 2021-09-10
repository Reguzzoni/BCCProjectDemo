import React from "react";
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import Login from "./pages/Login";
import DataDetails from "./pages/DataDetails";
import NetworkContracts from "./pages/NetworkContracts";
import Wallet from "./pages/Wallet";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/Login" component={Login}/>
                        <Route path="/DataDetails" component={DataDetails}/>
                        <Route path="/NetworkContracts" component={NetworkContracts}/>
                        <Route path="/Wallet" component={Wallet}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;
