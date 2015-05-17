angular.module('booksController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','$location', function($scope, $http,$location) {
		$scope.loading = false;
		
		$scope.bookSearch = {};
		
		$scope.bookList = [];
		
		$scope.book = {};
		
		$scope.appTitle = "IT E Books Download";
		
		$scope.isBookdetails = false;
		//backend rest calls
		$scope.callBookAPI = function(){
			$scope.bookList = [];
			$scope.loading = true;
				// Simple GET with booksearch query string
				$http.get('/queryBook/'+$scope.bookSearch.queryText).
				  success(function(data, status, headers, config) {
					  console.log(data);
					  $scope.bookList = data.Books;
						$scope.loading = false;
				  }).
				  error(function(data, status, headers, config) {
					  console.log(data);
				  });
		};
		
		//rest search value
		$scope.getBookDetailsByID = function(bookID){
				$scope.book = {};
				$location.path("/book/"+bookID);
				$scope.loading = true;
				$scope.isBookdetails = true;
			// Simple GET request with bookid as query string :
				$http.get('/bookByID/'+bookID).
				success(function(data, status, headers, config) {
					  console.log(data);
					  $scope.book = data;
						$scope.loading = false;
				  }).
				  error(function(data, status, headers, config) {
					  console.log(data);
				  });
		};
		
		//show home screen
		$scope.goHome = function(){
			$scope.isBookdetails = false;
			$location.path("/");
		}
	}]);