// BUDGET CONTROLLER
var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

 
  var data = {
    allItems =  {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }
})();

// UI CONTROLLER
var UIController = (function () {
  var domStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
  };
  return {
    getinput: function () {
      return {
        type: document.querySelector(domStrings.inputType).value, //will be either inc or exp
        description: document.querySelector(domStrings.inputDescription).value,
        value: document.querySelector(domStrings.inputValue).value,
      };
    },
    getDomStrings: function () {
      return domStrings;
    },
  };
})();

// THERE NEEDS TO BE A WAY TO ADD STUFF TO THE UI AND THEN PASS IT TO THE BUDGET SO YOU NEED TO HAVE THE CONTROLLER BELOW
// WE WILL PASS THE OTHER 2 CONTROLLERS AS ARGUEMENTS SO IT KNOWS THEY EXIST AND CAN CONNECT THEM
// now we pass them as arguements

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDomStrings();

    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", controlAddItem);
    //   this is being assinged to the global document for use
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.keyCode === 13) {
        controlAddItem();
      }
    });
  };

  var controlAddItem = function () {
    // TO DO LIST
    // 1. GET THE FILED INPUT DATA
    var input = UICtrl.getinput();

    // 2. ADD THE ITEM TO THE BUDGET CONTROLLER
    // 3. ADD THE ITEM TO THE UI
    // 4. CALUCLATE THE BUDGET
    // 5. DIPLAY ON THE UI
  };

  return {
    init: function () {
      console.log("Application has started.");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
