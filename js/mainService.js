devMtIn.service('mainService', function($http, $q){

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

});