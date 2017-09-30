import { combineReducers } from 'redux'
import example from './example_reducer'
import spotify from './spotify_reducer'
import synth from './synth_reducer'

export default combineReducers({
  example,
  spotify,
  synth
})
