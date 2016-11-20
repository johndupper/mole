let controller = {

    lastClick: 0,
    timeRemaining: 5,
    timeInterval: null,
    endOfGame: false,

    // start game
    onPlayButtonPressed: function() {
        setInterval(function() {
            controller.animateGame(game.generateRandomMole());
        }, 400);
        controller.startTimer();
    },

        // start timer
    startTimer: function() {
        controller.timeInterval = setInterval(function() {
            controller.timer();
        }, 1000);
    },

    // timer logic
    timer: function() {
        controller.timeRemaining -= 1;
        if (controller.timeRemaining < 1) {
            clearInterval(controller.timeInterval);
            controller.reset();
            return;
        }

        $('#userTime').text(controller.timeRemaining);
    },

    // show or hide moles
    animateGame: function(mole) {
        $('.hole').removeClass('animate');
        $('#' + mole).addClass('animate');
    },

    // score point
    onMoleClick: function() {
        if (event.target.classList.contains('animate')) {
            let thisClick = event;
            console.log('this: ' + thisClick.type, thisClick.timeStamp);
            console.log('last: ' + controller.lastClick.type, controller.lastClick.timeStamp);
            thisClick = 0;
            controller.lastClick = event;
        }
    },

    endTimer: function() {},
    
    reset: function() {}
};

/*
    :: only one point per click
    :: make reset function (game too)
*/