let game = {

    board: [1, 2, 3],
    numberOfMoles: 3,
    currentPoints: 0,
    

    generateRandomMole: function() {
        return (Math.floor(Math.random() * 3) + 1);
    },

    addPoint: function() {
        this.currentPoints += 1;
    },

    startGameTimer: function() {},
    endGameTimer: function() {}
};




/*
:: don't allow multiple of the same random number    
*/