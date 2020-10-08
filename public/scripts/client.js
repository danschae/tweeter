/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $("form").submit(function(event) {

    event.preventDefault();
    // input validation, if an error a message will be sent
    let inputtedTweet = $("#tweet-text").val();
    if (inputtedTweet === "") {
      $(".error").empty();
      $(".error").append(`<i class="fas fa-exclamation-triangle"></i>Error: Please make sure to not send empty tweets!!<i class="fas fa-exclamation-triangle"></i>`).hide().slideDown(1000);
      $("form").trigger("reset");
    } else if (inputtedTweet.length > 140) {
      $(".error").empty();
      $(".error").append(`<i class="fas fa-exclamation-triangle"></i>Error: Please make sure not to exceed the character limit!<i class="fas fa-exclamation-triangle"></i>`).hide().slideDown(1000);
    // the tweet will go as continue, the $("#tweet-text").keyup() method is used to reset the counter
    } else {
    $.ajax({
        url: "/tweets/",
        method: "POST",
        data: $(this).serialize()
      })
      .then(function (tweet) {
        $(".error").empty();
        renderTweets([tweet]);
        $("form").trigger("reset")
        $("#tweet-text").keyup();
      })
      .catch(error => console.log(error))
    }
  })
  // tweets are loaded onto the screen when the DOM is initialized
  loadTweets();
});