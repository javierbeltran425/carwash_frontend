import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AdminSell from './AdminSell'
import AdminAdds from './AdminAdds'
import AdminServices from './AdminServices'
import AdminClients from './AdminClients'

function AdminRoutes() {
    return(
        <>
        <Router>
            <Switch>
                <Route exact path='/adds' component={AdminAdds}/>
                <Route exact path='/sells' component={AdminSell}/>
                <Route exact path='/clients' component={AdminClients}/>
                <Route exact path='/admin-services' component={AdminServices}/>
                {/*
                */}
            </Switch>
        </Router>
        </>
    )
}

export default AdminRoutes