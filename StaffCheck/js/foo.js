$(function(){
	$('#l387ici').on('mouseenter', function(){
		$('#l387t').fadeOut(300);
	}
	);
	$('#l387ici').on('mouseleave', function(){
		$('#l387t').fadeIn(300);
	}
	);

});
$(function(){
		$('p').on('click', function(){
		$(this).siblings('ul').toggle();
		
		}
	);
});

$('body input:checkbox').click(function(){
    if ($(this).is(':checked')){
        $(this).parent().addClass('blackZone');
        $(this).parent().siblings().toggle();
        } else {
        $(this).parent().removeClass('blackZone');
        $(this).parent().siblings().toggle();
    }
});

$(function(){
	$('.link_to_descript').click(function () {
		$(this).siblings('.display_non_all').toggleClass('toggleFlexClass');
		$(this).toggleClass('blacked');
	});
});

