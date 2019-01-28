import { Effect } from "./Effect";
import { Weapon } from "./Weapon";
import { Game } from "./Game";

class Player {

  constructor(position, name, hp, weapon, damage, current, attack) {
    this.position = position;
    this.name = name;
    this.hp = 100;
    this.weapon = weapon;
    this.damage = damage;
    this.current = false,
    this.attack = false
  };

  // Determines who's the current player
  static isCurrentlyPlaying(currentPlayer, players) {
    this.players = players;
    currentPlayer.x = ($('td[currentPlayer=true]').data('x'));
    currentPlayer.y = ($('td[currentPlayer=true]').data('y'));
    currentPlayer.number = parseInt(($('td[currentPlayer=true]').attr('player')));
    $("#feed").append(this.players[currentPlayer.number].name + " is currently playing" + '<br>');
    Player.scanAccessibleCases(currentPlayer, 3);
  };

  // Scans all accessible cases around the current player
  static scanAccessibleCases(currentPlayer, params) {
    this.accessibleCases = [];

    for (let i = 1; i < params; i++) {
      var left = $('td[data-x=' + (currentPlayer.x - i) + '][data-y=' + (currentPlayer.y) + ']');
      var down = $('td[data-x=' + (currentPlayer.x) + '][data-y=' + (currentPlayer.y + i) + ']');
      var right = $('td[data-x=' + (currentPlayer.x + i) + '][data-y=' + (currentPlayer.y) + ']');
      var up = $('td[data-x=' + (currentPlayer.x) + '][data-y=' + (currentPlayer.y - i) + ']');
      this.accessibleCases.push(left, down, right, up);
    };
    Player.isAccessible(currentPlayer);
  };

  // Once we have scanned the cases supposedly accessible around our current player, we verify whether it already contains something
  static isAccessible(currentPlayer) {
    for (let i = this.accessibleCases.length; i >= 0; i--) {
      if (($(this.accessibleCases[i]).is("[type]")) || ($(this.accessibleCases[i - 4]).is("[type]"))) {
      }
      else if (($(this.accessibleCases[i]).is("[weapon]"))) {
        $(this.accessibleCases[i]).attr("goto", true);
      }
      else if ($(this.accessibleCases[i - 4]).is("[player]")) {
        Game.placeFightBoard(this.players, currentPlayer.number);
        break;
      } else {
        $(this.accessibleCases[i]).attr("goto", true);
        $(this.accessibleCases[i]).attr("changePosition", true);
      };
    };
    Player.move(currentPlayer);
  };

  // If our current player moves to a cell next to the player, the fight begins
  static nextToPlayer(currentPlayer) {
    for (let i = 1; i < 2; i++) {
      if ($('td[data-x=' + (currentPlayer.x - i) + '][data-y=' + (currentPlayer.y) + ']').is("[player]") ||
        $('td[data-x=' + (currentPlayer.x) + '][data-y=' + (currentPlayer.y + i) + ']').is("[player]") ||
        $('td[data-x=' + (currentPlayer.x + i) + '][data-y=' + (currentPlayer.y) + ']').is("[player]") ||
        $('td[data-x=' + (currentPlayer.x) + '][data-y=' + (currentPlayer.y - i) + ']').is("[player]")) {
        return Game.placeFightBoard(this.players,currentPlayer);
      };
    };
  };

  // Triggers actions according to the type of cell chosen
  static move(currentPlayer) {
    $("td[goto=true]").off().on("click", function () {
      if ($(this).is("[goto]")) {
        var clickedCell = $(this);
        Player.changeCurrentPlayerCoordinates(clickedCell, currentPlayer);
        if ($(this).is("[changePosition]")) {
          Player.moveCurrentPlayer(clickedCell, currentPlayer);
        } else if ($(this).is("[weapon]")) {
          Player.moveCurrentPlayer(clickedCell, currentPlayer);
          var chosenWeapon = parseInt($(this).attr('weapon'));
          Weapon.swapWeapons(players, currentPlayer.number, chosenWeapon, clickedCell);
        } else if ($(this).is("[player]") && $(this).is("[currentPlayer=false]")) {
          Game.placeFightBoard(this.players, currentPlayer.number);
        };
        Player.nextToPlayer(currentPlayer);
        $(this).removeAttr("currentPlayer");
        Player.swapCurrentPlayer(currentPlayer);
      };
    });
  };

  // Changes our player's coordinates according to his chosen movement
  static changeCurrentPlayerCoordinates(td, currentPlayer) {
    currentPlayer.x = td.data('x');
    currentPlayer.y = td.data('y');
    $("td[player=" + currentPlayer.number + "]").removeAttr("currentPlayer");
    $("td[player=" + currentPlayer.number + "]").removeAttr("player");
  }

  // Moves our player to his chosen cell
  static moveCurrentPlayer(clickedCell, currentPlayer) {
  $("td").removeAttr("changePosition");
  $("td").removeAttr("goto");
  $(clickedCell).attr('player', currentPlayer.number);
  $(clickedCell).attr('currentPlayer', true);
  };

  // Swaps who's our current player
  static swapCurrentPlayer(currentPlayer) {
    $("td[currentPlayer=false]").attr("currentPlayer", true);
        $("td[player=" + currentPlayer.number + "]").attr("currentPlayer", false);
        currentPlayer = {};
        Player.isCurrentlyPlaying(currentPlayer, players)
  };
}

  
var firstPlayer = new Player(0, "Hooded Assassin", 100,"nunchaku", 15, Player.current, Player.attack);
var secondPlayer =   new Player(1, "Suspicious Ghoul", 100,  "tomahawk", 30, Player.current, Player.attack);
var players = [firstPlayer, secondPlayer];

export { Player }
export { players }