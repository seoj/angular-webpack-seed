angular.module('angular-webpack-seed').service('$defaultRoute', function()
{
    this.initialize = function(vm)
    {
        vm.message = 'hello';
    };
});