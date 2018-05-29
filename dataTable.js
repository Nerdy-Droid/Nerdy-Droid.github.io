function getGames (games) {
    document.getElementById("user").style.display = "block";
    
    $(document).ready(function() {
    
        $('#user tfoot #search').each( function () {
            var title = $(this).text();
            $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
        } );

console.log(games)

       $('#user').DataTable({
        data: games,
        columns: [
              {data : "names",
                "render": function(data, type, row, meta){
               if(type === 'display'){
                data = '<a href="' + data.bgg_url + '">' + data + '</a>';
               }
               
               return data;
            }
        
        },
        {data : "year"},
        {data : "geek_rating"},
        {data : "mechanic"},
        {data : "weight"},
        {data : "avg_time"},
        {data : "category"},  
        {data : "min_players"},
        {data : "max_players"}
 ]
   
});
var table = $('#user').DataTable();
	 table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();

                }
            });
   });
    });
}

    function reload() {
        location.reload();
    }