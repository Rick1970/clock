var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function(){
  $('').submit(function(event){
    event.preventDefault();
    var alarm = $("#").val();
  });
});

$('document').ready(function(){
  $("#time").text(moment());
});
