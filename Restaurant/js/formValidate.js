//Validating the contact us and Feedback Form on submission
$(document).ready(function()
{
	/*call the submitFeedback funtion when we click the submit
    button in feedback*/
	$('#submit-btn').on('click',submitFeedback);
	/*call the submitContact funtion when we click the submit
    button in Contact us*/
	$('#submit-btn-contact').on('click',submitContact);

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
		 	feedName.focus(); 
		 	return false;
		}
		else if(feedEmail === "" || feedEmail === " ") {
			dispAlert('alert',"Please Enter the mail"); 
			feedEmail.focus();
		 	return false; 
		}
		
		else if(feedLike === "" || feedLike === " ") { 
			dispAlert('alert',"Please Enter What food item did you enjoy most during your visit"); 
			feedLike.focus();
			return false;
		}
		else if(feedMsg === "" || feedMsg === " "){
			dispAlert('alert',"Please Enter the comments"); 
			feedMsg.focus();
			return false;  
		}
		else if(feedNum === "" || feedNum === " ") { 
			dispAlert('alert',"Please Enter the Contact No"); 
			feedNum.focus();
			return false;  
		}
		else{
			removeAlert('alert');
			alert("submitted successfully");
		}
		return false;
	}
	function submitContact(){
		//getting the contact us form values
		var conName = $('#conName').val();
		var conEmail = $('#conEmail').val();
		var conNum = $('#conNum').val();
		var conMsg = $('#conMsg').val();
		var conComment = $('#conComments').val();
		//Checking whether all the fields are entered
		if(conName === "" || conName === " ") {
		 	dispAlert('alertContact',"Please Enter the name"); 
		 	return false;
		}
		else if(conEmail === "" || conEmail === " ") {
			
			dispAlert('alertContact',"Please Enter the mail"); 
		 	return false; 
		}
		else if(conNum === "" || conNum === " ") { 
			dispAlert('alertContact',"Please Enter the Contact No"); 
			return false;  
		}
		else if(conMsg === "" || conMsg === " ") { 
			dispAlert('alertContact',"Please Enter the Message "); 
			return false;
		}
		else if(conComment === "" || conComment === " "){
			dispAlert('alertContact',"Please Enter the comments/suggestions"); 
			return false;  
		}
		else{
			removeAlert('alertContact');
		}
		 if(conEmail !="" || conEmail != " "){
			if (conEmail.search( /^[a-zA-Z]+([_\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,4})+$/ ) == -1)
			{
				dispAlert('alertContact',"Please Enter the mail correctly"); 
			}
			else{
				removeAlert('alertContact');
			}
		}
		if(conNum != "" && conNum != " ")
		{
		
		if(conNum.search(/^[0-9]+$/) >= 0)
		{
			if (conNum.length < 7)
			{
				dispAlert('alertContact',"Please Enter the Number correctly");
				
			}
		}
		else
		{
			removeAlert('alertContact');
		}	
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
