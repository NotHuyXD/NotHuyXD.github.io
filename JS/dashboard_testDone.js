let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
function toggleDropdown() {
    document.getElementById("dropdownList").classList.toggle('show');
}

function toggleNotice() {
    document.getElementById("noticeBell").classList.toggle('on');
}

window.onload = function () {
    document.getElementById('username').innerHTML = currentUser.surname + " " + currentUser.name;
}

function toInforPage() {
    window.location.href = "information.html";
}
const overlay = document.getElementById('overlay');
const notification = document.getElementById('notification');
function hideNotification() {
    overlay.classList.add('active');
    notification.classList.add('active');
}
overlay.addEventListener('click', hideNotification);