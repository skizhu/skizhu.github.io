var clip1 = new Audio('se2.mp3');
var special = new Audio('special.mp3');

var clips = [clip1, special];

clips.volume = 0.2;

function nice_function(){
    var shuffledClip = Math.floor(Math.random() * 2);
    var randomClip = clips[shuffledClip];
    console.log(randomClip)
    randomClip.play();
}
