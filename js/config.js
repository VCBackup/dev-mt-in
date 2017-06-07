devMtIn.config(function($routeProvider, $locationProvider){
$routeProvider

    .when('/', {
        templateUrl: 'pages/initial.html',
        controller: 'mainCtrl'
    })
    .when('/landing', {
        templateUrl: 'pages/landing.html',
        controller: 'mainCtrl'
    })
    .when('/friends',{
        templateUrl: 'pages/friends.html',
        controller: 'mainCtrl'
    })
    .when('/profile',{
        templateUrl: 'pages/profile.html',
        controller: 'mainCtrl'
    })
    .when('/search', {
        templateUrl: 'pages/search.html',
        controller: 'mainCtrl'
    })
    .when('/update', {
        templateUrl: 'pages/update.html',
        controller: 'mainCtrl'
    })

    $locationProvider.html5Mode(true);
});