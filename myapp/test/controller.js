angular.module("controller",["server"])
    .controller("index",["$scope","$http","indexData",function($scope,$http,indexData){
        indexData.then(function(data){
            $scope.data=data.data;
        })
    }])