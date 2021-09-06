import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Orders from './Orders'
import Services from './Services'
import Vehicles from './Vehicles'

function UserRoutes() {
    return(
        <>
        <Router>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/orders' component={Orders}/>
                <Route exact path='/services' component={Services}/>
                <Route exact path='/vehicles' component={Vehicles}/>
            </Switch>
        </Router>
        </>
    )
}

export default UserRoutes