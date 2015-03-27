angular.module('lrApp').directive('clock', function(dateFilter, $timeout) {
    return {
        restrict: 'E',
        scope: {
            format: '@'
        },
        link: function($scope, $elem, $attr){
            var updateTime = function(){
                var now = Date.now();
                $elem.html(dateFilter(now, $scope.format));
                $timeout(updateTime, now % 250);
            };
            updateTime();
        }
    };
});