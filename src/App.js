import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login'
import Register from './Pages/Register'
import UserRoutes from './Pages/UserPages/UserRoutes';


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <UserRoutes/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
