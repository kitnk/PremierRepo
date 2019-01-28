import { Effect } from "./Effect";
import { Weapon } from "./Weapon";
import { Player } from "./Player";
import { Game } from "./Game";
import { players } from "./Player";

// Initializing the board
window.addEventListener("load", function (event) {
  Board.initializeBoard();
});

// Restarts the game when pressing the restart button
$("#restartBtn").click(function() {
  Board.initializeBoard();
});

// Declares how many blocked cells, weapons and players the board will contain
const BLOCKEDCELLS = 14;
const WEAPONSCELLS = 6;
const PLAYERSCELLS = 2;

class Board {

  // Creates the board and retrieves names inputs
  static initializeBoard() {
    var grid = document.getElementById('grid');
    grid.innerHTML = "";
    Effect.getPreview();
    for (let i = 0; i < 10; i++) {
      var row = document.createElement('tr');
      row.id = "row" + (i + 1);
      grid.appendChild(row);
      for (let j = 0; j < 10; j++) {
        var cell = document.createElement('td');
        cell.setAttribute("data-x", j);
        cell.setAttribute("data-y", i);
        row.appendChild(cell);
      };
    };

    document.getElementById("start").addEventListener("click", function () {
      if (document.getElementById("firstName").value.length > 0) {
        var firstPlayerName = document.getElementById("firstName").value;
      }
      if (document.getElementById("secondName").value.length > 0) {
        var secondPlayerName = document.getElementById("secondName").value;
      };
      Board.launchGame(firstPlayerName, secondPlayerName, players);
    });
  }

  // Dispatches all special cells on the board according to the amount we specified as constants just above
  static initializeCellsTypes(attribute, type) {
    let number = 0;
    let firstRandom = this.getRandomNumber();
    let secondRandom = this.getRandomNumber();
    number++;
  }

  // Distributes all special cells on the board
  static launchGame(firstPlayerName, secondPlayerName, players) {
    Effect.getFromCardsToBoard();
    Board.resetBoard();
    var install = true;
    while (install == true) {
      var getCells = 0;
      while (getCells < BLOCKEDCELLS) {
        var rand = Board.getRandomNumber(9);
        var rand2 = Board.getRandomNumber(9);
        $('td[data-x=' + rand + '][data-y=' + rand2 + ']').attr("type", "blocked");
        getCells++;
      };

      var getWeapons = 0;
      while (getWeapons < WEAPONSCELLS) {
        var rand = Board.getRandomNumber(9);
        var rand2 = Board.getRandomNumber(9);
        if (!$('td[data-x=' + rand + '][data-y=' + rand2 + ']').is("[type]")) {
          $('td[data-x=' + rand + '][data-y=' + rand2 + ']').attr("weapon", getWeapons);
          getWeapons++;
        };
      };

      var getCells = 0;
      while (getCells < PLAYERSCELLS) {
        var rand = Board.getRandomNumber(9);
        var rand2 = Board.getRandomNumber(9);
        if (!$('td[data-x=' + rand + '][data-y=' + rand2 + ']').is("[type]") && !$('td[data-x=' + rand + '][data-y=' + rand2 + ']').is("[weapon]")) {
          $('td[data-x=' + rand + '][data-y=' + rand2 + ']').attr("player", getCells);
          getCells++;
        };
      };
      install = false;
    };
    $("#feed").append('Welcome to this game<br>');
    firstPlayerName && (players[0].name = firstPlayerName);
    secondPlayerName && (players[1].name = secondPlayerName);
    Board.determinesFirstPlayer(players);
  };

  // Returns a random number between 1 and a max specified as a parameter
  static getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  };

  static determinesFirstPlayer(players) {
    var currentPlayer = {};
    $('td[player=0]').attr('currentPlayer', false);
    $('td[player=1]').attr('currentPlayer', false);
    var random = Board.getRandomNumber(1);
    $('td[player=' + random + ']').attr('currentPlayer', true);
    Player.isCurrentlyPlaying(currentPlayer, players);
  };

  // Resets all infos on the board
  static resetBoard() {
    $("td").removeAttr("type");
    $("td").removeAttr("weapon");
    $("td").removeAttr("player");
    $("td").removeAttr("goto");
    $("td").removeAttr("changePosition");
    $("td").removeAttr("currentPlayer");
    $("#feed").empty();
    $("#grid").show();
    $("#gameBoard").hide();
  };
}

export { Board };