devMtIn.service('profileService', function($http, $q, $location){

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
        $location.path('/landing');
        return userProfile;
        }
        console.log('Falsy values passed');
        alert('Required Field is empty')
    }

    this.resetProfile = function(){
        console.log('This is the current user Profile: ' + userProfile)
        console.log('It has now been deleted.')
        var userProfile = {};
        return userProfile;
    }

    this.currentProfile = function(currentUserProfile){
        var userProfile = currentUserProfile;
        return userProfile;
    }

});