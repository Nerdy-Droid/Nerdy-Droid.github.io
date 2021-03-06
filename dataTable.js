function getGames (games) {
    document.getElementById("user").style.display = "block";
    
    $(document).ready(function() {
    
        $('#user tfoot #search').each( function () {
            var title = $(this).text();
            $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
        } );

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
                        {data : "min_players"},
						{data : "max_players"},
						{data : "year"},
						{data : "geek_rating"},
						{data : "mechanic"},
						{data : "weight"},
						{data : "avg_time"},
						{data : "category"} 
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

    function randomGame() {
        var randomItem = userGames[Math.floor(Math.random()*userGames.length)]
        return alert(randomItem);
    }