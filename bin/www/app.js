
var app= angular.module('MolinaKR', ['ui.router', 'oc.lazyLoad','ngMaterial','ngAnimate']);

app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider','$mdThemingProvider',
  	function($httpProvider, $stateProvider, $urlRouterProvider,$mdThemingProvider) {




	
    $stateProvider
	      .state('login', {
	      	name:'login',
            url:'/login',
	        templateUrl: 'Components/Shared/login/login.html',
	        controller: 'loginController',
	        resolve: {
	            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load([{
	                    name: 'GasApp',
	                    files: ['Components/Shared/login/loginController.js']
	                }]);
	            }]
	        }
	      })
		   .state('home', {
	      	name:'home',
            url:'/home',
			parent:'template',
	        templateUrl: 'Components/home/home.html',
	        controller: 'homeController',
	        resolve: {
	            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load([{
	                    name: 'GasApp',
	                    files: ['Components/home/homeController.js']
	                }]);
	            }]
	        }
	      })
		  .state('playvideo', {
	      	name:'playvideo',
            url:'/playvideo',
			parent:'template',
	        templateUrl: 'Components/playvideo/playvideo.html',
	        controller: 'playvideoController',
	        resolve: {
	            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load([{
	                    name: 'GasApp',
	                    files: ['Components/playvideo/playvideoController.js']
	                }]);
	            }]
	        }
	      })
		  .state('template', {
	      	name:'template',
	        templateUrl: 'Components/Shared/template/template.html',
	        controller: 'templateController',
	        resolve: {
	            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load([{
	                    name: 'GasApp',
	                    files: ['Components/Shared/template/templateController.js']
	                }]);
	            }]
	        }
	      })
		  .state('menudashboard', {
	      	name:'menudashboard',
            url:'/menudashboard',
			parent:'template',
	        templateUrl: 'Components/menudashboard/menudashboard.html',
	        controller: 'menudashboardController',
	        resolve: {
	            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
	                return $ocLazyLoad.load([{
	                    name: 'GasApp',
	                    files: ['Components/menudashboard/menudashboardController.js']
	                }]);
	            }]
	        }
	      })
		  ;

            $urlRouterProvider.otherwise('/login');

      }

         	 	
      ]);


app.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
   };
});