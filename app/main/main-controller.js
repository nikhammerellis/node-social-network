(function(){
	angular.module('TimeSuck')
	.controller('MainCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval){

		if(localStorage['User-Data'] !== undefined){
			$scope.user = JSON.parse(localStorage['User-Data']);
			console.log($scope.user);
		}

		$scope.sendWaste = function(event){
			if(event.which === 13){
				var request = {
					user: $scope.user.username || $scope.user.email,
					userId: $scope.user._id,
					userImage: $scope.user.image,
					content: $scope.newWaste
				};
				
				$http.post('api/waste/post', request).success(function(response){
					console.log(response);
					$scope.wastes = response;
				}).error(function(error){
					console.error(error);
				})
			};
		};

		function getWastes(initial){

		}

	}]);
}());