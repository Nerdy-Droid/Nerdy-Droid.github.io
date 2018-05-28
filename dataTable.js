function getGames (games) {
    $("#allGames").hide();
    $("#user").show();

    $('#user tfoot #search').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );

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
    var table = $('#user).DataTable();
	 table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
     });
    }