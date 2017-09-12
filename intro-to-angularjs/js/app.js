var app = angular.module('time2hack', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.title = 'Time to Hack';
    $scope.subTitle = 'Place to find best Hacks and Tweaks...';
    $scope.showAlert = function(str){
    alert(str);
}

}])