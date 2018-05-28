'use strict';
  const url = "https://boardgamegeek.com/xmlapi/collection/"

function getName (userID) {
  
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
          console.log(txt)

            var arr = new Array()
            $.getJSON("bggData.json") 
            .done(function(json) {
            $.each(json.data, function(j, items) {	
                arr.push(json.data[j])
            })
            console.log(arr)
            var userGames = new Array()
            var missingGames = new Array()
            for (var i=0; i < txt.length; i++) {
            for(var j=0; j < arr.length; j++) {
                if (txt[i] === json.data[j].game_id) {
                  userGames.push(json.data[j]);
                      
                } 
                }
                }
        console.log(userGames);
          console.log(userGames[0].names);
          getGames(userGames);	
        })
                 
      }
    }  