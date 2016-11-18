let controller = {
    
    timeRemaining: 20,
    endOfGame: false,
    
    onPlayButtonPressed: function() {
        setInterval(function() {
            controller.animateGame(game.generateRandomMole());
        }, 400);
    },
    
    startTimer: function() {
        console.log('startTimer');
    },

    animateGame: function(mole) {
        $('.hole').removeClass('animate');
        $('#' + mole).addClass('animate');
    },

    onMoleClick: function() {
        if (event.target.classList.contains('animate')) {
            game.addPoint();
            console.log(game.currentPoints);
        }
    },
    
    endTimer: function() {}
};

controller.startTimer();