import React, { Component } from 'react'

export default class ErrorComponent extends Component {
  render() {
    // Injected via react router
    const {children} = this.props
    return (
      <div>
        <h1> In error! </h1>
        {children}
      </div>
    )
  }
}
