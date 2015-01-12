var refreshStream = function() {
  var $stream = $('.stream');
  var fragment = document.createDocumentFragment();
  var index = streams.home.length - 1;

  while (index >= 0) {
    var tweet = streams.home[index];
    var $tweet = $('<li></li>');
    $tweet.html('<span class="username">' +'@' + tweet.user + '</span>' +
      ' *' + moment(tweet.created_at).fromNow() +
      '<br>' + tweet.message);
    $tweet.appendTo(fragment);
    index -= 1;
  }

  $stream.html(fragment);
  $('.username').click(usernameSelected);
};

var usernameSelected = function(event) {
  var username = $(event.target).text().slice(1);
  var user = streams.users[username];
  var $user = $('.user');
  var fragment = document.createDocumentFragment();
  var index = user.length - 1;

  while (index >= 0) {
    var tweet = user[index];
    var $tweet = $('<li></li>');
    $tweet.html('<span class="username">' +'@' + tweet.user + '</span>' +
      ' *' + moment(tweet.created_at).fromNow() +
      '<br>' + tweet.message);
    $tweet.appendTo(fragment);
    index -= 1;
  }

  $user.html(fragment);
};

$(document).ready(function(){
  refreshStream();
  var streamInterval = setInterval(refreshStream, 1000*5);
});
