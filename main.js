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

// angular.module('myApp', [])






// var mainControllerFunc = function($scope){
// $scope.header = " Bacon Meats"
// $scope.header2 = " Full Measures"
// $scope.gotobacon = true
// $scope.gotoblue= true
// var exclaim = 0


// $scope.mouseenter = function(){

// 	$scope.hovering = true;

// }

// $scope.mouseleave = function(event){


// 	$scope.hovering = false;
// 	console.log(event)
// }




// $scope.headerClick = function(){

// 	exclaim++
// 	if( exclaim <5){

// 		$scope.header += '!!!'
// 		$scope.header2 += '!!!'
// 	}

// }

// $scope.Really = function(event){

// 	if( !confirm('seriously?')){
// 		$scope.gotobacon = false
// 		event.preventDefault()
// 	}

// }

// $scope.bluemeth = function(event){


// 	if(!confirm('really?!?')){
// 		$scope.gotoblue= false
// 		event.preventDefault()
		
// 		}



// 	}

// }

// angular.module('myApp')
// .controller('mainController' , ['$scope', mainControllerFunc])

// ----------------------------------------------------------



//  P A R T  3 //

angular.module ('myApp', [])



var mainControllerFunc = function($scope){
$scope.popup = false






$scope.showPopup = function(){

	$scope.popup = true
}




$scope.dismissPopup = function(){
        $scope.popup = false
    }






}



angular.module('myApp').controller('mainController' , [ '$scope', mainControllerFunc])























