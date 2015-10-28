mainApp.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider
            .when('/', {
                name:'main',
                templateUrl: 'pages/main.html',
                controller: 'main'
            })
            .when('/company', {
                name:'company',
                templateUrl: 'pages/company.html',
                controller: 'company'
            })
            .when('/culture', {
                name:'culture',
                templateUrl: 'pages/culture.html',
                controller: 'culture'
            })
            .when('/reaserch', {
                name:'reaserch',
                templateUrl: 'pages/reaserch.html',
                controller: 'reaserch'
            })
            .when('/career', {
                name:'career',
                templateUrl: 'pages/career.html',
                controller: 'career'
            })
            .when('/login', {
                name:'login',
                templateUrl: 'pages/login.html',
                controller: 'login'
            })
            .otherwise({
                redirectTo: '/'
            });

    }
]);