var clip1 = new Audio('se2.mp3');
var clip2 = new Audio('se3.mp3');
var clip3 = new Audio('se4.mp3');
var clip4 = new Audio('se5.mp3');
var clip5 = new Audio('se6.mp3');
var clip6 = new Audio('se7.mp3');
var special = new Audio('special.mp3');

var clips = [clip1, special];

clips.volume = 0.2;

function nice_function(){
    var shuffledClip = Math.floor(Math.random() * 2);
    var randomClip = clips[shuffledClip];
    console.log(randomClip)
    randomClip.play();
}
