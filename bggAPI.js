'use strict';
(function () {
const url = "https://boardgamegeek.com/xmlapi/collection/"

getName('aebrey')
  $('#getID').on('click', function (e) {
    getName($('#bggID').val())
  })
   
  function getName (userID) {
    var id = userID
    var string = url + userID     
    var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                 myFunction(this);
             }
         };
         xhttp.open("GET", string, true);
         xhttp.send();
         
         function myFunction(xml) {
            
             var x, i, xmlDoc, txt;
             xmlDoc = xml.responseXML;
             txt = new Array;
             x = xmlDoc.getElementsByTagName('item');
             for (i = 0; i < x.length; i++) { 
                 txt.push(parseInt(x[i].getAttribute('objectid')));
             }

      $.ajax({
      type: "GET",
      url: "bggData.json",
      success: function(result){
        var data = result.game_id
        var id = new Array();
                
        for (i=0; i < txt.length; i++) {
            console.log(txt[i])
              for (j=0; j < data.length; j++) {
                   if (txt[i] === data[j]) {
                    id.push(data[j])
                               
                }
            }
            console.log(id)
                 }
                }
        });
      }
    }

 })()

