$( document ).ready(function() {

	function Cart(items,total){
		this.items = [],
		this.total = 0
	}

	$("#contactlink").on('click', function(event) {
		event.preventDefault();
		toggleContact()
	});

	$("#cancel").on('click', function(event) {
		event.preventDefault();
		toggleContact()
	});

	$.getJSON( "test.json", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + val + "</li>" );
		});

		$( "<ul/>", {
			"class": "my-new-list",
			html: items.join( "" )
		}).appendTo( "body" );
	});

	$("#contactform").submit(function(e){
		e.preventDefault()
		var email = $("#email").val()
		var name = $("#name").val()
		var message = $("#message").val()
		var hasError = false;
		var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		if(email == '') {
			$("#email").after('<span class="error">You forgot to enter the email address to send to</span>');
			hasError = true;
		} else if(!emailReg.test(email)) {
			$("#email").after('<span class="error">Enter a valid email address to send to.</span>');
			hasError = true;
		}

		if(hasError == false) {
			$(this).hide();
			$("#cart").append('<img src="http://rpg.drivethrustuff.com/shared_images/ajax-loader.gif" alt="Loading" id="loading"/>');
		} 

		return false;

	});


	function toggleContact(){
		var form = document.getElementById("contactform")
		if (form.style.display == "block") {
			form.style.display = "none"
		} else {
			form.style.display = "block"
		}
	}


	var current_cart = new Cart
	current_cart.items.push("test")
	console.log(current_cart)
	console.log(current_cart.items)


	var addItem = function(item){
		cart.items.push(item.name)
		cart.total = cart.total + item.cost
		refreshCart()
	}

	function refreshCart(){
		console.log("lol")
	}

})