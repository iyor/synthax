import * as types from './types'

export function synthKeyDownAction(keyCode) {
  return { type: types.SYNTH_KEY_DOWN, keyCode };
}

export function synthKeyUpAction(keyCode) {
  return { type: types.SYNTH_KEY_UP, keyCode };
}
