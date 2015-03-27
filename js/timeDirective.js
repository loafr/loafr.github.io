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

// var slideToggle = function() {
//   console.log('i am defined');
// };

// angular.module('lrApp').directive('toggle', function() {
//     return function($scope, $elem, $attrs) {
//         $scope.$on('event:toggle', function(ev,num) {
//             if(num===$attrs.toggle){
//                 $elem.slideToggle();
//             }
//         });
//     };
// });