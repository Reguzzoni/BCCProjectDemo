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
import MetamaskService from './MetamaskService';
import AdminPanel from './pages/AdminPanel';

function Routes() {
    const { token, setToken } = useToken();

    var service = new MetamaskService();

    console.log("Token value : ", token)
    if(!token) {
        console.log("Token login empty")
        return (
        <BrowserRouter basename='/'>
            <Route render={(props)=>(
                <LayoutLogin {...props}>
                    <Route path="/" component={() => <Login setToken={setToken}></Login>}/>
                </LayoutLogin>
            )}/>
        </BrowserRouter>
        )
    }
    console.log("Token login is not empty!!!")
    //<Login setToken={setToken}></Login>
    // else implicito

    if(token == "AuthenticatedTokenAdmin") {
        console.log("Admin entered")
        return (
            <BrowserRouter basename='/'>
                <Route render={(props)=>(
                    <LayoutMenu 
                        {...props} 
                        inputIsAdmin={token == "AuthenticatedTokenAdmin"}>
                        <Switch>
                            <Route path="/" exact component={Dashboard}/>
                            <Route path="/DataDetails" component={DataDetails}/>
                            <Route path="/NetworkContracts" component={NetworkContracts}/>
                            <Route path="/Wallet" component={Wallet}/>
                            <Route path="/Admin" component={AdminPanel}/>
                            <Route path="/Logout" component={() => <Logout setToken={setToken}></Logout>}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </LayoutMenu>
                )}/>
            </BrowserRouter>
        )
    } else {
        return (
        <BrowserRouter basename='/'>
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
}

export default Routes;
