var budgetController = (function () {
  var x = 23;

  var add = function (a) {
    return a + x;
  };

  return {
    publicTest: function (a) {
      return add(a);
    },
  };
})();

var UIController = (function () {
  // add code here
})();

// THERE NEEDS TO BE A WAY TO ADD STUFF TO THE UI AND THEN PASS IT TO THE BUDGET SO YOU NEED TO HAVE THE CONTROLLER BELOW
// WE WILL PASS THE OTHER 2 CONTROLLERS AS ARGUEMENTS SO IT KNOWS THEY EXIST AND CAN CONNECT THEM
// now we pass them as arguements
var controller = (function (budgetCtrl, UICtrl) {
  z = budgetCtrl.publicTest(9);

  return {
    test2: function () {
      console.log(z);
    },
  };
})(budgetController, UIController);
