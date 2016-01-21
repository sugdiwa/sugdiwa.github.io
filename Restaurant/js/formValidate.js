//Validating the  Feedback Form on submission
$(document).ready(function()
{
	/*call the submitFeedback funtion when we click the submit
    button in feedback*/
	$('#submit-btn').on('click',submitFeedback);
	
	function submitFeedback(){

		//getting the feed values
		var feedName = $('#feedName').val();
		var feedEmail = $('#feedEmail').val();
		var feedNum = $('#feedNum').val();
		var feedLike = $('#feedLike').val();
		var feedMsg = $('#feedMsg').val();
		//Checking whether all the fields are entered
		if(feedName === "" || feedName === " ") {
		 	dispAlert('alert',"Please Enter the name");
		 	$('#feedName').focus(); 
		 	return false;
		}
		else if(feedEmail === "" || feedEmail === " ") {
			dispAlert('alert',"Please Enter the mail"); 
			feedEmail.focus();
		 	return false; 
		}
		else if(feedNum === "" || feedNum === " ") { 
			dispAlert('alert',"Please Enter the Contact No"); 
			feedNum.focus();
			return false;  
		}
		else if(feedLike === "" || feedLike === " ") { 
			dispAlert('alert',"Please Enter What food item did you like"); 
			feedLike.focus();
			return false;
		}
		else if(feedMsg === "" || feedMsg === " "){
			dispAlert('alert',"Please Enter the comments"); 
			feedMsg.focus();
			return false;  
		}
		else{
			removeAlert('alert');
			alert("submitted successfully");
			return true;
		}
		return false;
	}
	
	//function for displaying alerts
	function dispAlert(id,msg){
		$('#'+id).html(msg);
	}
	//function for removing alert msg 
	function removeAlert(id)
	{
		$('#'+id).css({'border':'1px solid #CECECE'});
		$('#alert').html('');
	}
	
});
