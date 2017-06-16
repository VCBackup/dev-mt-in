devMtIn.controller('mainCtrl', function($scope, profileService, locationService){

    if (userProfile){
        var userProfile = JSON.parse(window.localStorage.getItem("userProfile"));
        console.log('This is the current user name: ' + userProfile.fullName);
        $scope.fullName = userProfile.fullName;
        $scope.tagline = userProfile.tagline;
        $scope.profileUrl = userProfile.profileUrl;
        $scope.bio = userProfile.bio;
        return userProfile;
    }

    $scope.currentLocation = locationService.myLocation();

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
    
    $scope.currentProfile = profileService.currentProfile(JSON.parse(window.localStorage.getItem("userProfile")));

    $scope.friendsList = [
        {
            name: 'Aaron',
            tagline: 'Life is worth living!',
            bio: 'It seems our adventure crew will be doubling in size! Carson clan, party of four, coming atcha',
            pictureUrl: 'images/images/Profile-Pics/aaron.jpg'
        },
        {
            name: 'Alex',
            tagline: 'A taco stand opened up on my route from the train station to home. BEST DAY EVER',
            bio: 'In every encounter with Japanese hotel staff, I\'m trying to practice my Japanese but they\'re trying to practice their English.',
            pictureUrl: 'images/images/Profile-Pics/alex.jpg'
        },        
        {
            name: 'Alexa',
            tagline: 'Can\'t stop, won\'t stop',
            bio: 'The only thing better than an Arizona summer day at the lake is eating In-n-Out after an Arizona summer day the lake.',
            pictureUrl: 'images/Profile-Pics/alexa.jpg'
        },        
        {
            name: 'Alexandra',
            tagline: 'if you get something from zorpia from my email- it\'s a scam!',
            bio: 'Nothing bothers me more than when other people log into my computer',
            pictureUrl: 'images/Profile-Pics/alexandra.jpg'
        },        
        {
            name: 'Amanda',
            tagline: 'Love those work days when you get to see the final product of your work',
            bio: 'I\'ve been working to understand the life of Jesus Christ better this year. I have been struck by how nearly every conversation He had focused on individual peace and empowerment. I\'ve learned this past year about His overarching motivation of love. I love this beautiful essay on one such moment of love. Happy Easter, everyone! He lives!',
            pictureUrl: 'images/Profile-Pics/amanda.jpg'
        },        
        {
            name: 'Ariel',
            tagline: 'Every morning you have two choices: Continue to sleep with your dreams, or wake up and chase them!',
            bio: 'I am not perfect by any means. I have my days when this is harder. But that\'s the beauty. I get to progress and become someone even better than I was the day before. My thoughts are filled with positivity. My life is surrounded by love. I laugh more and more everyday. And most importantly, my faith in my savior is stronger than its been ever before. Every prayer is answered. Even though the outcome may not be how I want it.. It\'s perfect for me. Things don\'t happen to me. They happen for me.',
            pictureUrl: 'images/Profile-Pics/ariel.jpg'
        },        
        {
            name: 'Audry',
            tagline: 'An estate sale today and tomorrow at 273 E 400 N in Tooele. Furniture, including an oak dining table with four chairs and two extensions, a twin bed, love seat, and several wood stands, and so on. Everything must go!! Please pass this along to you friends, thanks!',
            bio: 'My favorite winter treat growing up: Little Soldiers (buttered toast strips dipped in hot chocolate). I love passing on traditions to the next generation.',
            pictureUrl: 'images/Profile-Pics/audry.jpg'
        },        
        {
            name: 'Ben',
            tagline: 'Arm yourself with facts and do battle with your inner biases. There\'s no greater peace than being honest with yourself.',
            bio: 'I was just thinking again today about something really cool. If you wanted to count to 1 million, it would take you about 11 and a half days. If you wanted to count to a billion, it would take you about 32 years. A trillion? 32,000 years. No sleeping, just counting.',
            pictureUrl: 'images/Profile-Pics/ben.jpg'
        },        
        {
            name: 'Brooke',
            tagline: 'My best friend in the whole entire world gets here tomorrow!! Can\'t wait ',
            bio: 'If everything was perfect, you would never learn and you would never grow.',
            pictureUrl: 'images/Profile-Pics/brooke.jpg'
        },        
        {
            name: 'Cristian',
            tagline: 'Happy 40th Anniversary Star Wars!!! "The Force will be with you, always."',
            bio: 'New Year, new fitness goals. With Hugh Jackman retiring this year the door is open for a new Weapon X...',
            pictureUrl: 'images/Profile-Pics/cristian.jpg'
        },        
        {
            name: 'Daniel',
            tagline: 'Sometimes one of your best friends comes home from war so you eat tacos, and it\'s pretty neat',
            bio: 'Over the last week or so I\'ve had a couple of people ask me what I, as a Mormon who has spent a good bit of time living among Islamic communities in the Middle East, think of the Prophet Muhammad. This article was written a few years back by one of my BYU professors who is currently serving as a mission president in Turkey. He expresses this much better than I can, and I wholeheartedly endorse his words.',
            pictureUrl: 'images/Profile-Pics/daniel.jpg'
        },        
        {
            name: 'Danielle',
            tagline: 'The Padres are the best team ever.',
            bio: '“While you should be friendly with all people, select with great care those whom you wish to have close to you."-President Gordon B. Hinckley<3 these girls with all my heart!(and also my two bridesmaids not pictured: Laura Decker and Heather Johnson)',
            pictureUrl: 'images/Profile-Pics/danielle.jpg'
        },        
        {
            name: 'David',
            tagline: 'I just read this fun article on Emotional Strength. I encourage you to read it, and I hope you find something that can make your day just a little bit better!',
            bio: 'REVEL Big Cottonwood is excited to welcome David Smith to this incredibly fast and spectacularly scenic half marathon. Show David some love as he gets ready to GO BIG on Sept. 9, 2017 with team BYU MBA #1!',
            pictureUrl: 'images/Profile-Pics/david.jpg'
        },        
        {
            name: 'Hayden',
            tagline: 'I am going to do this advent calendar of service. I think it will be a lot of fun. I encourage everyone to do this.',
            bio: 'Day 21 of the Mormon.org #LIGHTtheWORLD campaign: Jesus forgave others and so can you. The Savior said that if we forgive others, He will forgive us (see Matthew 6:12, 14-15, New Testament). I want to become a person who forgives easily and seeks forgiveness quickly. I am convinced that Jesus Christ wants to forgive us and will as we come to Him.',
            pictureUrl: 'images/Profile-Pics/hayden.jpg'
        },        
        {
            name: 'Jace',
            tagline: 'Most of the world\'s problems would be fixed if everyone listened to Baker Street by Gerry Rafferty for 30 minutes every day',
            bio: 'Life is hard. I\'d like to phone a friend, Regis.',
            pictureUrl: 'images/Profile-Pics/jace.jpg'
        },        
        {
            name: 'Jackie',
            tagline: 'The only reason God didn\'t make us sisters is because one man couldn\'t handle us both.',
            bio: 'We should do a reunion soon, but only after we figure out where to buy these bad boys!! Lmao! Miss you lady!',
            pictureUrl: 'images/Profile-Pics/jackie.jpg'
        },        
        {
            name: 'Jake',
            tagline: 'No game has ever had a pay out as satisfying as that winner winner chicken dinner.',
            bio: 'I just love livin life! You feel me?',
            pictureUrl: 'images/Profile-Pics/jake.jpg'
        },        
        {
            name: 'Jared',
            tagline: 'Yo yo yo!',
            bio: 'Alright, this might seem blasphemous but I learned something from Spicer\'s press conference today (I know, right?!). Today is National Leave Work Early Day. Don\'t mind if I do!',
            pictureUrl: 'images/Profile-Pics/jared.jpg'
        },        
        {
            name: 'Jasmine',
            tagline: 'Wow - this made my day. Lol, I\'d say we\'re probably a little more than FB friends at this point.',
            bio: 'Haha! Kudos to Liz and Josh for putting on such an awesome ward activity, kudos to you for doing my hair and for attempting to dance that night even though you were scared, and kudos to us for making that fort in the background of the picture.',
            pictureUrl: 'images/Profile-Pics/jasmine.jpg'
        },        
        {
            name: 'Jenny',
            tagline: 'Hello gorgeous!',
            bio: 'Celebrating our one-year anniversary with tickets to see Paul Simon tonight! I couldn\'t ask for a better friend or partner in this world than Jeff St.Onge. The best is yet to come!',
            pictureUrl: 'images/Profile-Pics/jenny.jpg'
        },        
        {
            name: 'Joshua',
            tagline: '"Happiness is a warm puppy." Sometimes you\'re typing up morose old poetry and a puppy from the present intervenes!',
            bio: 'I just love livin life! You feel me?',
            pictureUrl: 'images/Profile-Pics/joshua.jpg'
        },        
        {
            name: 'Kaci',
            tagline: 'Just enjoy the view.',
            bio: 'I\'m getting excited for summer... so I finally decided to finish the video of our trip to Havasupai. Sorry it took so long guys!',
            pictureUrl: 'images/Profile-Pics/kaci.jpg'
        },        
        {
            name: 'Kate',
            tagline: 'Would you appreciate something like this, but instead spread near the cornerstone? (of course not at AT&T park)',
            bio: 'Play ball! First game at Fenway for us this season; doesn\'t get much more gorgeous than this...',
            pictureUrl: 'images/Profile-Pics/kate.jpg'
        },        
        {
            name: 'Kristy',
            tagline: 'Finally had the chance to finish this acrylic painting! I love just working for fun!',
            bio: 'It\'s hard to find words to explain how amazing the gospel of Jesus Christ is! I am so grateful to live in a place where I can go to the temple to feel the peace and comfort of the Savior',
            pictureUrl: 'images/Profile-Pics/kristy.jpg'
        },        
        {
            name: 'Lemar',
            tagline: 'I like my women like I like my chickens: strong, wise and noble of heart. ',
            bio: 'Sooo I need you to get ordained so I can have the passive aggressive pastor marry me off! You got about 3 years to get this done LOL!',
            pictureUrl: 'images/Profile-Pics/lemar.jpg'
        },        
        {
            name: 'Leo',
            tagline: 'Be yourself. Embrace your weirdness.',
            bio: 'Just a Wizard on the run from Azkaban.',
            pictureUrl: 'images/Profile-Pics/leo.jpg'
        },        
        {
            name: 'Lesley',
            tagline: 'Now watch me whip... Now watch me neigh neigh',
            bio: 'I need me some steak',
            pictureUrl: 'images/Profile-Pics/lesley.jpg'
        },        
        {
            name: 'Lily',
            tagline: 'I couldn\'t live where there were no trees- something vital in me would starve.',
            bio: 'We\'ll ascend until we\'re out of sight. Light as paper, we\'ll soar!',
            pictureUrl: 'images/Profile-Pics/lily.jpg'
        },        
        {
            name: 'Mari',
            tagline: 'Death means nothing at all. It does not count. I have only slipped away into the next room.',
            bio: 'Ever had a memory sneak out of your eye and roll down your cheek?',
            pictureUrl: 'images/Profile-Pics/mari.jpg'
        },        
        {
            name: 'Marilyn',
            tagline: 'Who needs books? Save a tree, watch TV!',
            bio: 'Searching for answers? Listen for them in general conference, broadcast live on our mobile app, YouTube and Roku channels, Apple TV, and right here on Facebook.',
            pictureUrl: 'images/Profile-Pics/marilyn.jpg'
        },        
        {
            name: 'Mark',
            tagline: 'Memorial Day is for the fallen. Please don\'t thank me this weekend',
            bio: 'The water pump in my wife\'s Buick is FINALLY done. Mark:1 Car:0',
            pictureUrl: 'images/Profile-Pics/mark.jpg'
        },        
        {
            name: 'Martin',
            tagline: 'When you need a tree down hire a pro. And never use a ladder.',
            bio: 'Things are happening here!!',
            pictureUrl: 'images/Profile-Pics/martin.jpg'
        },        
        {
            name: 'Missy',
            tagline: 'I think it\'s safe to say that staff meeting was successful today ',
            bio: 'This morning I shared the biblical story of the woman who suffered for 12 years with a debilitating problem.',
            pictureUrl: 'images/Profile-Pics/missy.jpg'
        },        
        {
            name: 'Paula',
            tagline: 'It was a fun Easter with 6 out of 7 grandchildren!',
            bio: '"Past the point of no return" Evie bought herself some Barbies with her Christmas money from Grandpa James and Grandma Paula plus a whole lot of chores to earn the rest. Proud of my girl for saving her money up toward a big goal.',
            pictureUrl: 'images/Profile-Pics/paula.jpg'
        },        
        {
            name: 'Rinoa',
            tagline: 'I miss overeating with you...',
            bio: 'If chocolate is handmade by Benedictine nuns then it\'s healthy right?',
            pictureUrl: 'images/Profile-Pics/rinoa.jpg'
        },        
        {
            name: 'Shania',
            tagline: 'Love my roomie!!!',
            bio: 'This play is so spicy, I saw it twice-y. Hale Center Theatre does it again! Peter and the Starcatcher is amazing!',
            pictureUrl: 'images/Profile-Pics/shania.jpg'
        },        
        {
            name: 'Shawn',
            tagline: 'Get used to it Steve. I am still her first and only love.',
            bio: 'Beautiful day for a wedding!!',
            pictureUrl: 'images/Profile-Pics/shawn.jpg'
        },        
        {
            name: 'Shawna',
            tagline: 'Good morning to you Shawna!',
            bio: 'We were excited for Kristin Chenoweth! Becca and I have been lucky enough to see many Broadway stars, here\'s to another!! She was amazing! Spunky, fun, full of faith and sang such touching numbers! I\'d say it was spiritual, inspirational and heart warming.',
            pictureUrl: 'images/Profile-Pics/shawna.jpg'
        },        
        {
            name: 'Tanya',
            tagline: 'I couldn\'t come up with something clever.',
            bio: 'Enjoying the Matisyahu concert with my little brother. This guy has taught me how to skate, snowboard, swim, to love basketball and has been a constant example of kindness. I guess I owe him my coolness.',
            pictureUrl: 'images/Profile-Pics/tanya.jpg'
        },        
        {
            name: 'Vylara',
            tagline: 'It is November 1st! We are officially allowed to talk about Christmas!',
            bio: 'Such. A. PERECT. Day. Sang "Fight Song" at the top of my lungs in a quartet, enjoyed the sunshine, laughed with my whole heart, and had a meal at a questionable restaurant.',
            pictureUrl: 'images/Profile-Pics/vylara.jpg'
        }
    ]
});