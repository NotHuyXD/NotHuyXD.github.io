let currentUser= JSON.parse(localStorage.getItem("currentUser")) || [];
function toggleDropdown(){
    document.getElementById("dropdownList").classList.toggle('show');
}

function toggleNotice(){
    document.getElementById("noticeBell").classList.toggle('on');
}

window.onload = function(){
    document.getElementById('username').innerHTML=currentUser.surname + " " + currentUser.name;
    document.getElementById('responsiveUsername').innerHTML=currentUser.surname + " " + currentUser.name;
}

function toPage(location){
    window.location.href=location;
}

function toggleResponsive(){
    document.getElementById("responsiveList").classList.toggle('show');
}