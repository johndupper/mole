let controller = {

    lastClickTime: 0,
    timeRemaining: 35,
    timeInterval: null,
    gamePlay: null,
    gameInProgress: false,

    onPlayButtonPressed: function() {

        if (!controller.gameInProgress) {
            
            $('#header-time').removeClass('animated swing infinite');
            controller.gameInProgress = true;
            controller.gamePlay = setInterval(function() {
                controller.animateGame(game.generateRandomMole());
            }, 1000); // sets game speed

            $('#userScore').text('0');
            $('#playBtn').text('Play Game');
            $('#userTime').text(controller.timeRemaining);

            controller.startTimer();
        }
    },

    startTimer: function() {
        controller.timeInterval = setInterval(function() {
            controller.timer();
        }, 1000);
    },

    timer: function() {
        controller.timeRemaining -= 1;
        
        if (controller.timeRemaining < 1) {    
            controller.gameInProgress = false;
            $('#header-time').addClass('animated swing infinite');
            
            // stop game & timer
            clearInterval(controller.gamePlay);
            clearInterval(controller.timeInterval);
            
            controller.reset();
            return;
        }
        $('#userTime').text(controller.timeRemaining);
    },

    animateGame: function(mole) {
        $('.mole').removeClass('move');
        $('#' + mole).addClass('move');
    },

    onMoleClick: function() {
        // compares times of clicks: if too fast, no second point
        if (event.target.classList.contains('move')) {
            let secondClickTime = event.timeStamp;
            let timeDiff = secondClickTime - controller.lastClickTime;
            
            if (timeDiff > 400) {
                game.addPoint();
                $('#userScore').text(game.currentPoints);
            }
            
            secondClickTime = 0;
            controller.lastClickTime = event.timeStamp;
        }
    },
    
    reset: function() {
        game.resetGame();
        
        // reset controller
        controller.lastClickTime = 0;
        controller.timeRemaining = 35;
        controller.timeInterval = null;
        controller.gamePlay = null;
        controller.gameInProgress = false;
        
        
        $('.mole').removeClass('move');
        // change UI for end of game
        $('#userTime').text('0');
        $('#playBtn').text('Play Again?');
    }
};
