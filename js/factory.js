
mainApp.factory('dataContent',['$http',function($http){
	return{
		getData:function(test){
		return $http({
			method:'get',
			url: 'http://test/' ,
			params:{
				test:test
			}
		})}
	}
}
])




