import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div>
        <Link to="/synth" >Click to login</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    exampleCounter: state.example.get('example_counter') 
  }
}

export default connect(mapStateToProps, ActionCreators)(Login)
