angular.module('booksApp', ['ngRoute','booksController'])


.config(['$routeProvider',function($routeProvider){
		
	$routeProvider.when("/",{templateUrl:"public/partials/booklisting.html"})
				
				  .when("/book/:postID",{templateUrl:"public//partials/bookDetails.html"})
				  
				  .otherwise({redirectTo:"/"});
}]);
