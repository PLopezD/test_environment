$(document).ready(function() {
	console.log("connect")

	$("body").click(function(e) {
		e.preventDefault()
		console.log("body clicked")
		side_icon_click()
	});
});

  var side_state = 'closed';
    
    $( document ).ready(function() {
    set_container_width();
  });
  
  function set_container_width()
  {
    var doc_width = $(document).width();
    $('#container').width(doc_width);
  }
  
  function set_container_height()
  {
    var doc_height = $(window).height();
    $('#container').height(doc_height);
    $('#side').height(doc_height-40);
  }
  
  function side_open()
  {
  var newStoryWidth = $(document).width();-300
  console.log(newStoryWidth)
    // $("#container").animate({"margin-left": "-230px", width: newStoryWidth}, 500, function() {
    $("#container").animate({
    width: "500px",
    // marginLeft: "-50px"
     // "margin-left": "-300px",
     // "border-color":"blue"
	}, 500, function() {
      $("#side").css("z-index", "1");
      side_state = 'open';
    });
  }
  
  function side_close()
  {
    $("#side").css("z-index", "-1");
    $("#container").animate({"margin-left": "0px"}, 500);
    side_state = 'closed';
  }
  
  function side_icon_click()
  {
    if(side_state == 'open')
    {
      side_close();
      
    } else {
      
      side_open();
    }
    
  }