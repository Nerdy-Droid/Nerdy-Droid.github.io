function getGames (games) {
$(document).ready(function() {
$('#example').DataTable({
	data: games,
	columns: [
		{title : "names"},
		{title : "min_players"},
		{title : "max_players"},
		{title : "avg_time"},
		{title : "year"},
		{title : "geek_rating"},
		{title : "mechanic"},
		{title : "category"},
		{title : "weight"}
	]
});
});
}