let controller = {

    lastClickTime: 0,
    timeRemaining: 5,
    timeInterval: null,
    endOfGame: false,

    // start game
    onPlayButtonPressed: function() {
        setInterval(function() {
            controller.animateGame(game.generateRandomMole());
        }, 400); // interval to stop animation
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
            // stop animating
            $('#userTime').text('Game over!');
            clearInterval(controller.timeInterval);
            controller.reset(); // function called to reset game
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
            let secondClickTime = event.timeStamp;
            let timeDiff = secondClickTime - controller.lastClickTime;
            
            if (timeDiff < 400) {
                console.log('blocked point: ' + timeDiff + 'ms between');
            } else {
                game.addPoint();
                console.log('score: ' + game.currentPoints);
            }
            secondClickTime = 0;
            controller.lastClickTime = event.timeStamp;
        }
    },

    endTimer: function() {},
    
    reset: function() {}
};

/*
    :: refactor onMoleClick()
    :: make reset function (game too)
*/