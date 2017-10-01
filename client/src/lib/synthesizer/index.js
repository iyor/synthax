import Tone from 'tone'
import keymap from './key_map'

class AdaptiveSynth {

  constructor() {
    this.instrument = new Tone.PolySynth(4,Tone.Synth).toMaster()
    this.instrument.set("detune", -1200)
    this.instrument.volume.value = -6
    this.notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
    this.startOctave = 4
  }

  getInstrument() {
    return this.instrument 
  }

  setKey(keyNr, modality) {
    this.notes = []
    let steps = []
    if (modality == 1)
      steps = [0, 2, 2, 1, 2, 2, 2, 1]
    else
      steps = [0, 2, 1, 2, 2, 1, 2, 2]

    let alphabet = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    let idx = keyNr
    for (var step = 0; step < steps.length; step++) {
      idx = idx + steps[step]
      let octave = this.startOctave
      if (idx >= 12)
	octave++
      this.notes.push(alphabet[idx%12] + octave)
    }
  }
  
  playTone(keyCode) {
    let tone = keymap[String.fromCharCode(keyCode).toLowerCase()]
    this.getInstrument().triggerAttack(this.notes[tone])
  }

  stopTone(keyCode) {
    let tone = keymap[String.fromCharCode(keyCode).toLowerCase()]
    this.getInstrument().triggerRelease(this.notes[tone])
  }

  adapt(currentTrack) {
    console.log(currentTrack)
    this.setKey(currentTrack.key, currentTrack.mode)
    this.instrument.volume.value = currentTrack.loudness - 4
    this.instrument.set({
      "envelope" : {
	"attack" : currentTrack.energy*currentTrack.energy*currentTrack.energy,
	"decay"  : 0 ,
	"sustain"  : 1 ,
	"release"  : 1
      }
    });
    if (currentTrack.energy > 0.5){
      this.instrument.set({
        "oscillator":{
          "type": "triangle"
        }
      })
    }
    if (currentTrack.speechiness > 0.27) {
      this.instrument.set({
	"detune": -2400,
	"envelope": {
	  "attack": 0.01
	}
      })
    }
    if (currentTrack.acousticness > 0.3) {
      this.instrument
      this.instrument.set({
	"oscillator": {
	  "type": "square"
	},
	"envelope": {
	  "attack": 0.001,
	  "release": 0.2,
	} 
      })
      this.instrument.volume.value = -16
    }
    console.log(currentTrack.energy)
    if (currentTrack.energy > 0.8) {
      console.log("HIGH ENERGY")
      this.instrument = new Tone.PolySynth(4, Tone.FMSynth).toMaster()
      var pingPong = new Tone.PingPongDelay("8n", 0.1).toMaster();
      this.instrument.connect(pingPong);
    }

    console.log("INSTRUMENTNENTNETNNT")
    console.log(this.instrument)
    //let lfo = new Tone.LFO("4n", 400, 4000);
    //lfo.connect(this.instrument.frequency);

  }
}

export default new AdaptiveSynth()
