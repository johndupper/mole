var $;
let controller = {
    buildGameBoard: function() {
        'use strict';
        for (let i = 1; i <= game.board.length; i += 1) {
            let $div = $('<div>');
            $div.attr('id', i);
            $div.addClass('moleHole');
            $('#game').append($div);
        }
    },
};




// end
$(function() {
    controller.buildGameBoard();
});