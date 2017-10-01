export default function sketch (p) {
  var freq = 0;
  var phase = 0

  p.setup = function () {
    p.createCanvas(p.windowWidth, 400);
    p.strokeWeight(10)
    p.background(0, 0, 0, 0);
    p.stroke(25);
  };
  
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.synth){
      //freq = props.synth.frequency * Math.PI / 180;
      freq = props.synth.getInstrument().voices[0].frequency.value
    }
  };

  p.draw = function () {

    p.strokeWeight(10) 
    p.stroke(25)
    for (var i = 0; i < p.width; i++) {
      //scaling kickEnvelope value by 200 

      //since default is 0-1
      //var kickValue = kickEnvelope.value * 200;
      var kickValue = 29
      //multiplying this value to scale the sine wave 
      //depending on x position
      var yDot = Math.sin((i / 60 * freq) + phase) * 50;
      p.point(i, p.height/2 + yDot);
    }
  };
};
