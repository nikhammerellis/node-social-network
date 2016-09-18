(function(){
	angular.module('TimeSuck', ['ui.router', 'ngFileUpload'])
		   .config(function($stateProvider, $urlRouterProvider){

		   	$urlRouterProvider.otherwise('/');

		   	$stateProvider
		   	.state('signUp', {
		   		url: "/signup",
		   		templateUrl: "app/signup/signup.html",
		   		controller: "SignUpCtrl"
		   	})
		   	.state('editProfile', {
		   		url: "/edit-profile",
		   		templateUrl: "app/profile/edit-profile-view.html",
		   		controller: "EditProfileCtrl"
		   	})
		   	.state('main', {
		   		url: "/",
		   		templateUrl: "app/main/main.html",
		   		controller: "MainCtrl"
		   	})
		   })
}());