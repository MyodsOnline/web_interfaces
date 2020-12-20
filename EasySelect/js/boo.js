$(function(){
	$("#smToggle__first").on("click", function(){
		$(".smToggle__first-hide").toggle();
		$(".smToggle__first-show").toggle();
	});
});

$(function(){
	$("#smToggle__second").on("click", function(){
		$(".smToggle__second-hide").toggle();
		$(".smToggle__second-show").toggle();
	});
});

$(function(){
	$("#smToggle__third").on("click", function(){
		$(".smToggle__third-hide").toggle();
		$(".smToggle__third-show").toggle();
	});
});

$(function(){
	$("#smToggle__fourth").on("click", function(){
		$(".smToggle__fourth-hide").toggle();
		$(".smToggle__fourth-show").toggle();
	});
});

$(function(){
	$("#smToggle__fiveth").on("click", function(){
		$(".smToggle__fiveth-hide").toggle();
		$(".smToggle__fiveth-show").toggle();
	});
});

$(function(){
	$("#no3").on("mouseover", function(){
		$(".JSstyle").css({
			"color": "red",
			"background": "rgba(176, 88, 102, 0.18)"
			});
	});
});
$(function(){
	$("#no3").on("mouseleave", function(){
		$(".JSstyle").css({
			"color": "",
			"background": ""
		});
	});
});

$(function(){
	$("#PA").on("click", function(){
		$(".navLi_show").toggle();
	});
	$("#CE").on("click", function(){
		$(".navLi_hide").toggle();
	});
	
});

$(function(){
	$("#toggle").on("click", function(){
		if ($(".frame").is(":visible")){
			$(".frame").fadeOut();
			$(this).text("Показать");
		}else{
			$(".frame").fadeIn();
			$(this).text("Скрыть");
		}
	});
});



$(function(){
	$("#first").on("mouseover", function(){
		$("#navLiFirst").css("background", "rgba(176, 88, 102, 1)");
	});
});
$(function(){
	$("#first").on("mouseleave", function(){
		$("#navLiFirst").css("background", "");
	});
});

$(function(){
	$("#second").on("mouseover", function(){
		$("#navLiSecond").css("background", "rgba(176, 88, 102, 1)");
	});
});
$(function(){
	$("#second").on("mouseleave", function(){
		$("#navLiSecond").css("background", "");
	});
});

$(function(){
	$("#third").on("mouseover", function(){
		$("#navLiThird").css("background", "rgba(176, 88, 102, 1)");
	});
});
$(function(){
	$("#third").on("mouseleave", function(){
		$("#navLiThird").css("background", "");
	});
});

$(function(){
	$("#fourth").on("mouseover", function(){
		$("#navLiFourth").css("background", "rgba(176, 88, 102, 1)");
	});
});
$(function(){
	$("#fourth").on("mouseleave", function(){
		$("#navLiFourth").css("background", "");
	});
});

$(function(){
	$("#fiveth").on("mouseover", function(){
		$("#navLiFiveth").css("background", "rgba(176, 88, 102, 1)");
	});
});
$(function(){
	$("#fiveth").on("mouseleave", function(){
		$("#navLiFiveth").css("background", "");
	});
});