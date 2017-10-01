import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    console.log("Rendering login")
    return (
      <div>
        <h1>JAM ALONG TO YOUR FAVORITE SONG!</h1>
        <div id="loginline"></div>
        <a id="login" href="/login">TRY IT</a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, ActionCreators)(Login)
