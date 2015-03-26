angular.module('lrApp').controller('MainCtrl', function($scope, mainService) {
	$scope.showInfo = false;
	$scope.showInfo = function() {
		$scope.showInfo = !$scope.showInfo;
	};
});
