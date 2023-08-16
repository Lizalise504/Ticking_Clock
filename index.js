var seconds = 0;
var minutes = 0;
var hours = 0;
var time = new Date();

setInterval( function() {
    var time = new Date();
    
      // your code here
    seconds = time.getSeconds() * 6;
    minutes = time.getMinutes() * 6;
    hours = time.getHours() * 30 + Math.round(minutes / 12);
    document.querySelector("#seconds").style.transform = "rotate(" + seconds + "deg)";
    document.querySelector("#minutes").style.transform = "rotate(" + minutes + "deg)";
    document.querySelector("#hours").style.transform = "rotate(" + hours + "deg)";
}, 1000);
