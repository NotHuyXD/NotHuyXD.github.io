let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];

function toMenu(){
    window.location.href = "home.html";
}

function updateData(){
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    const index = users.findIndex(user => user.email === currentUser.email);
    console.log(index);
    if (index !== -1) {
      users[index] = currentUser;
    }
    localStorage.setItem("users", JSON.stringify(users));
}

window.onload = function(){
        if(!localStorage.getItem("currentUser") || localStorage.getItem("currentUser") === "[]"){
        window.location.href = "login.html";
    }
    document.getElementById('surname').value=currentUser.surname;
    document.getElementById('name').value=currentUser.name;
    document.getElementById('email').value=currentUser.email;
    document.getElementById('phone').value=currentUser.phone;
    document.getElementById('date').value=currentUser.birthdate;
    document.getElementById('studentCode').value=currentUser.id;
    document.getElementById('username').innerHTML=currentUser.surname + " " + currentUser.name;
}

function toggleDropdown(){
    document.getElementById("dropdownList").classList.toggle('show');
}

function toggleNotice(){
    document.getElementById("noticeBell").classList.toggle('on');
}

function toggleStatus(icon, field){
    icon.classList.toggle("fa-eye-slash");
    icon.classList.toggle("fa-eye");
    let input =document.getElementById(field);
    if(input.type=== "password"){
        input.type = "text";
}
    else{
        input.type = "password";
    }
}

function changePassword(){
    let oldPass = document.getElementById('old-password').value;
    let newPass = document.getElementById('new-password').value;
    let confirmPass = document.getElementById('confirm-password').value;
    if(oldPass !== currentUser.password){
        alert("Mật khẩu cũ không đúng!");
        return;
    }
    if(newPass !== confirmPass){
        alert("Mật khẩu mới không khớp!");
        return;
    }
    currentUser.password = newPass;
    updateData();
    const modal = bootstrap.Modal.getInstance(
    document.getElementById("changePasswordModal")
    );
    modal.hide();
}

function toggleResponsive(){
    document.getElementById("responsiveList").classList.toggle('show');
}
