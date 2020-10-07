/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $( "form" ).submit(event, function() {
    event.preventDefault();
    $.ajax({
      url: "/tweets/",
      type: "POST",
      data: $(this).serialize()
    })
  })
  loadTweets();
})


