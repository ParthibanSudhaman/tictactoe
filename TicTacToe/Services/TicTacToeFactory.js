(function () {
    'use strict';
    var ticTacToeFactory = function () {
        var factory = {};

        factory.getBoxes = function () {
            var ttt = [
                [{ Id: 0, value: '', imgSrc: '/app/images/ttt/blank.jpg', imgAlt: '' },
                    { Id: 1, value: '', imgSrc: '/app/images/ttt/blank.jpg', imgAlt: '' }, { Id: 2, value: '', imgSrc: '/app/images/ttt/blank.jpg', imgAlt: '' }],
                [{ Id: 3, value: '', imgSrc: '/app/images/ttt/blank.jpg', imgAlt: '' },
                    { Id: 4, value: '', imgSrc: '/app/images/ttt/blank.jpg', imgAlt: '' }, { Id: 5, value: '', imgSrc: '/app/images/ttt/blank.jpg', imgAlt: '' }],
                [{ Id: 6, value: '', imgSrc: '/app/images/ttt/blank.jpg', imgAlt: '' },
                    { Id: 7, value: '', imgSrc: '/app/images/ttt/blank.jpg', imgAlt: '' }, { Id: 8, value: '', imgSrc: '/app/images/ttt/blank.jpg', imgAlt: '' }],
            ];
            return ttt;
        }

        return factory;

    };
    angular.module('TicTacToeApp').factory('ticTacToeFactory', ticTacToeFactory);

}());