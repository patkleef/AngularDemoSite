    'use strict';

    eventsApp.directive('mySample', function($compile) {
        return {
            restrict: '',
            template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br />",
            scope: {
                
            }
        };
    });
