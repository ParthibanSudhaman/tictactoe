(function () {
    'use strict';

    var injectParams = ['$rootScope', 'signalRServer'];
    var signalRCommunicationService = function ($rootScope, signalRServer) {
        var ticTacToeProxy = null;

        var initialize = function () {

            //#region connection and proxy
            // Getting the connection object
            var connection = jQuery.hubConnection(signalRServer);

            // Creating proxy
            this.ticTacToeProxy = connection.createHubProxy('TicTacToeHub');
            //#endregion

            // Server calls the procedure to broadcast greeting message
            this.ticTacToeProxy.on('acceptGreetings', function (message) {
                // Publisher
                $rootScope.$emit('publishGreetings', message);
            });

            // Server calls the procedure to broadcast box id
            this.ticTacToeProxy.on('acceptPlayerInput', function (row, col, playerId) {
                // Publisher
                $rootScope.$emit('publishPlayersData', row, col, playerId);
            });

            // Start the connection
            connection.start();
        };
        
        // Push to signalr
        var sendTic = function (row, col, groupName, playerId) {
            this.ticTacToeProxy.invoke('AcceptTic', row, col, groupName, playerId);
        };

        return {
            initialize: initialize,
            sendTic: sendTic
        };
    };

    signalRCommunicationService.$inject = injectParams;
    angular.module('TicTacToeApp').service('signalRCommunicationService', signalRCommunicationService);
}());