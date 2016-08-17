var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function(){
  $('#input-form').submit(function(event){
    event.preventDefault();
    var alarm = $("#alarm").val();
    console.log(alarm);
    var clockTime = moment().format('kk:mm');
    console.log(clockTime);
    if(alarm === clockTime){
      alert("Its time to get up!!");
    }
  });
});

$('document').ready(function(){
  $("#time").text(moment());
});

function update() {
  $('#clock').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1000);
