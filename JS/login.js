const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Mảng lưu trữ nội dung văn bản cho từng slide
const slideContents = [
    {
        title: "Bài tập vận dụng mô phỏng",
        text: "Áp dụng kiến thức thông qua các bài tập mô phỏng tình huống thực tế",
        img: "../source/404(source)/Pagination dot group (2).png"
    },
    {
        title: "Kho học liệu miễn phí",
        text: "Miễn phí truy cập kho học liệu khổng lồ, bao gồm bài giảng, video và tài liệu học phù hợp với mọi đối tượng",
        img: "../source/404(source)/Pagination dot group.png"
    },
    {
        title: "Hình thức E-learning",
        text: "Học mọi lúc mọi nơi với hệ thống các video bài giảng trực tiếp đa dạng và linh hoạt",
        img: "../source/404(source)/Pagination dot group (1).png"
    }
];

const totalSlides = slideContents.length;
let currentIndex = 0;

function showSlide(index) {
    // Xử lý vòng lặp
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Cập nhật nội dung văn bản
    const content = slideContents[currentIndex];
    document.querySelector(".login_text2").innerHTML = `
        <h3>${content.title}</h3>
        <p class="login_text3">${content.text}</p>
        <img src="${content.img}" alt="Pagination dots">
    `;

    // Di chuyển slide
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Hàm chuyển slide trước/sau
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Previous slide

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Tự động chuyển slide (tùy chọn)
setInterval(nextSlide, 5000); // Chuyển slide mỗi 5 giây

// Khởi tạo slide đầu tiên
showSlide(currentIndex);

// _______________________________________________________

const users = [
    {
        name: "Dương Nam",
        surname: "Hoàng",
        email: "hoangduongnampb.2k6@gmail.com",
        phone: "0123456789",
        birthdate: "12/10/2006",
        id: "1234",
        password: "12345678",
        role: "Admin",
    },
    {
        name: "Dương Nam",
        surname: "Hoàng",
        email: "hoangduongnampb123.2k6@gmail.com",
        phone: "0123456789",
        birthdate: "12/10/2006",
        id: "1234",
        password: "12345678",
        role: "User",
    },
];
localStorage.setItem("users", JSON.stringify(users));

function login(e) {
    e.preventDefault();

    const inputEmail = document.querySelector("#exampleInputEmail1").value.trim();
    const inputPass = document.querySelector("#exampleInputPassword1").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.email === inputEmail && user.password === inputPass);

    if (!foundUser) {
        alert("Email hoặc mật khẩu không đúng!");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    alert(`Đăng nhập thành công với quyền: ${foundUser.role}`);

    if (foundUser.role === "Admin") {
        window.location.href="/HTML/home.html"; // Điều hướng sang trang admin
    } else {
        window.location.href = "/HTML/home.html"; // Điều hướng sang trang user
    }
}
function login_phone(e) {
    e.preventDefault();

    const inputEmail = document.querySelector("#exampleInputEmail2").value.trim();
    const inputPass = document.querySelector("#exampleInputPassword2").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.email === inputEmail && user.password === inputPass);

    if (!foundUser) {
        alert("Email hoặc mật khẩu không đúng!");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    alert(`Đăng nhập thành công với quyền: ${foundUser.role}`);

    if (foundUser.role === "Admin") {
        window.location.href="/HTML/home.html"; // Điều hướng sang trang admin
    } else {
        window.location.href = "/HTML/home.html"; // Điều hướng sang trang user
    }
}
function login_ipad(e) {
    e.preventDefault();

    const inputEmail = document.querySelector("#exampleInputEmail3").value.trim();
    const inputPass = document.querySelector("#exampleInputPassword3").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.email === inputEmail && user.password === inputPass);

    if (!foundUser) {
        alert("Email hoặc mật khẩu không đúng!");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    alert(`Đăng nhập thành công với quyền: ${foundUser.role}`);

    if (foundUser.role === "Admin") {
        window.location.href="/HTML/home.html"; // Điều hướng sang trang admin
    } else {
        window.location.href = "/HTML/home.html"; // Điều hướng sang trang user
    }
}

function toggleStatus(icon){
    icon.classList.toggle("fa-eye-slash");
    icon.classList.toggle("fa-eye");
    let desktopInput =document.getElementById("exampleInputPassword1");
    let ipadInput =document.getElementById("exampleInputPassword2");
    let iphoneInput =document.getElementById("exampleInputPassword3");
    if(desktopInput.type=== "password"){
        desktopInput.type = "text";
}
    else{
        desktopInput.type = "password";
    }

    if(ipadInput.type=== "password"){
        ipadInput.type = "text";
}
    else{
        ipadInput.type = "password";
    }

    if(iphoneInput.type=== "password"){
        iphoneInput.type = "text";
}
    else{
        iphoneInput.type = "password";
    }
}