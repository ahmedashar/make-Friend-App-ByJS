var registeredUserInLocal = JSON.parse(localStorage.getItem('registeredUser'));
// for(var i=0 ; i<registeredUserInLocal.length; i++){
//     registeredUserInLocal[i].friends = []
// }
console.log(registeredUserInLocal)
function login(){
  

    var userEmail = document.getElementById('email_login_input')

    var userPassword = document.getElementById('password_login_input')

    // checking email and password from local storage
    for(var i=0; i<registeredUserInLocal.length; i++){
    
    if(userEmail.value == registeredUserInLocal[i].email && userPassword.value == registeredUserInLocal[i].password ){

        alert('login successful')

        friendScreen(registeredUserInLocal[i].name, registeredUserInLocal[i].profileURL, registeredUserInLocal[i].email ,registeredUserInLocal[i].password)
    }
}

    // console.log(registeredUserInLocal)
}





//  friend screen

var registerationContainer = document.getElementById('registeration_container');

function friendScreen(userName,userProfile,userEmail,userPassword){
    
  

        registerationContainer.innerHTML = '';

        var h1 = document.createElement('h1')
        var text = document.createTextNode('Welcome '+ userName);
        h1.appendChild(text);
        
        var img = document.createElement('img')
        img.setAttribute('class', 'user_img');
        img.setAttribute('src',userProfile);

     

        var makeFriendBtn = document.createElement('button');
        makeFriendBtn.innerText = 'Make New Friend'
        makeFriendBtn.setAttribute('onclick',`showPeoples("${userEmail}","${userPassword}")`)


        var yourFriendBtn = document.createElement('button');
        yourFriendBtn.innerText = 'Your Friends'
        // makeFriendBtn.setAttribute('onclick',)
        


        registerationContainer.appendChild(h1);
        registerationContainer.appendChild(img);
        registerationContainer.appendChild(makeFriendBtn);
        registerationContainer.appendChild(yourFriendBtn);

        

    }



    function showPeoples(userEmail,userPassword){
        // alert('hello')
        // console.log(registeredUserInLocal)
        if(localStorage.getItem('registeredUserWithFriend')){

        var registeredUserInLocalForAddFriend = JSON.parse(localStorage.getItem('registeredUserWithFriend'));
//    console.log(registeredUserInLocalForAddFriend)
    } 

   

        for(var i=0; i<registeredUserInLocal.length; i++){
           
            if(userEmail == registeredUserInLocal[i].email && userPassword == registeredUserInLocal[i].password){
                continue;
            }
            var div = document.createElement('div');
            div.setAttribute('id','make_friend_container');

            var img = document.createElement('img');
            img.setAttribute('class','show_people_images')
            img.setAttribute('src',registeredUserInLocal[i].profileURL)

            var span = document.createElement('span')
            spanText = document.createTextNode(registeredUserInLocal[i].name);
            span.appendChild(spanText)
            
            // var br = document.createElement('br');

            var addFriendBtn = document.createElement('button');
            addFriendBtn.innerText = 'Add Friend';
            addFriendBtn.setAttribute('onclick',`addFriend("${userEmail}","${registeredUserInLocal[i].name}","${registeredUserInLocal[i].profileURL}","${registeredUserInLocal[i].email}",event)`)
            


            div.appendChild(img)
            div.appendChild(span)
            // div.appendChild(br)
            div.appendChild(addFriendBtn)
            registerationContainer.appendChild(div)
            }
        
    }

// // new arr of obj for userlogin friends

    function UserFriend(name,picURL,email){
       this.name = name;
       this.picURL = picURL;
       this.email = email;
    }

//  // for addFriend
    function addFriend(loginUser,friendName,friendPicURL,friendEmail,event){
        // console.log(loginUser,friendName,friendPicURL)
    //////////////////////////
    if(localStorage.getItem('registeredUserWithFriend')){

         registeredUserInLocalForAddFriend = JSON.parse(localStorage.getItem('registeredUserWithFriend'));

    }
    else{

        var registeredUserInLocalForAddFriend = JSON.parse(localStorage.getItem('registeredUser'));
    }
    //////////////////////////

        for(var i = 0; i<registeredUserInLocalForAddFriend.length; i++){
            if(loginUser == registeredUserInLocalForAddFriend[i].email){
                registeredUserInLocalForAddFriend[i].friends.push(new UserFriend (friendName,friendPicURL,friendEmail))
                event.target.parentNode.style.display = 'none'
            }
        }

        localStorage.setItem('registeredUserWithFriend', JSON.stringify(registeredUserInLocalForAddFriend));
        console.log(registeredUserInLocalForAddFriend)

    }







//    1. Create a Register user screen. Fields: Fullname, profilePicture (URL), email, password. On signing up, it should add in the users array.

// 2. Create a Login screen, Fields: Email, passsword. On signing it, it should check if any user exist with same email & password, it should show Friends Sceen, otherwise it should show error "Invalid Credentials"

// 3. Create a Friends Screen, it should show all friends of logged in user, and a button to ADD FRIENDS. A button REMOVE FRIEND with each friend.

// 4. Create a Add Friend screen, it should show all users register in your app with a button Add Friend with each user. On clicking it, it should add to the current users friend. Once added, it should again show Friends Screen