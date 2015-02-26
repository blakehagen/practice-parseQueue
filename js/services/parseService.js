var app = angular.module('parseQ');

app.service('parseService', function($http) {

	this.postQuestion = function(yourQuestion) {
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/parseQ',
			data: {
				question: yourQuestion,
				status: 'red'
			},
		});
	}

	this.getData = function() {
		return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/parseQ'
		});
	}

	this.updateData = function(objectId) {
		return $http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/parseQ/' + objectId,
			data: {
				status: 'yellow'
			}
		});
	}


});