$(document).ready(function(){
	$('#save').click(function(){
		
		
	$.ajax({
		
		url:'C:/Users/Bushra%20Javed/Desktop/js/newfile.html',
		success: function(data){
			$('#newone').html(data);
		}	
			});	
	
	
	
	});
});