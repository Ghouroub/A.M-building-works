(function() {
	var app = angular.module("app");
	app.controller("mainCtrl", searchCtrl)
	
	function searchCtrl($scope,$http) {
	   
	 $scope.adminShow=false;
	
	    $scope.goToAdmin=function(){
	     $scope.adminShow=true;
	     $scope.inputMail="";
	     $scope.inputPassword="";
	    }
	
	scope.saveData=function(){
		var data ={
			mail:scope.inputMail,
			password:scope.inputPassword,
		}
	}
	
	var JSONdata=JSON.stringify(data)
	localStorage.setItem("data",JSONdata)
	
	scope.getData=function(){
		var data=localStorage.getItem("data")
		var parseData=JSON.parse(data);
	}
	}

})();