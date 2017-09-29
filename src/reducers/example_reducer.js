import { List, Map } from 'immutable'
import * as types from '../actions/types'

function exampleAction(state) {
  let counterValue = state.get('example_counter', 0) + 1
  console.log("Incrementing counter: " + counterValue)
  return state.set('example_counter', counterValue)
}

export default function(state = Map(), action) {
  switch (action.type) {
    case types.EXAMPLE_ACTION:
      return exampleAction(state)
  }
  return state
}
