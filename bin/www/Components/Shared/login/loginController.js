angular.module('MolinaKR').controller('loginController',['$scope','$state',function($scope,$state)
{
    $scope.validateCredentials=function()
    {
            if($scope.username!=undefined &&  $scope!=undefined)
            {
                $state.go('home');
            }
    };
 
}
]);