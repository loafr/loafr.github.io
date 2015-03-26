angular.module('lrApp').controller('MainCtrl', function($scope, mainService) {
	$scope.showInfo1 = true;
	$scope.showInfo2 = false;
	$scope.showInfo3 = true;
	$scope.showInfo4 = false;
	$scope.showInfo5 = true;
	$scope.showInfo6 = false;
	$scope.showInfo1 = function() { //http://jsfiddle.net/vBzkV/32/
		$scope.showInfo1 = !$scope.showInfo1;
	};
	$scope.showInfo2 = function() { 
		$scope.showInfo2 = !$scope.showInfo2;
	};
	$scope.showInfo3 = function() { 
		$scope.showInfo3 = !$scope.showInfo3;
	};
	$scope.showInfo4 = function() { 
		$scope.showInfo4 = !$scope.showInfo4;
	};
	$scope.showInfo5 = function() { 
		$scope.showInfo5 = !$scope.showInfo5;
	};
	$scope.showInfo6 = function() { 
		$scope.showInfo6 = !$scope.showInfo6;
	};
});
