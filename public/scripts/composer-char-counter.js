$(document).ready(function() {

  $("#tweet-text").keyup(function() {

    let countedChar = (140 - $(this).val().length);
    let displayedCounter = $(this).parent().find(".counter");
    displayedCounter.text(countedChar);
    // conditional statement to see if the counter is negative, then the counter will turn red
    if (countedChar < 1) {
      displayedCounter.addClass("counterRed");
    } else {
      displayedCounter.removeClass("counterRed");
    }

  });
});




