/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/Events.js":
/*!*********************************!*\
  !*** ./src/assets/js/Events.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//events - a super-basic Javascript (publish subscribe) pattern
var Event =
/*#__PURE__*/
function () {
  function Event() {
    _classCallCheck(this, Event);

    this.events = {};
  }

  _createClass(Event, [{
    key: "on",
    value: function on(eventName, fn) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(fn);
    }
  }, {
    key: "off",
    value: function off(eventName, fn) {
      if (this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i] === fn) {
            this.events[eventName].splice(i, 1);
            break;
          }
        }
      }
    }
  }, {
    key: "emit",
    value: function emit(eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function (fn) {
          fn(data);
        });
      }
    }
  }]);

  return Event;
}();



/***/ }),

/***/ "./src/assets/js/Storage.js":
/*!**********************************!*\
  !*** ./src/assets/js/Storage.js ***!
  \**********************************/
/*! exports provided: default, noteStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteStorage", function() { return noteStorage; });
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events */ "./src/assets/js/Events.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./src/assets/js/helper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// LocalStorage Wrapper
// save Array -> transform: String -> localStorage.setItem
// get Array -> localStorage.getItem -> transform: Array



var Storage =
/*#__PURE__*/
function (_MyNiceEvents) {
  _inherits(Storage, _MyNiceEvents);

  function Storage(localStorageKey) {
    var _this;

    _classCallCheck(this, Storage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Storage).call(this));
    _this.key = localStorageKey;
    _this.data = _this.get();
    return _this;
  }

  _createClass(Storage, [{
    key: "addDataSet",
    value: function addDataSet(dataParameter) {
      // this is data -> push to this.data array the new note
      console.log(dataParameter);
      var newObj = {
        note: dataParameter.note,
        status: "pending",
        assigned: dataParameter.author
      };
      this.data.push(newObj); // we update the ui with the new this.data

      this.emit("updated", this.data); // update local storage

      this.save();
    }
  }, {
    key: "removeDataSet",
    value: function removeDataSet(dataParameter) {
      // remove from this.data 
      // this.data = this.data.filter(
      //   (item, index) => index != dataParameter
      // )
      this.data.splice(dataParameter, 1); // we update the ui with the new this.data

      this.emit("updated", this.data); // update local storage

      this.save();
    }
  }, {
    key: "changeStatus",
    value: function changeStatus(dataParameter) {
      console.log(dataParameter);
      console.log(this.data[dataParameter.id]);
      console.log("new status " + dataParameter.nextStatus);
      this.data[dataParameter.id]['status'] = dataParameter.nextStatus; // we update the ui with the new this.data

      this.emit("updated", this.data); // update local storage

      this.save();
    }
  }, {
    key: "save",
    value: function save() {
      // have access to current data
      var data = this.data; // transform to string

      var stringified = JSON.stringify(data); // save to locaStorage

      window.localStorage.setItem(this.key, stringified);
    }
  }, {
    key: "get",
    value: function get() {
      var localStorageValue = window.localStorage.getItem(this.key);
      this.data = JSON.parse(localStorageValue) || [];
      this.emit("updated", this.data);
      return this.data;
    }
  }, {
    key: "initFinished",
    value: function initFinished() {
      this.emit("updated", this.data);
    }
  }]);

  return Storage;
}(_Events__WEBPACK_IMPORTED_MODULE_0__["default"]);


var noteStorage = new Storage("myCoolTodoList");
noteStorage.on("addItem", function (note) {
  noteStorage.addDataSet(note);
});
noteStorage.on("updated", function (notes) {
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["renderNotes"])(notes);
});
noteStorage.on("removeItem", function (note) {
  noteStorage.removeDataSet(note);
});
noteStorage.on("changeStatus", function (note) {
  console.log(note.status);
  noteStorage.changeStatus(note);
});
noteStorage.initFinished();

/***/ }),

/***/ "./src/assets/js/helper.js":
/*!*********************************!*\
  !*** ./src/assets/js/helper.js ***!
  \*********************************/
/*! exports provided: $, domElements, renderNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domElements", function() { return domElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNotes", function() { return renderNotes; });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/assets/js/Storage.js");
// Helper

var $ = function $(selector) {
  return document.querySelector(selector);
};
var domElements = {
  addNoteInput: $("#add-note"),
  addAuthorInput: $("#add-author"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes"),
  noteDiv: null,
  statusIcon: null,
  removeIcon: null
};
var renderNotes = function renderNotes(notes) {
  domElements.noteContainer.innerHTML = notes.map(function (note, index) {
    return "\n        <div class=\"note col-lg-3 ".concat(note.status, "\"  id=").concat(index, ">\n          ").concat(note.note, " <span> <i class=\"fa fa-user assigned\"></i> ").concat(note.assigned, " \n          <i class=\"\n          ").concat(note.status == "pending" ? "fa fa-check-circle" : "far fa-edit ", " \n          statusIcon\" title=\"Change status\"></i> \n          <i class=\"fas fa-times-circle removeIcon\" title=\"Click to remove\"></i></span>\n        </div>\n      ");
  }).join(""); // Only if I have the notes I can target them and add the eventListners

  domElements.removeIcon = document.querySelectorAll(".removeIcon");
  domElements.statusIcon = document.querySelectorAll(".statusIcon");
  targetNotes();
  removeIcons();
};

var removeIcons = function removeIcons() {
  // Check if we have a note and eventually attach an eventlistner
  if (domElements.removeIcon !== null) domElements.removeIcon.forEach(function (oneDiv) {
    oneDiv.addEventListener("click", function () {
      var id = oneDiv.offsetParent.id; // trigger

      _Storage__WEBPACK_IMPORTED_MODULE_0__["noteStorage"].emit("removeItem", id);
    });
  });
};

var targetNotes = function targetNotes() {
  // Check if we have a note and eventually attach an eventlistner
  if (domElements.statusIcon !== null) domElements.statusIcon.forEach(function (oneDiv) {
    oneDiv.addEventListener("click", function () {
      var id = oneDiv.offsetParent.id; // checki

      var isPending = oneDiv.offsetParent.classList.contains("pending");
      var nextStatus = isPending ? "completed" : "pending";
      var note = {
        id: id,
        nextStatus: nextStatus
      };
      console.log(note); // trigger

      _Storage__WEBPACK_IMPORTED_MODULE_0__["noteStorage"].emit("changeStatus", note);
    });
  });
};

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/styles.scss */ "./src/assets/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/assets/js/Storage.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./src/assets/js/helper.js");



var addNoteButton = _helper__WEBPACK_IMPORTED_MODULE_2__["domElements"].addNoteButton,
    addNoteInput = _helper__WEBPACK_IMPORTED_MODULE_2__["domElements"].addNoteInput,
    addAuthorInput = _helper__WEBPACK_IMPORTED_MODULE_2__["domElements"].addAuthorInput;
addNoteButton.addEventListener("click", function () {
  var note = {
    note: addNoteInput.value,
    author: addAuthorInput.value
  };

  if (note.note && note.author) {
    _Storage__WEBPACK_IMPORTED_MODULE_1__["noteStorage"].emit("addItem", note);
    addNoteInput.value = "";
  }
});

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map