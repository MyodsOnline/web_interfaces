$(function(){
	$('#swith_gen').on('click', function(){
		$('#gen').toggle();
	});
	$('#swith_map').on('click', function(){
		$('#map').toggle();
		$('div.panzoom').toggleClass('bgUlr');
	});
	$('#swith_names').on('click', function(){
		$('#names g').toggle();
	});
});

$(function(){

	$('#swith_gen_1').on('click', function(){
		$('#tes').toggle();
		$(this).toggleClass('label_small');
		$(this).toggleClass('small')
	});
	$('#swith_gen_2').on('click', function(){
		$('#ges').toggle();
		$(this).toggleClass('label_small');
		$(this).toggleClass('small')
	});
	$('#swith_gen_3').on('click', function(){
		$('#pp').toggle();
		$(this).toggleClass('label_small');
		$(this).toggleClass('small')
	});
});

$(function(){
	$('#swith_b110kv').on('click', function(){
		$('#line110kv').toggle();
		$('#b110kv').toggle();
		$(this).toggleClass('label_small');
		$(this).toggleClass('small')
	});
	$('#swith_b220kv').on('click', function(){
		$('#line220kv').toggle();
		$('#b220kv').toggle();
		$(this).toggleClass('label_small');
		$(this).toggleClass('small')		
	});
	$('#swith_b330kv').on('click', function(){
		$('#line330kv').toggle();
		$('#b330kv').toggle();
		$(this).toggleClass('label_small');
		$(this).toggleClass('small')
	});
});


$(function (){
	$('#l702').on('click', function(){
		$('#l702sx').toggleClass("choseLineSxem");
		$(this).toggleClass("choseLine");
		$('#l702de').fadeToggle();
	});
	$('#l702sx').on('click', function(){
		$('#l702').toggleClass("choseLine");
		$(this).toggleClass("choseLineSxem");
		$('#l702de').fadeToggle();
	});


$( "#l702sx" ).hover(
  function() {
    $('#l701name_1_').show();
  }, function() {
    $('#l701name_1_').hide();
  }
);

	$("#bKamenogorskaja").hover(
	  function() {
	    $('#nKamenogorskaja').show();
	  }, function() {
	    $('#nKamenogorskaja').hide();
	  }
	);


	$('#l701').on('click', function(){
		$('#l701sx').toggleClass("choseLineSxem");
		$(this).toggleClass("choseLine");
		$('#l701de').fadeToggle();
	});
	$('#l701sx').on('click', function(){
		$('#l701').toggleClass("choseLine");
		$(this).toggleClass("choseLineSxem");
		$('#l701de').fadeToggle();
	});
});



$(function (){
	$('#kirtes_2_').on('mouseenter', function(){
		$('#kirtes_2_').attr('stroke-width', '7');
	});
	$('#kirtes_2_').on('mouseleave', function(){
		$('#kirtes_2_').attr('stroke-width', '2');
	});
	$('#kirtes').on('click', function(){
		$('#gKir').toggleClass("choseLine");
		$('#gKirde').fadeToggle();
	});
});


/*
$(function(){
	$('#swith_gen label').on('click', function(){
		if ($('#gen').is('visible')) {
				$('#gen').hide();
			} else{
				$('#gen').show();
			}
	});
});
*/


$(function(){
	var a = $('.panzoom svg').width();
	var b = $('.panzoom svg').height();
	$('.panzoom').css('width', a);
	$('.panzoom').css('height', b);
	return a;
	return b;
});