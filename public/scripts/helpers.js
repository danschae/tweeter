//this function is used to prevent hackers from inputting html in the text area
const escape = (str) => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML
}


const createTweetElement = (tweet) => {
  let returnedTweet = $(`<article class="tweet">
  <header class="tweet-header">
    <div class="user-info">
  <img src=${tweet.user.avatars}><br>
  <p>${tweet.user.name}</p><br>
  </div>
 <div class="handle">
  <p>${tweet.user.handle}</p><br>
</div>
</header>
<p class="tweeted-content">${escape(tweet.content.text)}</p><br>
<footer class="tweet-footer">
  <p>${moment(tweet.created_at).fromNow()}</p><br>
  <div class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
    </div>
    </footer>
  </article>`);
  return returnedTweet;
}

// the important thing to note with this function is that tweets are prepended, not appended, this is important
// as otherwise old tweets will show up on the page first
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