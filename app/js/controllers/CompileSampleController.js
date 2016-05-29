'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile) {

        $scope.appendDivToElement = function(markup) {
            $compile(markup)($scope).appendTo(angular.element('#appendHere'));
        }
    });