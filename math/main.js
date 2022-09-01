$(document).ready(function(){
  $("#start").hide();
  $("#game").hide();
  $("#endresult").hide();
  $("#first,#second,#answer").hide();
  var three = 3;
  var right = 0;
  var wrong = 0;
  var countis = 60;
  countdown = setInterval(function(){
    three--;
    $(".count").text(three);
    if(three<0){
      clearInterval(countdown);
      $(".count").css("animation","none");
      $("#countdown").hide();}
  },1000);
  game();
   $("#go").click(function(){
  });//go !
  function game(){
    var answer = $("#useranswer").val();
    var ans = parseInt(answer);
    var number1 = Math.floor(Math.random()*100);
    var number2 = Math.floor(Math.random()*100);
    var result = number1 + number2;
    $("#first").text(number1);
    $("#second").text(number2);
    $("#answer").text(result);
    $("#need").text(number1+" + "+number2)
  };//game();
  setTimeout(function(){
    $("#game").show();
    countup = setInterval(function(){
    countis-=1;
    $("#countis").text(countis+":00");
    if(countis<=0){
     $(".endresult").html("Total Tries :"+(right+wrong)+"<br>Right: "+right+"<br>Wrong :"+wrong+"<br>right quota: "+(Math.floor((right*100)/(right+wrong)))+"%")
      clearInterval(countup);
      $("#countis").text("00:00");
      $("#html").hide();
      $("#endresult").show();
    }
  },1000);
  },4100);
  $('#useranswer').keypress(function (e) {
  if (e.which == 13) {
     var numb1 = $("#first").text();
    var numb2 = $("#second").text();
    var numb3 = $("#useranswer").val();
    var n1 = parseInt(numb1);
    var n2 = parseInt(numb2);
    var n3 = parseInt(numb3);
    var n4 = n1 + n2;
     if(n3==n4){
       right++;
     }
     else{
       wrong++;
     }
      game();
    $(this).val("");
  }//if
});//keypress
});