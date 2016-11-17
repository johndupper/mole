let controller = {

    board: null,

    onPlayButtonPressed: function() {
        setInterval(function() {
            controller.animateGame(game.generateRandomMole());
        }, 500);
    },

    animateGame: function(mole) {
        console.log('animate game: id#' + mole);
        $('.hole').removeClass('animate');
        $('#' + mole).addClass('animate');  
    },

    onMoleClick: function() {
        console.log('works');
    },

    scorePoint: function() {
        game.addPoint();
    }
};