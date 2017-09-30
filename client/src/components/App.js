import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'

class App extends Component {
  render() {
    return (
      <div>
        <h1>DA APP</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    exampleCounter: state.example.get('example_counter') 
  }
}

export default connect(mapStateToProps, ActionCreators)(App)
