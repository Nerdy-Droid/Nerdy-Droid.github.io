function getGames (games) {
    $("#allGames").hide();
    $("#user").show();
    $(document).ready(function() {
    $('#user').DataTable({
        data: games,
        columns: [
            {data : "names",
                "render": function(data, type, row, meta){
               if(type === 'display'){
                   data = '<a href="' + "bgg_url" + '">' + data + '</a>';
               }
               
               return data;
            }
        
        },
            {data : "min_players"},
            {data : "max_players"},
            {data : "avg_time"},
            {data : "year"},
            {data : "geek_rating"},
            {data : "mechanic"},
            {data : "category"},
            {data : "weight"}
           
        ]
    });
    });
    }