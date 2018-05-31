function getGameInfo(id) {
    for (var i =0; i < id.length; i++) {
    url = "https://boardgamegeek.com/xmlapi/collection/"
    stat = "?&stats"
    gameID = id[i]
    api = url + gameID + stat
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", api, true);
    xhttp.send();

    function myFunction(xml) {
        gameURL = "https://boardgamegeek.com/boardgame/"
        gameArr = new Array();
        var x, i, xmlDoc, txt;
        xmlDoc = xml.responseXML;
        txt = new Array;
        gameID = xmlDoc.getElementsByTagName('boardgame').getAttribute('objectid');
        gameID = parseInt(gameID);
        minPlay = xmlDoc.getElementsByTagName('minplayers');
        maxPlay = xmlDoc.getElementsByTagName('maxplayers');
        year = xmlDoc.getElementsByTagName('yearpublished');
        time = xmlDoc.getElementsByTagName('playingtime');
        mechanic = xmlDoc.getElementsByTagName('boardgamemechanic');
        category = xmlDoc.getElementsByTagName('boardgamecategory');
        weight = xmlDoc.getElementsByTagName('averageweight');
        rate = xmlDoc.getElementsByTagName('average');
        rank = xmlDoc.getElementsByTagName('rank').getAttribute('value')
        name = xmlDoc.getElementsByTagName('name');
        url = gameURL + gameID + name
        var stats = {
            name: name,
            ID: gameID,
            url: url,
            minplay: minPlay,
            maxplay: maxPlay,
            year: year,
            Avgtime: time,
            mechanic: mechanic,
            category: category,
            weight: weight,
            rate: rate,
            rank: rank,
            url: url
        };


    }
    gameArr.push(stats)
    console.log(stats)
}
}