$(function (){
	$('#swith_sech').on('click', function(){
		$('#sech').toggle();
	});
});

$(function Vostochnaya_VolxovSevernaya(){
	$('#svost-vs').on('click', function(){
		$(this).toggleClass("choseLine");
		$('#svost-vsde').fadeToggle();
		$('#vost-vs > circle').toggleClass('choseSech');
		$('#l331').toggleClass("lineAnimate");
		$('#l330').toggleClass("lineAnimate");
		$('#koef_1_').toggle();
		$('#vost-vs').siblings().toggle();
	});	
});

$(function Kirishi_Syas(){
//в свг заменить id="kis" на class="kirs"
	$('#sKir-S').on('click', function(){
		$(this).toggleClass("choseLine");
		$('#sKir-Sde').fadeToggle();
		$('#kir-sy > circle').toggleClass('choseSech');
		$('.kirs').toggleClass("lineAnimate");
		$('#koef_1_').toggle();
		$('#kir-sy').siblings().toggle();
	});	
});

// нужно сделать
/*
	$('#sSZ-C').on('click', function(){
		$(this).toggleClass("choseLine");
		$('#sSZ-Cde').fadeToggle();
	});
	$('#sKir-S').on('click', function(){
		$(this).toggleClass("choseLine");
		$('#sKir-Sde').fadeToggle();
	});
*/