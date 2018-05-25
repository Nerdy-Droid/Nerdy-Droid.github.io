'use strict';
(function () {
const url = "https://boardgamegeek.com/xmlapi/collection/"

getName('hengst2404')
  $('#getName').on('click', function (e) {
    getName($('#bggID').val())
  })

    
  function getName (userID) {
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