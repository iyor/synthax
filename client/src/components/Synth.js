import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'
import { Link } from 'react-router-dom'

class Synth extends Component {
  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const {dispatch, params} = this.props.match
    const {accessToken, refreshToken} = params
    console.log(accessToken)
    this.props.setTokens({accessToken, refreshToken})
    this.props.setMe()
  }

  render() {
    console.log("Rendering synth")
    console.log("This is the user name")
    console.log(this.props.accessToken)
    return (
      <div>
        <h2>Hi {this.props.displayName}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    accessToken: state.spotify.accessToken,
    displayName: state.spotify.user.display_name
  }
}

export default connect(mapStateToProps, ActionCreators)(Synth)
