$(document).ready(function() {

var endtime = '2016-12-31 23:59:59';
var newYearAudio = document.getElementById("newYearMpeg");

function playNewYear() {
  newYearAudio.play();
}

  function getTimeRemaining(endtime){

    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  //
  // return {
  //   'total': t,
  //   'days': days,
  //   'hours': hours,
  //   'minutes': minutes,
  //   'seconds': seconds
  // };
  var id;

  function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if(t.total<=0){
        clearInterval(timeinterval);
        daysSpan.innerHTML = ('0');
        hoursSpan.innerHTML = ('0');
        minutesSpan.innerHTML = ('0');
        secondsSpan.innerHTML = ('0');
        $('#newYear').html('<h1>Happy New Year!!</h1><h2>See you soon in 2017!</h2>')
        playNewYear();
      }
    },1000);
  }

  initializeClock('clockDiv', endtime);
});
