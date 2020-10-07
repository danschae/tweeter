/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = (tweet) => {
  let returnedTweet =  `<article class="tweet">
  <header class="tweet-header">
    <div class="user-info">
  <img src=${tweet.user.avatars}><br>
  <p>${tweet.user.name}</p><br>
  </div>
 <div class="handle">
  <p>${tweet.user.handle}</p><br>
</div>
</header>
<p class="tweeted-content">${tweet.content.text}</p><br>
<footer class="tweet-footer">
  <p>${new Date(tweet.created_at)}</p><br>
  <div class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
    </div>
    </footer>
  </article>`;
  return returnedTweet;
 }

 const renderTweets = (tweets) => {
   for (const tweet of tweets) {
    let appendedTweet = createTweetElement(tweet);
     $('#tweet-container').append(appendedTweet);
   }
 }

$(document).ready(function() {
  renderTweets(tweetData);
})


