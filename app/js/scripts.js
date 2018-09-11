//Isotope
function isotope_init() {
	var $grid = $('.grid').isotope({
		 // options
		 itemSelector: '.grid-item',
		 layoutMode: 'fitRows'
	});

	$('.filter-button-group').on('click', 'button', function(){
		$('.is-checked')[0].classList.remove('is-checked');
		$(this)[0].classList.add('is-checked');
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({filter: filterValue});
})
}

// Price Range
function priceRangeInit() {$( function() {
	 var handle = $( "#custom-handle" );
	 var handle_2 = $( "#custom-handle_2" );
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 75, 300 ],
			create: function() {
        handle.append($("<span/>").text( $( this ).slider( "values", 0 ) ));
				handle_2.append($("<span/>").text( $( this ).slider( "values", 1 ) ));
      },
			slide: function( event, ui ) {
        $( "#custom-handle span" ).text( ui.values[0]);
				 $( "#custom-handle_2 span" ).text( ui.values[1]);
      }
    });
});
}


$(document).ready(function(){
	isotope_init();
	priceRangeInit();
});
