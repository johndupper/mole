let controller = {

    lastClickTime: 0,
    timeRemaining: 15,
    timeInterval: null,
    gamePlay: null,
    gameInProgress: false,

    onPlayButtonPressed: function() {
        if (controller.gameInProgress) {
            // game in progress, do not start another
        } else {
            controller.gameInProgress = true;
            // start a game
            controller.gamePlay = setInterval(function() {
                controller.animateGame(game.generateRandomMole());
            }, 1000);
            
            $('#userScore').text('0');
            $('#playBtn').text('Play Game');
            $('#userTime').text(controller.timeRemaining);
            // start timer
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
            // gameInProgress = false
            controller.gameInProgress = false;
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
        if (event.target.classList.contains('move')) {
            let secondClickTime = event.timeStamp;
            let timeDiff = secondClickTime - controller.lastClickTime;
            
            if (timeDiff < 400) {
                console.log('blocked point');
            } else {
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
        controller.timeRemaining = 15;
        controller.timeInterval = null;
        controller.gamePlay = null;
        controller.gameInProgress = false;
        
        $('.mole').removeClass('move');
        // change UI for end of game
        $('#userTime').text('Game over!');
        $('#playBtn').text('Play Again?');
    }
};

/*
    right now point scoring is based on .hole div having animate as a class.
    animation keyframe is tied to the mole itself
    <hole> --> <mole-box> --> <mole>





    :: don't allow button to create many games
    :: refactor onMoleClick()
    :: make reset function (game too)
    :: show high score on game over
*/