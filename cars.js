$(document).ready(function(){
	
		$.getJSON("HTTP://www.mocky.io/v2/5861a290100000290df39511",function(data){
			
			
			$('#select_me').change(function(){
			//var value_here=$('#select_me option:selected').text();
			
			
			
			
			$.each(data,function(index,value){
				//if((value_here.toLowerCase()===value.make)||(value_here.toUpperCase()===value.make))
				//{
				//$('tbody').empty();
				var imp='<tr><td>'+value.make+'</td>'+
							'<td>'+value.model+'</td>'+
							'<td>'+value.year+'</td></tr>';
							$('tbody').append(imp);
				
				
			});
		});
		});
		 
		
});