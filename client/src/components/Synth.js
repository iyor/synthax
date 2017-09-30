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
    this.props.setCurrentSong()
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    console.log("Handling key press")
  }

  render() {
    console.log("Rendering synth")
    return (
      <div>
        <h2>Now Playing: {this.props.currentTrackName} - {this.props.currentTrackArtist}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    accessToken: state.spotify.accessToken,
    displayName: state.spotify.user.display_name,
    currentTrackUri: state.spotify.currentTrack.uri,
    currentTrackName: state.spotify.currentTrack.name,
    currentTrackArtist: state.spotify.currentTrack.artist
  }
}

export default connect(mapStateToProps, ActionCreators)(Synth)
