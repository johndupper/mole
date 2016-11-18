let controller = {
    
    timeRemaining: 5,
    endOfGame: false,
    
    
    onPlayButtonPressed: function() {
        setInterval(function() {
            controller.animateGame(game.generateRandomMole());
        }, 400);
        this.startTimer();
    },
    
    
    timer: function() {
        controller.timeRemaining -= 1;
        if (controller.timeRemaining < 1) {
            return;
        }
        console.log(controller.timeRemaining);
    },
    
    
    startTimer: function() {
        setInterval(function() {
            controller.timer();
        }, 1000);
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

/*
    :: startTimer
*/