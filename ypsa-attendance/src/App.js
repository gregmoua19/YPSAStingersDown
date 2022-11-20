import React from "react"
import Topbar from "./components/topbar/Topbar"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//npm install react-router-dom@5

import Dashboard from "./pages/dashboard/Dashboard"
import Table from "./pages/table/Table"
import Login from "./pages/login/Login.js"
import AbsentForm from "./pages/form/AbsentForm.js"
import EarlyDismissal from "./pages/form/EarlyDismissal.js";

function App() {
  return (
    <div className = "App">
      <Router>
        <Switch>
            <Route path='/' compoent={Login} exact>
                <Login />
            </Route>
            <div>
                <Topbar />
                <Route path='/Dashboard' compoent={Dashboard} exact>
                    <Dashboard />
                </Route>
                <Route path='/Table' compoent={Table} exact>
                    <Table />
                </Route>
                <Route path='/Form/AbsenceForm' compoent={AbsentForm} exact>
                    <AbsentForm />
                </Route>
                <Route path='/Form/EarlyDismissal' compoent={EarlyDismissal} exact>
                  <EarlyDismissal />
                </Route>
                
            </div>

        </Switch>
      </Router>
    </div>
    
      
  )
}

export default App
