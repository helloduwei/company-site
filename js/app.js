var mainApp = angular.module('mainApp', ['ngRoute','ui.bootstrap']);

mainApp.run(['$location', '$rootScope', '$window', '$timeout',
    function ($location, $rootScope, $window, $timeout) {
        $rootScope.page = {
            title : ''
        }

    }
]);




