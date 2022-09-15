var restrationContainer = document.getElementById('registeration_container')

function User(name,profileURL,email,password){
    this.name = name;
    this.profileURL = profileURL;
    this.email = email;
    this.password = password;
}
var getRegisteredUser;

// onreload="" event on body 
function registeredUserLStorage(){
    //get push-user data from local storage
    if (localStorage.getItem('registeredUser')){
        
        getRegisteredUser = JSON.parse(localStorage.getItem('registeredUser'));
    }
    //if registeredUser not defined then create it
    else{
        
        localStorage.setItem('registeredUser', JSON.stringify([]));
    }
}


function getValues(){
    // var formTag = document.getElementById('form_tag');

    var fullName = document.getElementById('userNameValue').value;
    var profileurl = document.getElementById('profileUrlValue').value;
    var userEmail = document.getElementById('emailValue').value;
    var passwordValue = document.getElementById('passwordValue').value;
      
    // formTag.submit();
   formValidate();
    
    // onSubmit="return formValidate()"
    // formTag.setAttribute('onSubmit','return formValidate()')
    

    if (fullName != '' && profileurl != '' && userEmail != '' && passwordValue != ''){
        
        
        
        
        console.log(getRegisteredUser)
        getRegisteredUser.push(new User(fullName,profileurl,userEmail,passwordValue));
        
        localStorage.setItem('registeredUser', JSON.stringify(getRegisteredUser));
        
        document.getElementById('register_btn_a').href= './login/index.html'
    

    }
}



   function formValidate(){
            var fullName = document.getElementById('userNameValue');
            var profileurl = document.getElementById('profileUrlValue');
            var userEmail = document.getElementById('emailValue');
            var password = document.getElementById('passwordValue');

            if(fullName.value.length === 0){
                fullName.className += ' fullNameInput';
            }

            if(profileurl.value.length === 0){
                profileurl.className += ' fullNameInput';
            }


            //for email
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
            
            if (pattern.test(userEmail.value) != true){
                userEmail.setAttribute('placeholder','Invalid Email');
                userEmail.className += ' fullNameInput';
                userEmail.value = ''

            }
            if(password.value.length === 0){
                password.className += ' fullNameInput';
            }


        }


        ///////////////////// login page script

      
    function login(){
        var registeredUserInLocal = JSON.parse(localStorage.getItem('registeredUser'));

        var userEmail = document.getElementById('email_login_input')

        var userPassword = document.getElementById('password_login_input')

        for(var i=0; i<registeredUserInLocal.length; i++){
        if(userEmail.value == registeredUserInLocal[i].email && userPassword.value == registeredUserInLocal[i].password ){
            alert('login successful')
        }
    }

        console.log(registeredUserInLocal)
    }