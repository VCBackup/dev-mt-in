devMtIn.service('mainService', function($http, $q, $location){

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
        $location.path('/landing')
        return userProfile;
        }
        console.log("Falsy values passed");
        $location.path('/')
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
        }
        
        return userProfile;
    }

    this.myLocation = function(){
        if ($location.path() == '/friends'){
            document.getElementById('view-friends-text').className = 'current-location';
        }
        else if ($location.path() == '/search'){
            document.getElementById('find-friends-text').className = 'current-location';
            }

        else if ($location.path() == '/update'){
            document.getElementById('update-profile-text').className = 'current-location';
        }
    }


});