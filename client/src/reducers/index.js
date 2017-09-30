import { combineReducers } from 'redux'
import example from './example_reducer'
import spotify from './spotify_reducer'

export default combineReducers({
  example,
  spotify
})
