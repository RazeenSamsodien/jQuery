
$("h1").addClass("big-title margin-50");

$("button").text("Dont Click Me");

$("button").html("<em>Hey</em>");

$("h1").click(function() {
  $("h1").css("color", "purple");
});

//$("button").click(function() {
  //$("h1").css("color", "purple");
//});

$(document).keypress(function(event) {
  $("h1").text(event.key);
});

//$(document).on("mouseover", function() {
  //$("h1").css("color", "purple");
//});

$("button").click(function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
