angular.module("server",[])
    .factory("indexData",function($http){
        return $http({"url":"index.txt"})
    })