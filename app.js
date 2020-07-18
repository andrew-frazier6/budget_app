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
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  return {
    addItem: function (type, descr, valu) {
      //create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      //create new item based on inc or exp type
      if (type === "exp") {
        var newItem = new Expense(ID, descr, valu);
      } else if (type === "inc") {
        var newItem = new Income(ID, descr, valu);
      }
      //push into our data structure
      data.allItems[type].push(newItem);
      return newItem;
    },
    testing: function () {
      console.log(data);
    },
  };
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
    var input, newItem;

    // TO DO LIST
    // 1. GET THE FILED INPUT DATA
    input = UICtrl.getinput(); //input has already grabbed the object so now you specify what you want from input by saying input.type etc in the newitem instance you just created. essenttially you grabbed the instance and then added an ID #

    // 2. ADD THE ITEM TO THE BUDGET CONTROLLER
    newItem = budgetController.addItem(
      input.type,
      input.description,
      input.value
    );
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
