const url = "https://boardgamegeek.com/xmlapi/collection/"

 $('#getID').on('click', function (e) {
    getName($('#bggID').val())
  })
   
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
      }
    }

