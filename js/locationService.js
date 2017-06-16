devMtIn.service('locationService', function($location){
    
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
