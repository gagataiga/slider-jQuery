// Add your JS here
$(window).on("load", function () {

  // image length 
  const imgCount = $("#slider ul li").length;
  // image width size 
  const imgWidth = $("#slider ul li:first img").first().width();
  const totalWidth = (imgWidth * imgCount) + "px";

  let leftPosition = 0;
  let counter = 0;

  $("#slider ul").css("width", totalWidth);

  // click next button action
  $("#next").click(function () {
    // current image count
    counter++;
    if (counter == imgCount) {
      // To add clone image after last image
      $("#slider ul").clone().appendTo("#slider");
      $("#slider ul").last().css("left", imgWidth + "px");

      leftPosition = `-${totalWidth}`;


      $("#slider ul").last().animate({ left: 0 }, 700, "easeInQuad");

      $("#slider ul").first().animate({ left: leftPosition }, 700, "easeInQuad", function () {
        // remove the old images after adding the new clone images
        $("#slider ul").first().remove();
      });

      counter = 0

    } else {
      leftPosition = `-${counter * imgWidth}px`;
      $('#slider ul').animate({
        left: leftPosition
      }, 500, "easeInQuad");
    }

  });

  $("#previous").click(function () {
    counter--;
    if (counter < 0) {
      counter = imgCount - 1
      $("#slider ul").clone().appendTo("#slider");
      $("#slider ul").last().css("left", `-${totalWidth}`);
      
      leftPosition = `-${counter * imgWidth}px`;

      $("#slider ul").last().animate({ left: leftPosition }, 700, "easeInQuad");

      $("#slider ul").first().animate({ left: imgWidth + "px" }, 700, "easeInQuad", function () {
        // remove the old images after adding the new clone images
        $("#slider ul").first().remove();
      });
    }
    else {
      leftPosition = `-${counter * imgWidth}px`;
      $('#slider ul').animate({
        left: leftPosition
      }, 500, "easeInQuad")
      
    }

  });


});