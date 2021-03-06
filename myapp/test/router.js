angular.module("myapp",["ngRoute","controller","server"])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'index.html',
                controller:"index"
            })
            .when('/list/:id',{
                templateUrl:'list.html',
                controller:"list"
            })
            .when('/show/:id',{
                templateUrl:'show.html',
                controller:"show"
            })
            .otherwise({redirectTo:'/'});
    }]);
