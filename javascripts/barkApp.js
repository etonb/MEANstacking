var app = angular.module("barkApp", []);

app.controller('mainController', function($scope){
	$scope.posts = [];
	$scope.newPost = {barker: '', bark: '', bark_time: ''};
	
	$scope.post = function() {
		$scope.newPost.bark_time = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {barker: '', bark: '', bark_time: ''};
	}
});

app.controller('authController', function($scope){
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';
	
	$scope.login = function(){
		$scope.error_message = 'login request for ' + $scope.user.username;
	};
	
	$scope.register = function(){
		$scope.error_message = 'registration request for ' + $scope.user.username;
	};
});