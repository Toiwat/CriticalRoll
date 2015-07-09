angular
		.module('CriticalRoll')
		.controller('IntroController', function ($scope, $state, $ionicSlideBoxDelegate, $timeout) {

			$scope.slideIndex = 0;

			$scope.next = function () {
				if ($scope.slideIndex < $scope.slidesCount()) {
					$ionicSlideBoxDelegate.next();
				} else {
					window.localStorage['didTutorial'] = true;
					$state.go('main');
					$timeout(function () {
						$scope.slideIndex = 0;
					}, 1000);
				}
			};

			$scope.previous = function () {
				$ionicSlideBoxDelegate.previous();
			};

			$scope.slideChanged = function (index) {
				$scope.slideIndex = index;
			};

			$scope.slidesCount = function () {
				return $ionicSlideBoxDelegate.slidesCount() - 1;
			};
		});