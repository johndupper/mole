let game = {

    currentPoints: 0,
    lastMole: 1,

    generateRandomMole: function() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        if (randomNumber === this.lastMole) {
            game.generateRandomMole();
        }
        this.lastMole = randomNumber;
        return randomNumber;
    },

    addPoint: function() {
        game.currentPoints += 1;
    },
    
    resetGame: function() {
        game.currentPoints = 0;
        game.lastMole = 1;
    }
};