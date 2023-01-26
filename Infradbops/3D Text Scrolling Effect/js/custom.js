var counter = 0;
$(document).bind("mousewheel",function(event){
	if(event.originalEvent.wheelDelta > 0){
		counter -= 10;
		console.log(counter);
		$(".outer_box").css({"transform":"perspective(2000px) rotateX("+counter+"deg)"})
	}else{
		counter += 10;
		console.log(counter);
		$(".outer_box").css({"transform":"perspective(2000px) rotateX("+counter+"deg)"})
	}


})