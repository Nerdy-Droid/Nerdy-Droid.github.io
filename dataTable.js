function getGames (games) {
    $( "#user" ).show();
    $(document).ready(function() {
    $('#user').DataTable({
        data: games,
        columns: [
            {title : "Rank"},
            {title : "BGG URL",
                    "render": funcion (data,type,row,meta) {
                        for (i=0; i < games.length; i++) {
                        if (type === 'display') {
                        data = '<a href="' + data + '">'+ games[i].names +  '</a>';
                        }
                }
                return data;
              }
            },
            {title : "BGG ID"},
            {title : "Name"},
            {title : "Min Player"},
            {title : "Max Player"},
            {title : "Max Time"},
            {title : "Min Time"},
            {title : "Avg Time"},
            {title : "Year"},
            {title : "Geek Rating"},
            {title : "Game Image"},
            {title : "Age"},
            {title : "Mechanic"},
            {title : "Category"},
            {title : "Designer"},
            {title : "Weight"}
           
        ]
    });
    });
    }