function getGames (games) {
$(document).ready(function() {
    $('#example').DataTable({
        data: games,
        columns: [
            {title : "Name"}
        ]
    });
   });
}