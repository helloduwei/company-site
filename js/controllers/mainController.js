
mainApp.controller('main', function ($scope,$rootScope,$route,$window,$routeParams,dataContent) {
	$scope.pageClass = 'main';
	console.log('main');

	  $scope.myInterval = 2000;
	  $scope.slides = [
	  	{
	  		image:'img/banner.png'
	  	},{
	  		image:'img/banner.png'
	  	},{
	  		image:'img/banner.png'
	  	}
	  ];

});




