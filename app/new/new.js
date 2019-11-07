var newfilm = angular.module("newComponent", []);


newfilm.controller("newController", ["$scope", "$http", function($scope, $http){

    $scope.submit =  function(form){

    console.log(form)
    }

}]);
