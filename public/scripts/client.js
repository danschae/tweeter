/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $( "form" ).submit(function(event) {

    event.preventDefault();

    let inputtedTweet = $("#tweet-text").val();
    if (inputtedTweet === "" || inputtedTweet.length > 140) {
      alert("errorrr!");
      $("form")[0].reset();
    } else {
    $.ajax({
      url: "/tweets/",
      method: "POST",
      data: $(this).serialize()
    })
    .then( function(tweet) {
      renderTweets([tweet])
      $("form").trigger("reset")
      $("#tweet-text").keyup();
    })
    .catch(error => console.log(error))
  }
  })

  loadTweets();

})



