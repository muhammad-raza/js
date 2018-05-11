$(document).ready(function(){
	$('#button').click(function(){
	var value=$('#write').val();
$.ajax({
	type:'Post',
	url:'website',
    data:'value',
success:function(value)	{
	$('#mylist').append('<li>'+value.message+'</li>');
	
	
},
error:function(){
	
	alert('error adding new message');
});
});	//end ajax post
	
	$.ajax({
		type:'get',
		url:'API provided',
		success:function(data){
			$.each(data,function(index,value){
				$('#mylist').append('<li>'+'<input type="checkbox" id="checkbox"/>'+value.message+'</li>');
				
	});
			
		}
			
		}); //end of ajax get
	$('#checkbox').click(function(){
	$('#div').toggleClass("divv");
	
	});  
	
	});
	
});





