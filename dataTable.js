function getGames (games) {
$(document).ready(function() {
    $('#example').DataTable({
        data: games,
        columns: [
        {title : "Name"},
        {title : "Avg Time"},
		{title : "BGG URL"},
		{title : "Category"},
		{title : "Designer"},
		{title : "Game ID"},
		{title : "Geek Rating"},
		{title : "Image URL"},
        {title : "Max Players"},
        {title : "Max Time"},
        {title : "Mechanic"},
        {title : "Min Players"},
        {title : "Min Time"},
        {title : "Names"},
        {title : "Rank"},
        {title : "Weight"},
        {title : "Year"}
        ]
    });
   });
}