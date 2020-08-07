//put it within a function to ensure that everything loads first.
$(function() {
  //use the event to trigger it 
  $(".create-form").on("submit", function(event) {
    //prevent the initial load
    event.preventDefault();

    //creating a new burger
    var newBurger = {
      burger_name: $("#newburger")
        .val()
        .trim(),
      devoured: 0
    };

    //doing the post resquest
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Added new burger");
      location.reload();
    });
  });
//=========================================================
//creating eatburger onClick event
  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1 //devoured set to true
    };

    //put post
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured");
      location.reload();
    });
  });

  //delete event
  $(".trashburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
  });
});
