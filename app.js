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
  var controlAddItem = function () {
    // TO DO LIST
    // 1. GET THE FILED INPUT DATA
    // 2. ADD THE ITEM TO THE BUDGET CONTROLLER
    // 3. ADD THE ITEM TO THE UI
    // 4. CALUCLATE THE BUDGET
    // 5. DIPLAY ON THE UI
    console.log("testing testing ");
  };
  document.querySelector(".add__btn").addEventListener("click", controlAddItem);
  //   this is being assinged to the global document for use
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.keyCode === 13) {
      controlAddItem();
    }
  });
})(budgetController, UIController);
