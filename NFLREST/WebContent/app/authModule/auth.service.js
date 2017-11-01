angular.module('authModule').factory('authService', function($http, $cookies) {

	// Anything given to service obj will be public
	var service = {};

	// Private: Store the user's id and email in cookies for use later
	var saveToken = function(user) {
		$cookies.put('userId', user.id);
		$cookies.put('userEmail', user.email);
	}

	// Public: Return an object with a user's id and email properties from the cookies
	service.getToken = function() {
		var token = {};
		token.id = $cookies.get('userId');
		token.email = $cookies.get('userEmail');
		return token;
	}

	// Private: Remove user cookies
	var removeToken = function() {
		$cookies.remove('userId');
		$cookies.remove('userEmail');
	}
	
	// Use the auth/register route to create and authenticate the user
	// On success, use saveToken to store the users id/email
	service.register = function(user) {
		console.log(user)
		user.points = "0";
		return $http({
			method : 'POST',
			url : 'rest/auth/register',
			headers : {
				'Content-Type' : 'application/json'
			},
			data: user
		}).then(function(res){
			console.log(res.data)
			// save user to session so they don't have to log in after registering
			saveToken(res.data);
			return res;
		});
	}

	// Use the auth/login route to authenticate the user
	// On success, use saveToken to store the users id/email
	service.login = function(user) {
		return $http({
			method : 'POST',
			url : 'rest/auth/login',
			headers : {
				'Content-Type' : 'application/json'
			},
			data: user
		}).then(function(res){
			saveToken(res.data);
			return res;
		});
	}

	// Use the auth/logout route to remove the users session
	// On success, use removeToken to remove the id and email cookies
	service.logout = function() {
		return $http({
			method: 'POST',
			url: 'rest/auth/logout',
		}).then(function(res){
			removeToken();
		});
	}
	return service;
})