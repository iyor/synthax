import React from 'react'
import {render} from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './components/App'
import Login from './components/Login'
import Synth from './components/Synth'
import ErrorComponent from './components/Error'
import reducers from './reducers/'
import styles from './styles/main.less';
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Router, HashHistory, Route, Switch } from 'react-router-dom'

'use strict';

const history = createHistory()

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore({})

render(
  <Provider store = {store}>
    <Router history = { history }>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/synth/:accessToken/:refreshToken" component={Synth} />
	<Route path="/error/:errorMsg" component={ErrorComponent} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('content')
)
