

$(document).ready(function(){
		var array_here=[];
   createRow();
$('#save').click(function(){      
   
			var enter_name=$('#fname').val();
			var enter_class=$('#fclass').val();
			var enter_marks=$('#fmarks').val();	
			
		var obj_here={};
				obj_here.name_here=enter_name;
				obj_here.class_here=enter_class;
				obj_here.marks_here=enter_marks;
				
				array_here.push(obj_here);
		localStorage.local_variable=JSON.stringify(array_here);		
		createRow();
			$('#fname').val("");
			$('#fclass').val("");
			$('#fmarks').val("");
	});
		
		function createRow(){
			
			if(localStorage.local_variable){
			array_here=JSON.parse(localStorage.local_variable);
			$('tbody').empty();
			$.each(array_here,function(index,value){
		
				enter_name=value.name_here;
				enter_class=value.class_here;
                enter_marks=value.marks_here;
			
			
				
				var add_data='<tr>'
					+'<td>'+1+'</td>'
					+'<td><span id=first_col>'+enter_name+'</span><input type="text" id="text_box"/><input type="button" value="save" id="hidden_button"/></td>'
					+'<td id="second_col">'+enter_class+'</td>'
					+'<td id="third_col">'+enter_marks+'</td>'+'</tr>';
					
					$('tbody').append(add_data);
					
					});
		}
		
		}
		
		
		$('tbody').on('click','#first_col',start_edit_here);
		$('tbody').on('click','#hidden_button',finish_edit);
		
		function start_edit_here(){
			var new_value=$(this).parent().find('#first_col').text();
			$(this).parent().find('#text_box').val(new_value);
			$(this).parent().find('#text_box').show();
			$(this).parent().find('#hidden_button').show();
			$(this).parent().find('#first_col').hide();
			}
			function finish_edit(){
				var save_value=$(this).parent().find('#text_box').val();
				$(this).parent().find('#first_col').text(save_value);
				$(this).parent().find('#first_col').show();
				$(this).parent().find('#hidden_button').hide();
				$(this).parent().find('#text_box').hide();
				
				//$.each(array_here,function(index,value){
					var vari=$(this).value.name_here
				vari=save_value;
				//localStorage.setItem($value.name_here,save_value
				//array_here.push(obj_here);
		localStorage.local_variable=JSON.stringify(vari);		
				createRow();
				
				
			}
	

	});