export default function sketch (p) {
  var freq = 0;
  var phase = 0

  p.setup = function () {
    p.createCanvas(p.windowWidth, 400);
    p.strokeWeight(6)
    p.background(0, 0, 0, 0);
    p.stroke(255);
  };
  
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.synth){
      var total = 0
      for (var i = 0; i<4; i++) {
        total = total + props.synth.getInstrument().voices[i].envelope.value * 2000
      }
      freq = total/4.0 * Math.PI / 180
      //freq = props.synth.frequency * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.clear()
    p.background(0,0,0,0)
    p.stroke(255)

    for (var i = 0; i < p.width; i++) {
      //scaling kickEnvelope value by 200 

      //since default is 0-1
      //var kickValue = kickEnvelope.value * 200;
      var kickValue = 29
      //multiplying this value to scale the sine wave 
      //depending on x position
      var yDot = Math.sin((i / 60 ) + phase) * freq;
      p.point(i, p.height/2 + yDot);
      phase += 1;
    }
  };
};
