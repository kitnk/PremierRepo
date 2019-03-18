import { Effect } from "./Effect";
import { Board } from "./Board";

class Game {

    static placeFightBoard(players, currentPlayer) {
        this.players = players;
        this.currentPlayer = this.players[currentPlayer];
        Game.fillInData();
        Effect.getFromBoardToFight();
        this.round = 0;
        setTimeout(function () { Game.fight(currentPlayer) }, 4500);
    };

    static fight(currentPlayer) {
        this.currentPlayer = currentPlayer.position === 0 ? this.players[0] : this.players[1];
        this.opponent = this.currentPlayer.position === 0 ? this.players[1] : this.players[0];
        Game.updateData();
        if (this.currentPlayer.hp <= 0 || this.opponent.hp <= 0) {
            this.loser = this.currentPlayer.hp === 0 ? this.players[0] : this.players[1];
            this.winner = this.currentPlayer.hp === 0 ? this.players[1] : this.players[0];
            Effect.getEndGame(this.loser, this.winner);
        } else {
            this.hasClicked = false;
            Game.getOpponentStrategy();
        };
    };

    static fightRound() {
        var prev = this.opponent.hp;
        if (this.opponent.attack == true) {
            $("#point").append(this.opponent.name + " has chosen to attack back!" + '<br>');
            this.opponent.hp -= this.currentPlayer.damage;
        } else if (this.opponent.attack == false) {
            $("#point").append(this.opponent.name + " has chosen defense" + '<br>');
            this.opponent.hp -= (this.currentPlayer.damage) / 2;
        };
        this.points = prev - this.opponent.hp;
        Game.showDamage(this.currentPlayer);
        $("#feed").append(this.currentPlayer.name + `'s made a crushing damage of ` + this.currentPlayer.damage + " on " + this.opponent.name + '<br>');
        Game.fight(this.opponent);
    };

    static getOpponentStrategy(type, opponent) {
            $(".card:eq("+this.opponent.position+")").css("border", "3px solid #FFD23F");
            var self = this;
            $('.btn-floating').click(function () {
                // récupérer getCurrentPlayer pour lui affecter le "choice"
                console.log("has clicked")
                if ($('.btn-floating').hasClass('attack')) {
                    self.choice = true;
                    self.hasClicked = true;
                } else {
                    self.choice = false;
                    self.hasClicked = true;
                };
            });
        if (self.hasClicked) {
            Effect.getEmpty();
            if (self.choice == false) {
                this.opponent.attack = false;
                $("#feed").append(this.opponent.name + " has chosen defense!" + '<br>');
                Game.fightRound();

            } else if (this.choice == true) {
                this.opponent.attack = true;
                $("#feed").append(this.opponent.name + " has chosen to attack back!" + '<br>');
                Game.fightRound();
            };
        };
    };

    static fillInData() {
        $(".player1-name").html(this.players[0].name);
        $(".player1-hp").html(this.players[0].hp);
        $(".player1-weapon").html(this.players[0].weapon);
        $(".player1-damage").html(this.players[0].damage);
        $(".player2-name").html(this.players[1].name);
        $(".player2-hp").html(this.players[1].hp);
        $(".player2-weapon").html(this.players[1].weapon);
        $(".player2-damage").html(this.players[1].damage);
    }

    static updateData() {
        $(".player1-hp").html(this.players[0].hp);;
        $(".player2-hp").html(this.players[1].hp);
        $(".card").css("border", "0 none");
        this.round++;
    };

    static showDamage() {
        $(".hidden" + currentPlayer.position).fadeIn("fast").animate({
            width: "35%"
        });
        $(".damage").append("-" + this.points);
    };

};

export { Game };
