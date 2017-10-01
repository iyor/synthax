import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'

class Keys extends Component {

  constructor(props) {
    super(props) 
    this.keys = ['S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  }

  render() {
    return (
      <div className="keyboard">
        {this.keys.map(k => {
          if (this.props.downedKeys.includes(k.charCodeAt(0))) {
            return (<div key={k} className="keyActive">{k}</div>)
          } else {
            return (<div key={k} className="key">{k}</div>)
          }})}
       
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    downedKeys: state.synth.get('downedKeys')
  }
}

export default connect(mapStateToProps, ActionCreators)(Keys)
