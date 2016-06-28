angular.module('angular-webpack-seed').config(function($stateProvider)
{
    $stateProvider.state('/', {
        url : '/',
        template : require('../templates/DefaultRouteTemplate.html'),
        controller : 'DefaultRouteCtrl',
        controllerAs : 'vm'
    });
});

angular.module('angular-webpack-seed').controller('DefaultRouteCtrl', function($defaultRoute)
{
    var vm = this;

    $defaultRoute.initialize(vm);
});