/**
 * Created by Yashpal on 10/20/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App.jsx';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
const store = createStore(allReducers);
import Employee from './containers/employee'
import Department from './containers/department'
import home from './containers/home';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" components={App}>
                <IndexRoute component={home}/>
                <Route path="/home" component={home}/>
                <Route path="/employee" component={Employee}/>
                <Route path="/department" component={Department}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);


