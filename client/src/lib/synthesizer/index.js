import Tone from 'tone'
import keymap from './key_map'

class AdaptiveSynth {

  constructor() {
    this.instrument = new Tone.PolySynth(4,Tone.Synth).toMaster()
    this.instrument.set("detune", -1200)
    this.notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
    this.octave = 4
  }

  getInstrument() {
    return this.instrument 
  }

  setKey(keyNr) {
    this.notes = []
    let steps = [0, 2, 2, 1, 2, 2, 2, 1]
    let alphabet = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    let idx = 0
    for (var step = 0; step < steps.length; step++) {
      idx = idx + step
      this.notes.push(alphabet[idx%12] + '4')
    }
  }
  
  playTone(keyCode) {
    let tone = keymap[String.fromCharCode(keyCode).toLowerCase()]
		console.log("Playing the tone")
    this.getInstrument().triggerAttack(this.notes[tone])
  }

  stopTone(keyCode) {
    let tone = keymap[String.fromCharCode(keyCode).toLowerCase()]
    this.getInstrument().triggerRelease(this.notes[tone])
	}
}

export default new AdaptiveSynth()
