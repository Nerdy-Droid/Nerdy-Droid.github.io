'use strict';
(function () {
const url = "https://boardgamegeek.com/xmlapi/collection/"

getName('hengst2404')
  $('#getName').on('click', function (e) {
    getName($('#bggID').val())
  })

    
  function getName (userID) {
    emptyList()
    $.ajax({
      url: url + userID,
      dataType: "xml",
      success: function (xml) {
         console.log(xml)
        $('#userName').html(userID);
         
         $(xml).find('items').each(function(){
            var total = $(this).attr('totalitems');
           $('#total').html(total);
         
        $(xml).find('item').each(function(){
            var gameName = $(this).find('name').text();
            var image = $(this).find('thumbnail').val();
            var gameID = $(this).find('objectid').val();
            var gamearr = new Array();
            
            function count(gameName, pattern) {
                var result = [];
                for (i = 0; i < books.length; i++) {
                  var record = {title: books[i].title, score: 0};
                  var index = -1;
                  do {
                    index = books[i].title.toLowerCase().indexOf(pattern.toLowerCase(), index + 1);
                    if (index >= 0) {
                      record.score = record.score + 1
                    }
                 } while (index >= 0)
                 if (record.score > 0) {
                    result.push(record);
                 }    
               }
               return result;
             }
            console.log(gameName)
            $("#table").append("<tr><td>" + gameName + "</td><td>" + gameID + "</td></tr>");
            //$("#picture").append('<img id="image" src="" alt="No image loaded"/><br/>');
            //document.getElementById('image').src = 'image';
    });
        });
        
               
    },

      error: function () {
        updateUIError()
      }
    })
  }

  function updateUIError () {
    alert('There was an error retrieving BGG data :(')
  }
})()

function emptyList() {
    $(".list").remove();
    
}

function getGameInfo() {

    //for loop for URL and IDs: "https://www.boardgamegeek.com/xmlapi/boardgame/"+ID+
}