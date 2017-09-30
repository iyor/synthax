import * as types from '../actions/types';
import { List, Map, fromJS } from 'immutable'

/** The initial state; no tokens and no user info */
const initialState = Map(fromJS({
  downedKeys: List()
}))

export default function reduce(state = initialState, action) {
  switch (action.type) {

    case types.SYNTH_KEY_DOWN:
      var newKeys = state.get('downedKeys').push(action.keyCode)
      var newState = state.set('downedKeys', newKeys)
      return newState

    // set our loading property when the loading begins
    case types.SYNTH_KEY_UP:
      let idx = state.get('downedKeys').indexOf(action.keyCode)
      var newKeys = state.get('downedKeys').splice(idx, 1)
      var newState = state.set('downedKeys', newKeys)
      return newState

    default:
      return state;
  }
}
