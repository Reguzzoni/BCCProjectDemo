import React, { useState } from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import Login from "./pages/Login";
import DataDetails from "./pages/DataDetails";
import NetworkContracts from "./pages/NetworkContracts";
import Wallet from "./pages/Wallet";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import LayoutLogin from "./components/LayoutLogin";
import LayoutMenu from "./components/LayoutMenu";
import useToken from './useToken';

function Routes() {
    const { token, setToken } = useToken();

    if(!token) {
        console.log("Token login empty")
        return (
        <BrowserRouter>
            <Route render={(props)=>(
                <LayoutLogin {...props}>
                    <Route path="/login" component={() => <Login setToken={setToken}></Login>}/>
                </LayoutLogin>
            )}/>
        </BrowserRouter>
        )
    }
    console.log("Token login is not empty!!!")
    //<Login setToken={setToken}></Login>
    // else implicito
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <LayoutMenu {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/DataDetails" component={DataDetails}/>
                        <Route path="/NetworkContracts" component={NetworkContracts}/>
                        <Route path="/Wallet" component={Wallet}/>
                        <Route path="/Logout" component={() => <Logout setToken={setToken}></Logout>}/>
                        <Route component={NotFound}/>
                    </Switch>
                </LayoutMenu>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;
