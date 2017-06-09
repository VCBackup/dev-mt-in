devMtIn.config(function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/')
    $stateProvider
        .state('initial', {
                templateUrl: 'pages\\initial.html',
                url: '/',
                controller: 'mainCtrl'
            })
        .state('landing', {
                templateUrl: 'pages\\landing.html',
                url: '/landing',
                controller: 'mainCtrl'
            })
        .state('friends',{
                templateUrl: 'pages\\friends.html',
                url: '/friends',
                controller: 'mainCtrl'
            })
        .state('profile',{
                templateUrl: 'pages\\profile.html',
                url: '/profile',
                controller: 'mainCtrl'
            })
        .state('search', {
                templateUrl: 'pages\\search.html',
                url: '/search',
                controller: 'mainCtrl'
            })
        .state('update', {
                templateUrl: 'pages\\update.html',
                url: '/update',
                controller: 'mainCtrl'
            })

});