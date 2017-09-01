$(function() { 
	var count=0;
	$(".listingItem").swipe( {
        tap:function(event, target) {
	        if($(".moving").hasClass('left')){
	          	$(this).find(".moving").removeClass("left");
				$(this).find(".right").removeClass("biggerRight");
				$(".moving").removeClass("left");
				$(".right").removeClass("biggerRight");
	        } else {
	        	console.log('Open Message');
	        }         	
        },
        doubleTap:function(event, target) {
        	$(this).find(".moving").removeClass("left");
			$(this).find(".right").removeClass("biggerRight");
        },
        longTap:function(event, target) {
        	$(this).find(".moving").removeClass("left");
			$(this).find(".right").removeClass("biggerRight");
        },
        swipeLeft:function() {
        	$(".moving").removeClass("left");
			$(".right").removeClass("biggerRight");
        	$(this).find(".moving").addClass("left");
			$(this).find(".right").addClass("biggerRight");
        },
        threshold:50
     });
});

function DeleteTab(obj){
	var id = obj.id;
	$('#List'+id).remove();
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[1];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
$("#myInput").on("click",function(){
	console.log('click');
  	window.scrollTo(0,0);
});