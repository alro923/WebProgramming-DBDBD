$(window).load(function(){ /*문서가 실행된 후 javascript실행*/
$("[data-toggle]").click(function() { /*toggle을 클릭한 경우*/
  var toggle_el = $(this).data("toggle");
  $(toggle_el).toggleClass("open-sidebar"); /*open-sidebar속성 부여*/
});
 $(".swipe-area").swipe({ /*슬라이드 함수 선언 및 구현*/
	  swipeStatus:function(event, phase, direction, distance, duration, fingers)
		  {
			  if (phase=="move" && direction =="left") { /*이동 방향과 상태에 따라 속성 부여 및 제거*/
				   $(".containerbar").addClass("open-sidebar");
				   return false;
			  }
			  if (phase=="move" && direction =="right") {
				   $(".containerbar").removeClass("open-sidebar");
				   return false;
			  }
		  }
  });
});
