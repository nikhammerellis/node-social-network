(function(){
	angular.module('TimeSuck')
	.controller('SignUpCtrl', ['$scope', '$state', '$http', function($scope, $state, $http){
		$scope.createUser = function(){
			console.log($scope.newUser);
			$http.post('api/user/signup', $scope.newUser).success(function(response){

			}).error(function(error){
				console.error(error);
			});
		}
	}]);
}());