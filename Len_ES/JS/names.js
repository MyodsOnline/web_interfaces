$(function(){
	$("#bKamenogorskaja").on('click', function(){
		$('#nav').fadeIn();
	});
	$('#closeIt').on('click', function () {
		$('#nav').fadeOut();
	});
});


/*	
	$("#bKamenogorskaja").hover(
	  function() {
	    $('#nKamenogorskaja').show();
	  }, function() {
	    $('#nKamenogorskaja').hide();
	  }
	);
*/
$(function(){
		$( "#bViborgskaja" ).hover(
		  function() {
		    $('#nViborgskaja').show();
		  }, function() {
		    $('#nViborgskaja').hide();
		  }
		);
});
/*	$( "#bUgoZapadnaja" ).hover(
	  function() {
	    $('#nUgoZapadnaja').show();
	  }, function() {
	    $('#nUgoZapadnaja').hide();
	  }
	);

	$( "#bNovgorodTes" ).hover(
	  function() {
	    $('#nNovgorodTes').show();
	  }, function() {
	    $('#nNovgorodTes').hide();
	  }
	);

	$( "#bNovgorodskaja" ).hover(
	  function() {
	    $('#nNovgorodskaja').show();
	  }, function() {
	    $('#nNovgorodskaja').hide();
	  }
	);

	$( "#bChudovo" ).hover(
	  function() {
	    $('#nChudovo').show();
	  }, function() {
	    $('#nChudovo').hide();
	  }
	);

	
	$( "#bKingisepskaja" ).hover(
	  function() {
	    $('#nKingisepskaja').show();
	  	}, function() {
	    $('#nKingisepskaja').hide();
	  }
	);


$("div").one('click', function () {
      if ($(this).is(":first-child")) {
        $("p").text("It's the first div.");
      } else if ($(this).is(".blue,.red")) {
        $("p").text("It's a blue or red div.");
      } else if ($(this).is(":contains('Peter')")) {
        $("p").text("It's Peter!");
      } else {
        $("p").html("It's nothing <em>special</em>.");
      }
      $("p").hide().slideDown("slow");
      $(this).css({"border-style": "inset", cursor:"default"});
    });



	$( "#bLeningradskayaAES" ).hover(
	  function() {
	    $('#nLeningradskayaAES').show();
	  }, function() {
	    $('#nLeningradskayaAES').hide();
	  }
	);

	$( "#bGatchinskaja" ).hover(
	  function() {
	    $('#nGatchinskaja').show();
	  }, function() {
	    $('#nGatchinskaja').hide();
	  }
	);

	$( "#bEsti" ).hover(
	  function() {
	    $('#nEsti').show();
	  }, function() {
	    $('#nEsti').hide();
	  }
	);

	$( "#bBalti" ).hover(
	  function() {
	    $('#nBalti').show();
	  }, function() {
	    $('#nBalti').hide();
	  }
	);*/


