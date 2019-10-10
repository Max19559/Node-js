"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserES6 =
/*#__PURE__*/
function () {
  function UserES6(name, surname, age) {
    _classCallCheck(this, UserES6);

    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  _createClass(UserES6, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getSurname",
    value: function getSurname() {
      return this.surname;
    }
  }, {
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "setName",
    value: function setName(newName) {
      if (newName < 30) {
        this.name = newName;
      } else {
        console.log("Sorry, set norm name!");
      }
    }
  }, {
    key: "setSurname",
    value: function setSurname(newSurname) {
      if (newSurname < 40) {
        this.surname = newSurname;
      } else {
        console.log("Sorry, set norm surname!");
      }
    }
  }, {
    key: "setAge",
    value: function setAge(newAge) {
      if (newAge > 0 && newAge < 120) {
        this.age = newAge;
      } else {
        console.log("NO! Set norm age!");
      }
    }
  }]);

  return UserES6;
}();

var WorkerES6 =
/*#__PURE__*/
function (_UserES) {
  _inherits(WorkerES6, _UserES);

  function WorkerES6(name, surname, age, workerID) {
    var _this;

    _classCallCheck(this, WorkerES6);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WorkerES6).call(this, name, surname, age));
    _this.workerID = workerID;
    return _this;
  }

  _createClass(WorkerES6, [{
    key: "setAge",
    value: function setAge(newAge) {
      if (newAge > 18 && newAge < 65) {
        this.age = newAge;
      } else {
        console.log("You can't work");
      }
    }
  }]);

  return WorkerES6;
}(UserES6);

var userES6 = new UserES6("Alex", "Lexus", 19);
var workerES6 = new WorkerES6("Gevorg", "Abramian", 19, 31543);
userES6.setAge(17);
workerES6.setAge(17);
console.log(workerES6.getAge());
console.log(userES6.getAge());
console.log(userES6);
console.log(workerES6);
//# sourceMappingURL=ES6toES5.js.map
