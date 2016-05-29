'use strict';

eventsApp.controller('EventController',
    function ($scope, eventData, $anchorScroll, $routeParams, $route) {
        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent($routeParams.eventId);

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);