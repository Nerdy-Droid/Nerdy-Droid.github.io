var request = require('request');
var cheerio = require('cheerio');

const web = "https://boardgamegeek.com/browse/boardgame/page/"
var arr = new Array();
   
request('https://boardgamegeek.com/browse/boardgame/page/1', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
     $('span.smallerfont.dull').each(function(i, element){
      // Select the <a> hyperlink
      var url = $(this).prev().attr('href');
      //Parse URL to get the game ID
      var url = url.match(/\d/g);
      var results = new Array;
      results.push(url)
      console.log(url)
});
 
getGameInfo(results)
 }
 });






