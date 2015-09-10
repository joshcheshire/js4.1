// P A R T  1 //


// angular.module('myApp', [])

// var mainControllerFunc = function($scope){
// 	$scope.title = " First Angular Page";
// 	$scope.myHeader = false
// 	$scope.myText = false
// 	$myList = false

	

// $scope.buttonClick = function(){

// 	// console.log("you clicked a button")

// 	$scope.myHeader = !$scope.myHeader
// 	$scope.myText = !$scope.myText



// 	}

// $scope.click2 = function(){

// 	$scope.myList = !$scope.myList
	
// 	}

// }


// angular.module('myApp')
// .controller('mainController' , ['$scope', mainControllerFunc])

// ---------------------------------------------------------

// P A R T  2 //

angular.module('myApp', [])

var mainControllerFunc = function($scope){

$scope.mouseenter = function(){

	$scope.hovering = true;

}

$scope.mouseleave = function(){


	$scope.hovering = false;
	console.log(event)
}



}

angular.module('myApp')
.controller('mainController' , ['$scope', mainControllerFunc])