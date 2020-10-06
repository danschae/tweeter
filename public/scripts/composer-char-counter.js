$(document).ready(function() {

  $("#tweet-text").keyup(function() {

    let countedChar = (140 - $(this).val().length);
    let displayedCounter = $(this).parent().find(".counter");
    displayedCounter.text(countedChar);

    if (countedChar < 1) {
      displayedCounter.addClass("counterRed");
    } else {
      displayedCounter.removeClass("counterRed");
    };

  });
});




