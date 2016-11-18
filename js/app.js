let controller = {
    
    timeRemaining: 5,
    timeInterval: null,
    endOfGame: false,
    
    // start game
    onPlayButtonPressed: function() {
        setInterval(function() {
            controller.animateGame(game.generateRandomMole());
        }, 400);
        this.startTimer();
    },
    
    // timer logic
    timer: function() {
        controller.timeRemaining -= 1;
        if (controller.timeRemaining < 1) {
            clearInterval(controller.timeInterval);
            return;
        }
        $('#userTime').text(controller.timeRemaining);
    },
    
    // start timer
    startTimer: function() {
        controller.timeInterval = setInterval(function() {
            controller.timer();
        }, 1000);
    },

    // show or hide moles
    animateGame: function(mole) {
        $('.hole').removeClass('animate');
        $('#' + mole).addClass('animate');
    },

    // score point
    onMoleClick: function() {
        if (event.target.classList.contains('animate')) {
            console.log(event.timeStamp);
            game.addPoint();
            console.log(game.currentPoints);
        }
    },

    endTimer: function() {}
};

/*
    :: only one point per click
*/