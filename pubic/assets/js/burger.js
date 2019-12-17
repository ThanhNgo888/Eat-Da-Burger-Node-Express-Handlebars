//create a function to ensure that everything loads
$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("newburger")
            .val()
            .trim(),
            devoured: 0
        };

        //create post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        });
    });
    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1 //this click event set devoured to true
        };
        //put request
        $.ajax("/api/burgers/" + id, {
            type: "PUt",
            data: devouredState
        }).then(function(){
            console.log("Burger devoured");
            location.reload();
        });
    });
    $(".trashburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        //Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});