function blog()
{
    document.getElementById('contentContainer').style.display="block"
    document.getElementById('mainShoeCon').style.display="flex"
    document.getElementById('mainShoeCon2').style.display="none"
    document.getElementById('headings2').style.display='none'
    document.getElementById('maincontainer').style.height="100vh"
    document.getElementById('myAccountcon').style.display='none'
    document.getElementById('contactContainer').style.display='none'
}

function home()
{
    document.getElementById('maincontainer').style.display='block'
    document.getElementById('contentContainer').style.display="block"
    document.getElementById('mainShoeCon').style.display="flex"
    document.getElementById('mainShoeCon2').style.display="flex"
    document.getElementById('headings2').style.display='block'
    document.getElementById('maincontainer').style.height="170vh"
    document.getElementById('myAccountcon').style.display='none'
    document.getElementById('contactContainer').style.display='none'

}
function signup()
{
   window.alert('sign up the page')
    document.getElementById('mainconsignup').style.display="flex"
    document.getElementById('loginmainCon').style.display="none"
    document.getElementById('maincontainer').style.height="100vh"
    document.getElementById('contentContainer').style.display="none"
    document.getElementById('mainShoeCon').style.display="none"
    document.getElementById('mainShoeCon2').style.display="none"
    document.getElementById('headings2').style.display='none'
    document.getElementById('contactContainer').style.display='none'
 
}

function loginpage()
{
    document.getElementById('loginmainCon').style.display="flex"
    document.getElementById('mainconsignup').style.display="none"
    document.getElementById('maincontainer').style.height="100vh"
    document.getElementById('contentContainer').style.display="none"
    document.getElementById('mainShoeCon').style.display="none"
    document.getElementById('mainShoeCon2').style.display="none"
    document.getElementById('headings2').style.display='none'
    document.getElementById('contactContainer').style.display='none'
}


    
function callloginpage()
{
    
    var signuppassword=document.getElementById('passwordinput').value
    var signupconfirmpassword=document.getElementById('confirmpassword').value
    
    
    if (signuppassword==signupconfirmpassword) {
        document.getElementById('signtext1').innerHTML='correct password'
        document.getElementById('loginmainCon').style.display="flex"
        document.getElementById('mainconsignup').style.display="none"
        
    }
    else{
        document.getElementById('signtext1').innerHTML='incorrect password'
    }

}

function callhomepage()
{
    var signupemail=document.getElementById('emailinput').value
    var signupconfirmpassword=document.getElementById('confirmpassword').value
    var loginemail=document.getElementById('loginemail').value
    var loginpassword=document.getElementById('loginpassword').value
    var confirmpass=document.getElementById('input3').value
    if(loginemail==signupemail && loginpassword==signupconfirmpassword || loginpassword==confirmpass)
    {
        location.href="file:///C:/footware/footware.html";
    }
    else{
         document.getElementById('texterror').style.display='block'
    }
}

function myaccount()
{
    document.getElementById('myAccountcon').style.display='block'
    document.getElementById('contentContainer').style.display="none"
    document.getElementById('mainShoeCon').style.display="none"
    document.getElementById('mainShoeCon2').style.display="none"
    document.getElementById('headings2').style.display='none'
    document.getElementById('maincontainer').style.height="100vh"
    document.getElementById('mainconsignup').style.display='none'
    document.getElementById('loginmainCon').style.display='none'
    document.getElementById('contactContainer').style.display='none'
}
function updatepassword()
{
    var currentpassword=document.getElementById('input1').value
    var newpass=document.getElementById('input2').value
    var confirmpass=document.getElementById('input3').value
    if(newpass==confirmpass)
    {
        document.getElementById('loginmainCon').style.display="flex"
        document.getElementById('myAccountcon').style.display='none'
        
    }
    else
    {
        document.getElementById('errortextChange').innerHTML='incorrect password'
    }
}

function contact()
{
    document.getElementById('contactContainer').style.display='flex'
    document.getElementById('contentContainer').style.display="none"
    document.getElementById('mainShoeCon').style.display="none"
    document.getElementById('mainShoeCon2').style.display="none"
    document.getElementById('headings2').style.display='none'
    document.getElementById('maincontainer').style.height="100vh"
    document.getElementById('mainconsignup').style.display='none'
    document.getElementById('loginmainCon').style.display='none'
}

