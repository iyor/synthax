import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'
import { Link } from 'react-router-dom'

class Synth extends Component {
  render() {
    console.log("Rendering synth")
    return (
      <div>
        <h2>In the synth</h2>
      </div>
    )
  }
}

function mapStateToProps(reducer) {
  return {
    exampleCounter: reducer.state.example.get('example_counter') 
  }
}

export default connect(mapStateToProps, ActionCreators)(Synth)
