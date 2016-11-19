let controller = {

    userClick: null,
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

        var thisClick = event.timeStamp, lastClick;

        
        if (event.target.classList.contains('animate')) {
            // if the click is too close to the last click
            // if event is too close to last one, don't add a point
                // time stamp approach
            
            var $test = event.tyoe;
            console.log('EVENT TEST: ' + $test);


            console.log(event);
            console.log('time stamp: ' + event.timeStamp);
            
            game.addPoint();
            console.log(game.currentPoints);
        }
    },

    endTimer: function() {}
};

/*
    :: only one point per click
*/