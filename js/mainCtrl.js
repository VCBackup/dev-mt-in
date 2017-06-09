devMtIn.controller('mainCtrl', function($scope, mainService){
    var userProfile = JSON.parse(window.localStorage.getItem("userProfile"));
    console.log(userProfile.fullName);
        $scope.fullName = userProfile.fullName;
        $scope.tagline = userProfile.tagline;
        $scope.profileUrl = userProfile.profileUrl;
        $scope.bio = userProfile.bio;
        $scope.newFullName = '';
        $scope.newTagline = '';
        $scope.newProfileUrl = '';
        $scope.newBio = '';
        $scope.header = window.localStorage.getItem('userProfile');

    $scope.savePersonalData = function(fullName, tagline, profileUrl, bio){
            var userProfile = mainService.createProfile(fullName, tagline, profileUrl, bio);
            $scope.header = userProfile.fullName;
            window.localStorage.setItem("userProfile", JSON.stringify(userProfile));
            console.log("Locally Stored Item: " + window.localStorage.getItem("userProfile"));
            return userProfile;
    }
    
});