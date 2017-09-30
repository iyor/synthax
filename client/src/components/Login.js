import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    console.log("Rendering login")
    return (
      <div>
        <a href="/login">LOGIN</a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, ActionCreators)(Login)
