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
    // how do i reference 'this' html element?        
        // if clicked mole has class 'animate'
            // controller.scorePoint();
    },
    
    scorePoint: function() {
        game.addPoint();
    }
};