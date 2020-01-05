$(function() {
    $(".btnDevour").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweaten");
  
      var newDevouredState = {
        devoured: newEat
      };
  
      // Send the PUT request.
      $.ajax("/burgers/update" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })
})
