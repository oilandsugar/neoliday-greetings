$(document).ready(function() {

	function showMessages() {
		$.ajax({
			type: "POST",
			url: "fetch.php",
			data: {
				action: "message"
			},
			success: function(data) {
				$("#messages").html(data);
			}
		});
	}
	
	$("#message").keyup( function(e){
		var value = $('#message').val();
		if (value == 'joyeux noël' || value == 'joyeux noel' || value == 'joyeuses fêtes' || value == 'joyeuses fetes' || value == 'bonne année' || value == 'Bonne année' || value == 'heureuse année') {
			$('#output').html("Veuillez faire preuve d'un peu plus d'originalité");
		} else {
			$('#output').html('');
		}
	});

	$("#send_new_fetes").on('submit', function(e) {
		e.preventDefault();
		var data = $('#send_new_fetes').serialize();
		var value = $('#message').val();
		if (value === '') {
			$('#output').html("Veuillez ajouter un message avant d'envoyer");
		} else if (value == 'joyeux noël' || value == 'joyeux noel' || value == 'joyeuses fêtes' || value == 'joyeuses fetes' || value == 'bonne année' || value == 'Bonne année' || value == 'heureuse année') {
			$('#output').html("Veuillez faire preuve d'un peu plus d'originalité");
		} else {
			// AJAX Code To Submit Form.
			$.ajax({
				type: "POST",
				url: "send.php",
				data: data,
				cache: false,
				success: function(result) {
					$('#message').val('');
					showMessages();
				}
			});
		}
		return false;
	});
});