var btnLogIn = document.getElementById('logIn');
var contentShow = document.getElementsByClassName('content-logIn')[0];
var btnCanCel = document.getElementById('canCel');
var comLog = document.getElementById('completeLog');
var filter = document.getElementById('wrapper');



btnLogIn.addEventListener('click', function() {
    contentShow.setAttribute('class', 'content-logIn content-display');
    filter.setAttribute('class', 'opacityFilter');
});



btnCanCel.addEventListener('click', function() {
    contentShow.setAttribute('class', 'content-logIn');
    filter.setAttribute('class', 'blockDisplay');
});





//Login ID & Password
var formInputs = document.getElementById('formLogIn').elements;


function checkId() {
    var nameEr = document.getElementById('nameError');
    var passEr = document.getElementById('passError');
    var idName = document.getElementById('idName').value;
    console.log(idName);
    if(!idName) {
        nameEr.innerHTML = '*Tài khoản không được để trắng';
    }

 
    var pass = document.getElementById('pass').value;
    console.log(pass);
    if(!pass) {
       passEr.innerHTML = '*Bạn chưa nhập mật khẩu';
    }
   


    if(idName&& pass) {
        alert('Bạn đã đăng nhập thành công');
        contentShow.setAttribute('class', 'content-logIn');
        filter.setAttribute('class', 'blockDisplay');
    } else {
        contentShow.setAttribute('class', 'content-logIn content-display');
    }
    
    
}

/**
 * 
 * Log on
 * 
 * * */


var btnLogOn = document.getElementById("logOn");
var btnExit = document.getElementsByClassName("exitLogOn")[0];
var formLogOn = document.getElementsByClassName("formLgon")[0];

btnLogOn.addEventListener('click', function() {
    formLogOn.setAttribute('class', 'unableDis');
    filter.setAttribute('class', 'opacityFilter');
});

btnExit.addEventListener('click', function() {
    formLogOn.setAttribute('class', 'disable');
    filter.setAttribute('class', 'blockDisplay');
});

/**
 * Check ID & PASSWORD
 */



function checkUser() {

    var nameUser = document.getElementById("nameUser").value;
    var dateUser = document.getElementById("dateUser").value;
    var addUser = document.getElementById("addUser").value;
    var idUser = document.getElementById("idUser").value;
    var passUser = document.getElementById("passUser").value;
    var passUserAgain = document.getElementById("passUserAgain").value;
    var phoneUser = document.getElementById("phoneUser").value;
    var emailUser = document.getElementById("emailUser").value;



    if(!nameUser || !dateUser || !addUser || !idUser || !passUser || !passUserAgain || !phoneUser || !emailUser) {
        alert('Bạn chưa hoàn thành thông tin');
    } 

}