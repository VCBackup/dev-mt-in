devMtIn.controller('mainCtrl', function($scope, mainService){
    var userProfile = window.localStorage.getItem("userProfile");
    console.log(userProfile);
    if (window.localStorage.getItem("userProfile") == false){
        return $scope.header = 'INITIAL VIEW NO DATA';
    }
        $scope.header = window.localStorage.getItem('userProfile');

    $scope.savePersonalData = function(fullName, tagline, profileUrl, bio){
            var userProfile = mainService.createProfile(fullName, tagline, profileUrl, bio);
            $scope.header = userProfile.fullName;
            window.localStorage.setItem("userProfile", JSON.stringify(userProfile));
            console.log("Locally Stored Item: " + window.localStorage.getItem("userProfile"));
            return userProfile;
    }
    
});