function getGames (games) {
$(document).ready(function() {
    $('#example_table').DataTable({
        //'deferRender': false,
        'ajax'       : {
          "type"   : "POST",
          "url"    : https://nerdy-droid.github.io/bggAPI.js,
          "dataSrc": function (games) {
            var return_data = new Array();
            for(var i=0;i< games.length; i++){
              return_data.push({
                'Name': games[i].names,
                'Cover'  : '<img src="' + json[i].image_url + '">',
                'Weight' : json[i].weight
              })
            }
            return return_data;
          }
        },
        "columns"    : [
          {'data': 'Cover'},
          {'data': 'Name'},
          {'data': 'Weight'}
        ]
});
});
}