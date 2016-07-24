$(document).ready(function() {
    console.log( "ready!" );
//
// PLEASE NOTE!
// for this assignment, I had to comment out each line in order to determine if the jQuery call worked.  With that, running this all at once may not provide the results you were looking for :)


// <h1>secret box!</h1>
$('#secretBox').css("background-color", "white");

//Find all child divs of the first row. Set the class for each div to boxType3.

$("#row1 div").addClass("boxType3");


//Make the last box in the last row disappear.
$("#row4 div:last-child").css("display","none");


//display all red boxes as white
$(".boxType1").css("background", "white");

//get first two divs from 2nd row - remove all styling
$("#row2 div:lt(2)").removeClass("boxType2 boxType3");

//get all divs inside the container that are not secret or row divs.  set the width to 2pixels
$(".box:not(#secretBox)").css("width", "2px");


// Add an on click handler to the container div. Console log the x and y position of the click.
$("body").click(function(event){
  var offset = $(this).offset();
  var relativeX = (event.pageX - offset.left);
  var relativeY = (event.pageY - offset.top);

  console.log("X: " + relativeX + "  Y: " + relativeY);

});

// Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!

$('.boxType1').html('<a href="">Galvanize</a>');

 $(".boxType1").click(function(event){
  alert("None Shall Pass!");
});


// For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.
$(".box").click(function(){
   $(this).append('<img id="theImage" src="https://s-media-cache-ak0.pinimg.com/236x/05/46/63/0546638b58d2d396f97ad69177f104fa.jpg"/>');
});

$("box img").click(function(){
   $(this).remove();
});




// Write a click handler on the container div. The click handler should turn the container background to black and the background of the original div that was clicked to white. If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.

$(document).click(function(event){
   $("#container").css("background", "black");
});

$("#container div div ").click(function(){
   $(this).css.("background", "white");
});

});
