/**
 * PrimeReact import
 */
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css'
 
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login'
import Register from './Pages/Register'
import UserRoutes from './Pages/UserPages/UserRoutes';
import AdminRoutes from './Pages/AdminPages/AdminRouter'


function App() {
  return (
    <>
    <React.Fragment>
      <Router>
          <UserRoutes/>
          <AdminRoutes/>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </Router>
    </React.Fragment>
    </>
  );
}

export default App;
