function getGames (games) {
$(document).ready(function() {
$('#example').DataTable({
    "ajax": {
    "url": games,
    "dataSrc": ""
    },
	"columns": [
		{"data" : "names"},
		{"data" : "min_players"},
		{"data" : "max_players"},
		{"data" : "avg_time"},
		{"data" : "year"},
		{"data" : "geek_rating"},
		{"data" : "mechanic"},
		{"data" : "category"},
		{"data" : "weight"}
	]

});
});
}