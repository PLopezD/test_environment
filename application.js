$(document).ready(function() {
	

	var storeItems = []
	function Item(name,cost){
		this.name = name,
		this.cost = cost

	}
	function Cart(items,total){
		this.items = [],
		this.total = 0
	}
	Cart.prototype.addItem = function(item){
		this.items.push(item)
		this.total = this.total + item.cost
		refreshCart(this)
	}
	Cart.prototype.deleteItem = function(index){
		var deletedItem = this.items[index]
		this.items.splice(deletedItem,1)
		this.total = this.total - item.cost
		refreshCart(this)
	}

	var currentCart = new Cart

	$("#contactlink").on('click', function(event) {
		event.preventDefault();
		toggleContact()
	});

	$("#cancel").on('click', function(event) {
		event.preventDefault();
		toggleContact()
	});


	$("#header").click(function(e) {
		e.preventDefault()
		console.log("this is where we test")
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

	$(".add").click( function(e){
		e.preventDefault()
		var itemIndex = ($(this).parent()[0].value - 1)
		currentCart.addItem(storeItems[itemIndex])
	})

	var powerDelete = function(){
		$(".delete").click( function(e){
			e.preventDefault()
			this.value

		})
	}

	function toggleContact(){
		var form = document.getElementById("contactform")
		if (form.style.display == "block") {
			form.style.display = "none"
		} else {
			form.style.display = "block"
		}
	}
	

	function itemHTML(cart){

	}

	function refreshCart(cart){
		var htmlArray = []				
		var itemLength = cart.items.length							
		var itemName = cart.items[itemLength-1].name
		var itemCost = cart.items[itemLength-1].cost
		$(".items").append("<li> $"+itemCost+"--"+itemName+ "<button class=delete value="+itemLength+">Delete From cart</button></li>")
		powerDelete()
		$(".total").html(cart.total)
	}

	var defineItems = function (){
		var data = [
		{
			"name": "potato",
			"cost": 2
		},
		{
			"name": "cup",
			"cost": 5
		},
		{
			"name": "water",
			"cost": 1
		},
		{
			"name": "nail polish",
			"cost": 10
		},
		{
			"name": "math",
			"cost": 20
		}
		]
		for(i = 0; i < data.length; i++){
			var item = new Item(data[i].name,data[i].cost)
			storeItems.push(item)
		}
		console.log(storeItems)
	}();


// $('li').click(function(){
// 	var currentTimes = parseInt($(this).find("span").html())
// 		$(this).find("span").html(currentTimes+1)
// })
});

