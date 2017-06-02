$(document).ready(function(){
   $("#reduce-ang").on("click", function(){
   		if($(".angular").hasClass("col-xs-6")){
   	   		$(".angular").removeClass("b-r");
    		$('.angular').switchClass('col-xs-6', 'col-0');
    		$('.react').switchClass('col-xs-6', 'col-xs-12');		
   		}else{
   			$(".angular").addClass("b-r");
    		$('.angular').switchClass('col-0', 'col-xs-6');
    		$('.react').switchClass('col-xs-12', 'col-xs-6');
   		}

   })
})