let game = {

    currentPoints: 0,
    lastMole: 1,

    generateRandomMole: function() {
        var randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === this.lastMole) {
            game.generateRandomMole();
        }
        this.lastMole = randomNumber;
        return randomNumber;
    },

    addPoint: function() {
        this.currentPoints += 1;
    }
};


/*
:: allow only one point per animated mole
*/