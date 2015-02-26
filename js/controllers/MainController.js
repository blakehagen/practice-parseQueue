var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService){

	$scope.postData = function() {
		parseService.postQuestion($scope.yourQuestion).then(function(response){
			$scope.getParseData();
			$scope.yourQuestion = "";
		})
	}

	$scope.getParseData = function() {
		parseService.getData().then(function(response) {
			console.log(response);
			$scope.questions = response.data.results;
		})
	}

	$scope.getParseData();

	$scope.changeStatus = function(objectId) {
		parseService.updateData(objectId).then(function(response){
			$scope.getParseData();
		})
	}





});