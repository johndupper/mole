let controller = {

    board: null,

    onPlayButtonPressed: function() {
        console.log('play button pressed.');
        console.log('pre-click: ' + game.currentPoints);
        game.addPoint();
        console.log('click: ' + game.currentPoints);
    },
    
    animateGame: function(mole) {
        $('#' + mole).addClass('animate');
        
    }
};