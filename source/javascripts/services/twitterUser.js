'use strict';

angular.module('sif')
.service('twitterUser', function(urls, $http, FBService) {

  // var withTokens = function(obj) {
    // obj.access_token_key = FBService.currentUser.accessToken;
    // obj.access_token_secret = FBService.currentUser.accessTokenSecret;
  //   return obj;
  // };
  var withTokens = function(obj) {
    return obj;
  };

  this.search = function(words) {
    var data = withTokens({ words: words });
    return $http.post(urls.apiUrl + "/search", data);
  };

  // this.sendTweet = function(tweet) {
  //   var data = withTokens({ tweet: tweet });
  //   return $http.post(urls.apiUrl + "/tweet", data);
  // };

  // this.follow = function(screenName) {
  //   var data = withTokens({ screen_name: screenName });
  //   return $http.post(urls.apiUrl + "/follow", data);
  // };
  //
  // this.ignore = function(screenName) {
  //   var data = withTokens({ screen_name: screenName });
  //   return $http.post(urls.apiUrl + "/ignore", data);
  // };
  //
  // this.IgnoreList = function() {
  //   return $http.get(urls.apiUrl + "/ignore");
  // };

});
