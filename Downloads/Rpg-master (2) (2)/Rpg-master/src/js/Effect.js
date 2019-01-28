class Effect {

    static getPreview() {
        $("#preview").show();
        $("#game").hide();
        $("#gameBoard").hide();
        $("#results").hide();
    };

    static getFromCardsToBoard() {
        $("#preview").hide();
        $("#game").show();
    };

    static getFromBoardToFight() {
        $("#grid").hide(1000);
        $("#gameBoard").delay(1000).fadeIn(1500);
    };
   
    static getEmpty() {
        $(".hidden").fadeOut("fast");
        $(".damage").empty();
    };
    
    static getEndGame(loser, winner) {
        $("#gameBoard").hide(1000);
        $("#feed").hide();
        $(".restart").hide();
        $("#results").delay(1000).fadeIn(1500);
        document.getElementById('winner').innerHTML = winner.name;
        document.getElementById('loser').innerHTML = loser.name;
    };
}

export { Effect }