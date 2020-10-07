
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
     $('#tweet-container').prepend(appendedTweet);
   }
 }

 const loadTweets = () => {
  $.ajax({
    url: "/tweets/",
    method: "GET"
  })
  .then(tweets => {
    renderTweets(tweets)
  })
  .catch(err => console.log(err))
 }

