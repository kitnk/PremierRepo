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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Board.js":
/*!*************************!*\
  !*** ./src/js/Board.js ***!
  \*************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _Effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect */ \"./src/js/Effect.js\");\n/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weapon */ \"./src/js/Weapon.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/js/Player.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n // Initializing the board\n\nwindow.addEventListener(\"load\", function (event) {\n  Board.initializeBoard();\n}); // Restarts the game when pressing the restart button\n\n$(\"#restartBtn\").click(function () {\n  Board.initializeBoard();\n}); // Declares how many blocked cells, weapons and players the board will contain\n\nvar BLOCKEDCELLS = 14;\nvar WEAPONSCELLS = 6;\nvar PLAYERSCELLS = 2;\n\nvar Board =\n/*#__PURE__*/\nfunction () {\n  function Board() {\n    _classCallCheck(this, Board);\n  }\n\n  _createClass(Board, null, [{\n    key: \"initializeBoard\",\n    // Creates the board and retrieves names inputs\n    value: function initializeBoard() {\n      var grid = document.getElementById('grid');\n      grid.innerHTML = \"\";\n      _Effect__WEBPACK_IMPORTED_MODULE_0__[\"Effect\"].getPreview();\n\n      for (var i = 0; i < 10; i++) {\n        var row = document.createElement('tr');\n        row.id = \"row\" + (i + 1);\n        grid.appendChild(row);\n\n        for (var j = 0; j < 10; j++) {\n          var cell = document.createElement('td');\n          cell.setAttribute(\"data-x\", j);\n          cell.setAttribute(\"data-y\", i);\n          row.appendChild(cell);\n        }\n\n        ;\n      }\n\n      ;\n      document.getElementById(\"start\").addEventListener(\"click\", function () {\n        if (document.getElementById(\"firstName\").value.length > 0) {\n          var firstPlayerName = document.getElementById(\"firstName\").value;\n        }\n\n        if (document.getElementById(\"secondName\").value.length > 0) {\n          var secondPlayerName = document.getElementById(\"secondName\").value;\n        }\n\n        ;\n        Board.launchGame(firstPlayerName, secondPlayerName, _Player__WEBPACK_IMPORTED_MODULE_2__[\"players\"]);\n      });\n    } // Dispatches all special cells on the board according to the amount we specified as constants just above\n\n  }, {\n    key: \"initializeCellsTypes\",\n    value: function initializeCellsTypes(attribute, type) {\n      var number = 0;\n      var firstRandom = this.getRandomNumber();\n      var secondRandom = this.getRandomNumber();\n      number++;\n    } // Distributes all special cells on the board\n\n  }, {\n    key: \"launchGame\",\n    value: function launchGame(firstPlayerName, secondPlayerName, players) {\n      _Effect__WEBPACK_IMPORTED_MODULE_0__[\"Effect\"].getFromCardsToBoard();\n      Board.resetBoard();\n      var install = true;\n\n      while (install == true) {\n        var getCells = 0;\n\n        while (getCells < BLOCKEDCELLS) {\n          var rand = Board.getRandomNumber(9);\n          var rand2 = Board.getRandomNumber(9);\n          $('td[data-x=' + rand + '][data-y=' + rand2 + ']').attr(\"type\", \"blocked\");\n          getCells++;\n        }\n\n        ;\n        var getWeapons = 0;\n\n        while (getWeapons < WEAPONSCELLS) {\n          var rand = Board.getRandomNumber(9);\n          var rand2 = Board.getRandomNumber(9);\n\n          if (!$('td[data-x=' + rand + '][data-y=' + rand2 + ']').is(\"[type]\")) {\n            $('td[data-x=' + rand + '][data-y=' + rand2 + ']').attr(\"weapon\", getWeapons);\n            getWeapons++;\n          }\n\n          ;\n        }\n\n        ;\n        var getCells = 0;\n\n        while (getCells < PLAYERSCELLS) {\n          var rand = Board.getRandomNumber(9);\n          var rand2 = Board.getRandomNumber(9);\n\n          if (!$('td[data-x=' + rand + '][data-y=' + rand2 + ']').is(\"[type]\") && !$('td[data-x=' + rand + '][data-y=' + rand2 + ']').is(\"[weapon]\")) {\n            $('td[data-x=' + rand + '][data-y=' + rand2 + ']').attr(\"player\", getCells);\n            getCells++;\n          }\n\n          ;\n        }\n\n        ;\n        install = false;\n      }\n\n      ;\n      $(\"#feed\").append('Welcome to this game<br>');\n      firstPlayerName && (players[0].name = firstPlayerName);\n      secondPlayerName && (players[1].name = secondPlayerName);\n      Board.determinesFirstPlayer(players);\n    }\n  }, {\n    key: \"getRandomNumber\",\n    // Returns a random number between 1 and a max specified as a parameter\n    value: function getRandomNumber(max) {\n      return Math.floor(Math.random() * (max + 1));\n    }\n  }, {\n    key: \"determinesFirstPlayer\",\n    value: function determinesFirstPlayer(players) {\n      var currentPlayer = {};\n      $('td[player=0]').attr('currentPlayer', false);\n      $('td[player=1]').attr('currentPlayer', false);\n      var random = Board.getRandomNumber(1);\n      $('td[player=' + random + ']').attr('currentPlayer', true);\n      _Player__WEBPACK_IMPORTED_MODULE_2__[\"Player\"].isCurrentlyPlaying(currentPlayer, players);\n    }\n  }, {\n    key: \"resetBoard\",\n    // Resets all infos on the board\n    value: function resetBoard() {\n      $(\"td\").removeAttr(\"type\");\n      $(\"td\").removeAttr(\"weapon\");\n      $(\"td\").removeAttr(\"player\");\n      $(\"td\").removeAttr(\"goto\");\n      $(\"td\").removeAttr(\"changePosition\");\n      $(\"td\").removeAttr(\"currentPlayer\");\n      $(\"#feed\").empty();\n      $(\"#grid\").show();\n      $(\"#gameBoard\").hide();\n    }\n  }]);\n\n  return Board;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Board.js?");

/***/ }),

/***/ "./src/js/Effect.js":
/*!**************************!*\
  !*** ./src/js/Effect.js ***!
  \**************************/
/*! exports provided: Effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Effect\", function() { return Effect; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Effect =\n/*#__PURE__*/\nfunction () {\n  function Effect() {\n    _classCallCheck(this, Effect);\n  }\n\n  _createClass(Effect, null, [{\n    key: \"getPreview\",\n    value: function getPreview() {\n      $(\"#preview\").show();\n      $(\"#game\").hide();\n      $(\"#gameBoard\").hide();\n      $(\"#results\").hide();\n    }\n  }, {\n    key: \"getFromCardsToBoard\",\n    value: function getFromCardsToBoard() {\n      $(\"#preview\").hide();\n      $(\"#game\").show();\n    }\n  }, {\n    key: \"getFromBoardToFight\",\n    value: function getFromBoardToFight() {\n      $(\"#grid\").hide(1000);\n      $(\"#gameBoard\").delay(1000).fadeIn(1500);\n    }\n  }, {\n    key: \"getEmpty\",\n    value: function getEmpty() {\n      $(\".hidden\").fadeOut(\"fast\");\n      $(\".damage\").empty();\n    }\n  }, {\n    key: \"getEndGame\",\n    value: function getEndGame(loser, winner) {\n      $(\"#gameBoard\").hide(1000);\n      $(\"#feed\").hide();\n      $(\".restart\").hide();\n      $(\"#results\").delay(1000).fadeIn(1500);\n      document.getElementById('winner').innerHTML = winner.name;\n      document.getElementById('loser').innerHTML = loser.name;\n    }\n  }]);\n\n  return Effect;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Effect.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _Effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect */ \"./src/js/Effect.js\");\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ \"./src/js/Board.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n  }\n\n  _createClass(Game, null, [{\n    key: \"placeFightBoard\",\n    value: function placeFightBoard(players, currentPlayer) {\n      this.players = players;\n      this.currentPlayer = this.players[currentPlayer];\n      Game.fillInData();\n      _Effect__WEBPACK_IMPORTED_MODULE_0__[\"Effect\"].getFromBoardToFight();\n      this.round = 0;\n      setTimeout(function () {\n        Game.fight(currentPlayer);\n      }, 4500);\n    }\n  }, {\n    key: \"fight\",\n    value: function fight(currentPlayer) {\n      this.currentPlayer = currentPlayer.position === 0 ? this.players[0] : this.players[1];\n      this.opponent = this.currentPlayer.position === 0 ? this.players[1] : this.players[0];\n      Game.updateData();\n\n      if (this.currentPlayer.hp <= 0 || this.opponent.hp <= 0) {\n        this.loser = this.currentPlayer.hp === 0 ? this.players[0] : this.players[1];\n        this.winner = this.currentPlayer.hp === 0 ? this.players[1] : this.players[0];\n        _Effect__WEBPACK_IMPORTED_MODULE_0__[\"Effect\"].getEndGame(this.loser, this.winner);\n      } else {\n        this.hasClicked = false;\n        Game.getOpponentStrategy();\n      }\n\n      ;\n    }\n  }, {\n    key: \"fightRound\",\n    value: function fightRound() {\n      var prev = this.opponent.hp;\n\n      if (this.opponent.attack == true) {\n        $(\"#point\").append(this.opponent.name + \" has chosen to attack back!\" + '<br>');\n        this.opponent.hp -= this.currentPlayer.damage;\n      } else if (this.opponent.attack == false) {\n        $(\"#point\").append(this.opponent.name + \" has chosen defense\" + '<br>');\n        this.opponent.hp -= this.currentPlayer.damage / 2;\n      }\n\n      ;\n      this.points = prev - this.opponent.hp;\n      Game.showDamage(this.currentPlayer);\n      $(\"#feed\").append(this.currentPlayer.name + \"'s made a crushing damage of \" + this.currentPlayer.damage + \" on \" + this.opponent.name + '<br>');\n      Game.fight(this.opponent);\n    }\n  }, {\n    key: \"getOpponentStrategy\",\n    value: function getOpponentStrategy(type, opponent) {\n      while (this.hasClicked == false) {\n        if (this.opponent.position == 0) {\n          $(\".card_\" + this.opponent.position).css(\"border\", \"3px solid #FFD23F\");\n        } else if (this.opponent.position == 1) {\n          $(\".card_\" + this.opponent.position).css(\"border\", \"3px solid #3BCEAC\");\n        }\n\n        ;\n        var self = this;\n        $('.' + self.opponent.position + ' .btn-floating').click(function () {\n          if ($('.' + self.opponent.position + ' .btn-floating').hasClass('attack')) {\n            this.choice = true;\n            this.hasClicked = true;\n          } else {\n            this.choice = false;\n            this.hasClicked = true;\n          }\n\n          ;\n        });\n      }\n\n      if (this.hasClicked) {\n        _Effect__WEBPACK_IMPORTED_MODULE_0__[\"Effect\"].getEmpty();\n\n        if (this.choice == false) {\n          this.opponent.attack = false;\n          $(\"#feed\").append(this.opponent.name + \" has chosen defense!\" + '<br>');\n          Game.fightRound();\n        } else if (this.choice == true) {\n          this.opponent.attack = true;\n          $(\"#feed\").append(this.opponent.name + \" has chosen to attack back!\" + '<br>');\n          Game.fightRound();\n        }\n\n        ;\n      }\n\n      ;\n    }\n  }, {\n    key: \"fillInData\",\n    value: function fillInData() {\n      $(\".player1-name\").html(this.players[0].name);\n      $(\".player1-hp\").html(this.players[0].hp);\n      $(\".player1-weapon\").html(this.players[0].weapon);\n      $(\".player1-damage\").html(this.players[0].damage);\n      $(\".player2-name\").html(this.players[1].name);\n      $(\".player2-hp\").html(this.players[1].hp);\n      $(\".player2-weapon\").html(this.players[1].weapon);\n      $(\".player2-damage\").html(this.players[1].damage);\n    }\n  }, {\n    key: \"updateData\",\n    value: function updateData() {\n      $(\".player1-hp\").html(this.players[0].hp);\n      ;\n      $(\".player2-hp\").html(this.players[1].hp);\n      $(\".card\").css(\"border\", \"0 none\");\n      this.round++;\n    }\n  }, {\n    key: \"showDamage\",\n    value: function showDamage() {\n      $(\".hidden\" + currentPlayer.position).fadeIn(\"fast\").animate({\n        width: \"35%\"\n      });\n      $(\".damage\").append(\"-\" + this.points);\n    }\n  }]);\n\n  return Game;\n}();\n\n;\n\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: Player, players */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"players\", function() { return players; });\n/* harmony import */ var _Effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect */ \"./src/js/Effect.js\");\n/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weapon */ \"./src/js/Weapon.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(position, name, hp, weapon, damage, current, attack) {\n    _classCallCheck(this, Player);\n\n    this.position = position;\n    this.name = name;\n    this.hp = 100;\n    this.weapon = weapon;\n    this.damage = damage;\n    this.current = false, this.attack = false;\n  }\n\n  _createClass(Player, null, [{\n    key: \"isCurrentlyPlaying\",\n    // Determines who's the current player\n    value: function isCurrentlyPlaying(currentPlayer, players) {\n      this.players = players;\n      currentPlayer.x = $('td[currentPlayer=true]').data('x');\n      currentPlayer.y = $('td[currentPlayer=true]').data('y');\n      currentPlayer.number = parseInt($('td[currentPlayer=true]').attr('player'));\n      $(\"#feed\").append(this.players[currentPlayer.number].name + \" is currently playing\" + '<br>');\n      Player.scanAccessibleCases(currentPlayer, 3);\n    }\n  }, {\n    key: \"scanAccessibleCases\",\n    // Scans all accessible cases around the current player\n    value: function scanAccessibleCases(currentPlayer, params) {\n      this.accessibleCases = [];\n\n      for (var i = 1; i < params; i++) {\n        var left = $('td[data-x=' + (currentPlayer.x - i) + '][data-y=' + currentPlayer.y + ']');\n        var down = $('td[data-x=' + currentPlayer.x + '][data-y=' + (currentPlayer.y + i) + ']');\n        var right = $('td[data-x=' + (currentPlayer.x + i) + '][data-y=' + currentPlayer.y + ']');\n        var up = $('td[data-x=' + currentPlayer.x + '][data-y=' + (currentPlayer.y - i) + ']');\n        this.accessibleCases.push(left, down, right, up);\n      }\n\n      ;\n      Player.isAccessible(currentPlayer);\n    }\n  }, {\n    key: \"isAccessible\",\n    // Once we have scanned the cases supposedly accessible around our current player, we verify whether it already contains something\n    value: function isAccessible(currentPlayer) {\n      for (var i = this.accessibleCases.length; i >= 0; i--) {\n        if ($(this.accessibleCases[i]).is(\"[type]\") || $(this.accessibleCases[i - 4]).is(\"[type]\")) {} else if ($(this.accessibleCases[i]).is(\"[weapon]\")) {\n          $(this.accessibleCases[i]).attr(\"goto\", true);\n        } else if ($(this.accessibleCases[i - 4]).is(\"[player]\")) {\n          _Game__WEBPACK_IMPORTED_MODULE_2__[\"Game\"].placeFightBoard(this.players, currentPlayer.number);\n          break;\n        } else {\n          $(this.accessibleCases[i]).attr(\"goto\", true);\n          $(this.accessibleCases[i]).attr(\"changePosition\", true);\n        }\n\n        ;\n      }\n\n      ;\n      Player.move(currentPlayer);\n    }\n  }, {\n    key: \"nextToPlayer\",\n    // If our current player moves to a cell next to the player, the fight begins\n    value: function nextToPlayer(currentPlayer) {\n      for (var i = 1; i < 2; i++) {\n        if ($('td[data-x=' + (currentPlayer.x - i) + '][data-y=' + currentPlayer.y + ']').is(\"[player]\") || $('td[data-x=' + currentPlayer.x + '][data-y=' + (currentPlayer.y + i) + ']').is(\"[player]\") || $('td[data-x=' + (currentPlayer.x + i) + '][data-y=' + currentPlayer.y + ']').is(\"[player]\") || $('td[data-x=' + currentPlayer.x + '][data-y=' + (currentPlayer.y - i) + ']').is(\"[player]\")) {\n          return _Game__WEBPACK_IMPORTED_MODULE_2__[\"Game\"].placeFightBoard(this.players, currentPlayer);\n        }\n\n        ;\n      }\n\n      ;\n    }\n  }, {\n    key: \"move\",\n    // Triggers actions according to the type of cell chosen\n    value: function move(currentPlayer) {\n      $(\"td[goto=true]\").off().on(\"click\", function () {\n        if ($(this).is(\"[goto]\")) {\n          var clickedCell = $(this);\n          Player.changeCurrentPlayerCoordinates(clickedCell, currentPlayer);\n\n          if ($(this).is(\"[changePosition]\")) {\n            Player.moveCurrentPlayer(clickedCell, currentPlayer);\n          } else if ($(this).is(\"[weapon]\")) {\n            Player.moveCurrentPlayer(clickedCell, currentPlayer);\n            var chosenWeapon = parseInt($(this).attr('weapon'));\n            _Weapon__WEBPACK_IMPORTED_MODULE_1__[\"Weapon\"].swapWeapons(players, currentPlayer.number, chosenWeapon, clickedCell);\n          } else if ($(this).is(\"[player]\") && $(this).is(\"[currentPlayer=false]\")) {\n            _Game__WEBPACK_IMPORTED_MODULE_2__[\"Game\"].placeFightBoard(this.players, currentPlayer.number);\n          }\n\n          ;\n          Player.nextToPlayer(currentPlayer);\n          $(this).removeAttr(\"currentPlayer\");\n          Player.swapCurrentPlayer(currentPlayer);\n        }\n\n        ;\n      });\n    }\n  }, {\n    key: \"changeCurrentPlayerCoordinates\",\n    // Changes our player's coordinates according to his chosen movement\n    value: function changeCurrentPlayerCoordinates(td, currentPlayer) {\n      currentPlayer.x = td.data('x');\n      currentPlayer.y = td.data('y');\n      $(\"td[player=\" + currentPlayer.number + \"]\").removeAttr(\"currentPlayer\");\n      $(\"td[player=\" + currentPlayer.number + \"]\").removeAttr(\"player\");\n    } // Moves our player to his chosen cell\n\n  }, {\n    key: \"moveCurrentPlayer\",\n    value: function moveCurrentPlayer(clickedCell, currentPlayer) {\n      $(\"td\").removeAttr(\"changePosition\");\n      $(\"td\").removeAttr(\"goto\");\n      $(clickedCell).attr('player', currentPlayer.number);\n      $(clickedCell).attr('currentPlayer', true);\n    }\n  }, {\n    key: \"swapCurrentPlayer\",\n    // Swaps who's our current player\n    value: function swapCurrentPlayer(currentPlayer) {\n      $(\"td[currentPlayer=false]\").attr(\"currentPlayer\", true);\n      $(\"td[player=\" + currentPlayer.number + \"]\").attr(\"currentPlayer\", false);\n      currentPlayer = {};\n      Player.isCurrentlyPlaying(currentPlayer, players);\n    }\n  }]);\n\n  return Player;\n}();\n\nvar firstPlayer = new Player(0, \"Hooded Assassin\", 100, \"nunchaku\", 15, Player.current, Player.attack);\nvar secondPlayer = new Player(1, \"Suspicious Ghoul\", 100, \"tomahawk\", 30, Player.current, Player.attack);\nvar players = [firstPlayer, secondPlayer];\n\n\n\n//# sourceURL=webpack:///./src/js/Player.js?");

/***/ }),

/***/ "./src/js/Weapon.js":
/*!**************************!*\
  !*** ./src/js/Weapon.js ***!
  \**************************/
/*! exports provided: Weapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Weapon\", function() { return Weapon; });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/js/Board.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Weapon =\n/*#__PURE__*/\nfunction () {\n  function Weapon() {\n    _classCallCheck(this, Weapon);\n\n    this.weapons = [{\n      name: \"axe\",\n      damage: 30\n    }, {\n      name: \"dagger\",\n      damage: 20\n    }, {\n      name: \"nunchaku\",\n      damage: 25\n    }, {\n      name: \"tomahawk\",\n      damage: 35\n    }, {\n      name: \"metal-fist\",\n      damage: 20\n    }];\n  }\n\n  _createClass(Weapon, null, [{\n    key: \"assignRandomWeapon\",\n    value: function assignRandomWeapon(number) {\n      var num = _Board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].getRandomNumber(number);\n      return this.weapons[num];\n    }\n  }, {\n    key: \"swapWeapons\",\n    value: function swapWeapons(players, currentPlayer, chosenWeapon, clickedCell) {\n      this.players = players;\n\n      for (var i = 0; i < Weapon.weapons; i++) {\n        if (this.weapons[i].name == this.players[currentPlayer].weapon) {\n          var previousWeapon = i;\n          break;\n        }\n\n        ;\n      }\n\n      ;\n      this.players[currentPlayer].weapon = Weapon.weapons[chosenWeapon].name;\n      this.players[currentPlayer].damage = Weapon.weapons[chosenWeapon].damage;\n      clickedCell.attr(\"weapon\", previousWeapon);\n    }\n  }]);\n\n  return Weapon;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Weapon.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/js/Board.js\");\n/* harmony import */ var _Effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Effect */ \"./src/js/Effect.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ \"./src/js/Player.js\");\n/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Weapon */ \"./src/js/Weapon.js\");\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });