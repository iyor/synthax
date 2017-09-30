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
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { IndexRoute, Route, Switch } from 'react-router'

'use strict';

const history = createHistory()

const reduxRouterMiddleware = routerMiddleware(history)

const reducer = combineReducers({
  state: reducers,
  router: routerReducer
})

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      reduxRouterMiddleware
    )
  )
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({})

render(
  <Provider store = {store}>
    <ConnectedRouter history = { history }>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/synth/:accessToken/:refreshToken" component={Synth} />
				<Route path="/error/:errorMsg" component={ErrorComponent} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('content')
)
