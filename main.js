angular.module('myApp', [])

var mainControllerFunc = function($scope){
	$scope.title = " First Angular Page";
	$scope.myHeader = false
	$scope.myText = false


	

$scope.buttonClick = function(){

	// console.log("you clicked a button")

	$scope.myHeader = !$scope.myHeader
	$scope.myText = !$scope.myText



	}

}






angular.module('myApp')
.controller('mainController' , ['$scope', mainControllerFunc])