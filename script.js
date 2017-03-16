$("body").on("click", ".database-list li i", function(e) {

	$(this).next().next().next().toggle();


    
});


$("body").on("click", ".database-name", function(e) {

	$("#database-table-header").hide();
   
    $("#database-header").show();
	
    
});

$("body").on("click", ".table-view", function(e) {

	$("#database-table-header").show();
   
    $("#database-header").hide();
	
    
});




