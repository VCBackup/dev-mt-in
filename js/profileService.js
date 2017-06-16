devMtIn.service('profileService', function($http, $q){

    this.createProfile = function(name, tag, url, bio){
        console.log(name, tag, url, bio);
        if (name && tag && url && bio){
            var userProfile = {
            fullName: name,
            tagline: tag,
            profileUrl: url,
            bio: bio
        }
        console.log(userProfile);
        return userProfile;
        }
        console.log("Falsy values passed");
        alert("Required Field is empty")
    }
    
    this.updateProfile = function(profile){
        console.log(profile);
        if (name && tag && url && bio){
            var userProfile = {
            fullName: newFullName,
            tagline: newTagline,
            profileUrl: newUrl,
            bio: newBio
        }
        console.log('This is the current object: ' + userProfile
        + 'This is the current name: ' + userProfile.fullName);
        $location.path('/landing')
        return userProfile;
        }
        console.log("Falsy values passed");
        console.log('This is the current object: ' + userProfile
        + 'This is the current name: ' + userProfile.fullName);
        $location.path('/update')
        alert('Required Field is empty');
    }


    this.currentProfile = function(currentUserProfile){
        var userProfile = currentUserProfile;
        return userProfile;
    }

});