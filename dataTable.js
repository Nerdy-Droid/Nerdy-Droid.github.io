function getGames (games) {
    $( "#user" ).show();
    $(document).ready(function() {
    $('#user').DataTable({
        data: games,
        columns: [
            {data : "names"},
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