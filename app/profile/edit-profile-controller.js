(function(){
	angular.module('TimeSuck')
	.controller('EditProfileCtrl', ['Upload', '$scope', '$state', '$http', function(Upload, $scope, $state, $http){
		
		$scope.user = JSON.parse(localStorage['User-Data']) || undefined;

		$scope.$watch(function(){
			return $scope.file;
		}, function(){
			$scope.upload($scope.file);
		});

		$scope.upload = function(file){
			if(file){
				Upload.upload({
					url: 'api/profile/updatePhoto',
					method: 'POST',
					data: {userId: $scope.user._id},
					file: file
				}).progress(function(event){
					console.log("firing!");
				}).success(function(data){
					console.log("file sent to back end profile controller");
				}).error(function(error){
					console.log(error);
				})
			}
		};

		$scope.updateUsername = function(){
			var request = {
				userId: $scope.user._id,
				username: $scope.user.username
			}
			$http.post('api/profile/updateUsername', request).success(function(){
				console.log("successfully updated username");
			}).error(function(err){
				console.log("error");
			})
		}

		$scope.updateBio = function(){
			var request = {
				userId: $scope.user._id,
				bio: $scope.user.bio
			}
			$http.post('api/profile/updateBio', request).success(function(){
				console.log("Successfully update user bio");
			}).error(function(err){
				console.log(err);
			})
		}

	}])
}());











