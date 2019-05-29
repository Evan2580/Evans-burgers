$(document).on("click", ".consumeBurger", consumeBurger);

function consumeBurger() {
    let id = $(this).data("id");
    let consumed = {
        devoured: 1
    }
    $.ajax("/api/burgers" + id {
        method: "PUT",
        data: devroued
    }).then(function () {
        console.log("Burger eaten")
        location.reload();
    })

}
$(".create-Burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#new-Burger").val().trim(),
        Burger: $("[name=new-Burger]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});
$(".delete-Burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted Burger", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});
