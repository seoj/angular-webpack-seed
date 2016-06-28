require('./styles/entry.css');

angular.module('angular-webpack-seed', [ 'ui.router' ]);

angular.module('angular-webpack-seed').config(function($urlRouterProvider)
{
    $urlRouterProvider.otherwise('/');
});

requireAll(require.context('./services', true, /\.js$/));
requireAll(require.context('./routes', true, /\.js$/));

function requireAll(require)
{
    require.keys().forEach(require);
}