import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { userActions } from '../_actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
            
        });
    }

    render() {
        const { alert,auth } = this.props;
        return (
         
                    <div className="col-sm-12">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} auth={auth}/>
                                <Route path="/login" component={LoginPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
        );
    }
}

function mapState(state) {
    debugger;
    const { alert } = state;
   const auth= state.authentication;
    return { alert,auth };
}

const actionCreators = {
    clearAlerts: alertActions.clear,
    login: userActions.login
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };