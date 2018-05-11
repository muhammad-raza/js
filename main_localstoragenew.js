$(document).ready(function(){
	$('#button').on('click',todoList);
	$('#write').on('keypress',key_pressed);
	$('#my_list').on('change','#checkit',linethroughit);

	$('#my_list').on('click','#bin',binit);
	$('#my_list').on('click','#edit_text',edit_this_text);
	$('#my_list').on('click','#save',complete_here);
	
	
	
	function todoList(){
		var value_entered=$('#write').val();
		if($('#write').val()===''){
			alert('type in something');
		}
		$('#my_list').append('<li>'+'<input type="checkbox" id="checkit"/>'+'<span id="edit_text">'+value_entered+'</span>'+'<input type="text" id="hidden_text"><input type="button" value="save" id="save"/>'+'<input type="button" value="bin" id="bin">'+'</li>');
		$('#write').val("");
		
		
	}
	function key_pressed(e){
if(e.which===13){
			todoList();
		}
		
			}
			function linethroughit(){
				$(this).parent().toggleClass('myclass');
				
			}
			
	function binit(){
		$(this).parent().remove();
	}
	
	function edit_this_text(){
		var pick_text=$(this).parent().find('#edit_text').text();
		$(this).parent().find('#hidden_text').val(pick_text);
		$(this).parent().find('#save').show();
		
		$(this).parent().find('#hidden_text').show();
		$(this).parent().find('#edit_text').hide();
	}
	
	function complete_here(event){
		$(this).parent().find('#save').hide();
		var new_value_entered=$(this).parent().find('#hidden_text').val();
				$(this).parent().find('#hidden_text').hide();

		$(this).parent().find('#edit_text').text(new_value_entered);
		$(this).parent().find('#edit_text').show();
		
	}
});