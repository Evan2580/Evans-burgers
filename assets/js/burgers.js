$(document).on("click", ".consumeBurger", consumeBurger);

function consumeBurger() {
    let id = $(this).attr("data-id");
    // let consumed = {devoured: 1}
    let devoured = 1;
    $.ajax(
        "/api/burgers/" + id,// url
        {
            method: "PUT",
            data: devoured
        }//data
    )
    .then(function (data) {
        console.log(data);
        console.log("Burger eaten");
        location.reload();
    })

}
$(".cookBurger").on("submit", function (event) {
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
$(document).on("click", ".removeBurger", function (event) {
    var id = $(this).attr("data-id");
console.log("====================================");
    // Send the DELETE request.

    $.ajax({
        url: "/api/burgers/" + id,
        type: 'DELETE'
      }).then(
        function (data) {
            console.log(data);
            // console.log("deleted Burger", id);
            console.log("deleted Burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );



    // $.ajax("/api/burgers/" + id, {
    //     type: "DELETE"
    // }).then(
    //     function (data) {
    //         console.log(data);
    //         // console.log("deleted Burger", id);
    //         console.log("deleted Burger");
    //         // Reload the page to get the updated list
    //         location.reload();
    //     }
    // );
});
