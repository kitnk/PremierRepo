import { Board } from './Board';
import { Game } from "./Game";

class Weapon {

    constructor() {
       this.weapons = [
           {
            name: "axe",
            damage: 30
           },
           {
            name: "dagger",
            damage: 20
           },
           {
            name: "nunchaku",
            damage: 25
           },
           {
            name: "tomahawk",
            damage: 35
           },
           {
            name: "metal-fist",
            damage: 20
           }
       ]
    };

    static assignRandomWeapon(number) {
        let num = Board.getRandomNumber(number);
        return this.weapons[num];
    };

    static swapWeapons(players, currentPlayer, chosenWeapon, clickedCell) {
        this.players = players;
        for (let i = 0; i < Weapon.weapons; i++) {
            if (this.weapons[i].name == this.players[currentPlayer].weapon) {
            var previousWeapon = i;
            break;
            };
        };
        this.players[currentPlayer].weapon = Weapon.weapons[chosenWeapon].name;
        this.players[currentPlayer].damage = Weapon.weapons[chosenWeapon].damage;
        clickedCell.attr("weapon", previousWeapon);
    };
}

export { Weapon }