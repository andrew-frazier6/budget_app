// BUDGET CONTROLLER
var budgetController = (function () {
  //  some code
})();

// UI CONTROLLER
var UIController = (function () {
  //   some code
})();

// THERE NEEDS TO BE A WAY TO ADD STUFF TO THE UI AND THEN PASS IT TO THE BUDGET SO YOU NEED TO HAVE THE CONTROLLER BELOW
// WE WILL PASS THE OTHER 2 CONTROLLERS AS ARGUEMENTS SO IT KNOWS THEY EXIST AND CAN CONNECT THEM
// now we pass them as arguements

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  document.querySelector(".add__btn").addEventListener("click", function () {
    console.log("buttong was clicked");
  });
})(budgetController, UIController);
