(function () {
    'use strict';

    var injectParams = ['$scope', '$rootScope', 'ticTacToeFactory', 'signalRCommunicationService'];

    var ticTacToeController = function ($scope, $rootScope, ticTacToeFactory, signalRCommunicationService) {
        function init() {
            $scope.ttt = ticTacToeFactory.getBoxes();
        };
        signalRCommunicationService.initialize();

        $rootScope.$on('publishPlayersData', function (e, row, col, playerId) {
            $rootScope.$apply(function () {


            });
        });

        init();
    };

    ticTacToeController.$inject = injectParams;
    angular.module('TicTacToeApp').controller('ticTacToeController', ticTacToeController);
}());