devMtIn.controller('mainCtrl', function($scope, mainService){

    if (userProfile){
        var userProfile = JSON.parse(window.localStorage.getItem("userProfile"));
        console.log('This is the current user name: ' + userProfile.fullName);
        $scope.fullName = userProfile.fullName;
        $scope.tagline = userProfile.tagline;
        $scope.profileUrl = userProfile.profileUrl;
        $scope.bio = userProfile.bio;
        return userProfile;
    }

    $scope.currentLocation = mainService.myLocation();

    $scope.savePersonalData = function(fullName, tagline, profileUrl, bio){
        var userProfile = mainService.createProfile(fullName, tagline, profileUrl, bio);
        window.localStorage.setItem("userProfile", JSON.stringify(userProfile));
        console.log("Locally Stored Item: " + window.localStorage.getItem("userProfile"));
        $scope.currentProfile = userProfile;
        return userProfile;
    }

    $scope.updatePersonalData = function(fullName, tagline, profileUrl, bio){
        var userProfile = mainService.updateProfile(newFullName, newTagline, newProfileUrl, newBio);
        window.localStorage.setItem("userProfile", JSON.stringify(userProfile));
        console.log("Locally Stored Item: " + window.localStorage.getItem("userProfile"));
        return userProfile;
    }
    
    $scope.currentProfile = mainService.currentProfile(JSON.parse(window.localStorage.getItem("userProfile")));

});