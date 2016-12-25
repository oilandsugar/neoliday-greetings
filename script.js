$(document).ready(function(){
    function showMessages(){
        $.ajax({
            type:"POST",
            url:"fetch.php",
            data:{action:"message"},
            success:function(data){
                $("#messages").html(data);
            }
        });
    }
    showMessages();
	
	$('#send-to-field').on('click', function(e){
		e.preventDefault();
		$('#message').focus(); 
	});
	
	$("a[href=#scroll-up]").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});