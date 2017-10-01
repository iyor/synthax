import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'
import AdaptiveSynth from '../lib/synthesizer'

export default class Synth extends Component {

  componentDidMount() {
        this.updateCanvas();
  }

  updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');
      
  }

  render() {
      return (
          <canvas ref="canvas" width={1000} height={300}/>
      );
  }
}
