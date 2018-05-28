function getGames (games) {
    $(document).ready(function() {
    $('#example').DataTable({
        data: games,
        columns: [
            {title : "Rank"},
            {title : "BGG URL"},
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