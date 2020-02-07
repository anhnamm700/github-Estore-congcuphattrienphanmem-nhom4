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

    if(idName.length >= 1&&idName.length < 6) {
        nameEr.innerHTML = '*Tài khoản phải có ít nhất 6 kí tự';
    }

    if(idName.length >= 6) {
        nameEr.innerHTML = '';
    }

    var pass = document.getElementById('pass').value;
    console.log(pass);
    if(!pass) {
       passEr.innerHTML = '*Bạn chưa nhập mật khẩu';
    }

    if(pass.length >= 1&&pass.length < 6) {
        passEr.innerHTML = '*Mật khẩu phải có ít nhất 6 kí tự';
    }

    if(pass.length >= 6) {
        passEr.innerHTML = '';
    }

    if(idName.length >= 6 && pass.length >= 6) {
        alert('Bạn đã đăng nhập thành công');
        contentShow.setAttribute('class', 'content-logIn');
        filter.setAttribute('class', 'blockDisplay');
    } else {
        contentShow.setAttribute('class', 'content-logIn content-display');
    }
    
    
}