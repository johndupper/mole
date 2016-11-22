let controller = {

    lastClickTime: 0,
    timeRemaining: 50,
    timeInterval: null,
    gamePlay: null,
    gameInProgress: false,

    // start game
    onPlayButtonPressed: function() {
        
        // should we start a new game?
        if (controller.gameInProgress) {
            
            // don't start game
            console.log('play - gameInProgress: ' + controller.gameInProgress);
            
        } else {
            
            console.log('--- starting new game ---');
            
            // gameInProgress = true
            controller.gameInProgress = true;
            console.log('play - gameInProgress: ' + controller.gameInProgress);
            
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

    // start timer
    startTimer: function() {
        // call timer function, start countdown
        controller.timeInterval = setInterval(function() {
            controller.timer();
        }, 1000);
    },

    // timer logic
    timer: function() {
        
        // subtract a second
        controller.timeRemaining -= 1;
        
        // if time is up
        if (controller.timeRemaining < 1) {
            
            // gameInProgress = false
            controller.gameInProgress = false;
            console.log('time up - gameInProgress: ' + controller.gameInProgress);
            
            // stop game & timer
            clearInterval(controller.gamePlay);
            clearInterval(controller.timeInterval);
            
            // call reset game
            controller.reset();
            return;
        }
        $('#userTime').text(controller.timeRemaining);
    },

    // show or hide moles
    animateGame: function(mole) {
        $('.mole').removeClass('move');
        $('#' + mole).addClass('move');
    },

    // score point
    onMoleClick: function() {
        if (event.target.classList.contains('move')) {
            let secondClickTime = event.timeStamp;
            let timeDiff = secondClickTime - controller.lastClickTime;
            
            
            if (timeDiff < 400) {
                console.log('blocked point');
            } else {
                game.addPoint();
                $('#userScore').text(game.currentPoints);
                console.log('score: ' + game.currentPoints);
            }
            
            secondClickTime = 0;
            controller.lastClickTime = event.timeStamp;
        }
    },
    
    reset: function() {
        
        // reset game
        game.resetGame();
        
        // reset controller
        controller.lastClickTime = 0;
        controller.timeRemaining = 5;
        controller.timeInterval = null;
        controller.gamePlay = null;
        controller.gameInProgress = false;
        
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