/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $( "form" ).submit(function(event) {

    event.preventDefault();

    let inputtedTweet = $("#tweet-text").val();
    if (inputtedTweet === "") {
      $(".error").empty();
      $(".error").append(`<i class="fas fa-exclamation-triangle"></i>Error: Please make sure to not send empty tweets!!<br> <i class="fas fa-exclamation-triangle"></i>`).hide().slideDown(1000)
      $("form")[0].reset();
    }
    if (inputtedTweet.length > 140) {
      $(".error").empty();
      $(".error").append(`<i class="fas fa-exclamation-triangle"></i>Error: Please make sure not to exceed the character limit!<br> <i class="fas fa-exclamation-triangle"></i>`).hide().slideDown(1000);
      $("form")[0].reset();
    }

     else {
      $.ajax({
        url: "/tweets/",
        method: "POST",
        data: $(this).serialize()
      })
      .then( function(tweet) {
        $(".error").empty();
        renderTweets([tweet])
        $("form").trigger("reset")
        $("#tweet-text").keyup();
      })
    .catch(error => console.log(error))
    }
  })

  loadTweets();

})



