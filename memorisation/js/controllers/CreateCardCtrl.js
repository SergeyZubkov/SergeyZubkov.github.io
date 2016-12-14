angular.module('controllers.CreateCardCtrl', [])

.controller('CreateCardCtrl', function($scope, DataService, $routeParams, $location) {

	$scope.backToDeck = function() {
		$location.path('/deck/'+ $routeParams.deckId)
	}

	$scope.submit = function(title,description) {
		if($scope.createCardForm.$valid) {
			DataService.createCard($routeParams.deckId, {title: title, description: description});
		}
		$scope.title = '';
		$scope.description = '';
	}
});
