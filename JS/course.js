let courses=[
    {
        name:'N1 Chill Class',
        location:'course1.html'
    },
    {
        name:'N2 Chill Class',
        location:'course2.html'
    },
    {
        name:'Phát âm J-Voice',
        location:'course3.html'
    },
    {
        name:'IT Talk',
        location:'course4.html'
    }
]

const maxProjects=12;
let totalPage;
let paginEl=document.getElementById("pagination");
let currentPage=1;
let courseContainer=document.getElementById("course-container");
let responsiveTotalPage=document.getElementById('totalPageNum');
let responsiveCurrentPage=document.getElementById('pageNum');
responsiveCurrentPage.innerText=1;

function renderPagin() {
    totalPage = Math.ceil(120 / maxProjects);
    responsiveTotalPage.innerText=totalPage;
    let paginHtml = ``;

    // Prev
    paginHtml += `<button onclick="setPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>← Previous</button>`;

    // Page numbers
    let pages = [];

    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
        pages.push("...");
    }

    // Pages around currentPage
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 1 && i < totalPage) {
            pages.push(i);
        }
    }

    if (currentPage < totalPage - 2) {
        pages.push("...");
    }

    // Always show last page if more than one page
    if (totalPage > 1) {
        pages.push(totalPage);
    }

    // Render pages
    pages.forEach(p => {
        if (p === "...") {
            paginHtml += `<span class="dots">...</span>`;
        } else {
            paginHtml += `<button onclick="setPage(${p})" class="${(p == currentPage) ? "onPage" : ""}">${p}</button>`;
        }
    });

    // Next
    paginHtml += `<button onclick="setPage(${currentPage + 1})" ${currentPage === totalPage ? 'disabled' : ''}>Next →</button>`;

    paginEl.innerHTML = paginHtml;
    if(currentPage>totalPage){
        setPage(1);
    }
}

function setPage(pageNumber) {
    if (pageNumber == 0) {
        pageNumber = 1;
    }
    if (pageNumber > totalPage) {
        pageNumber = totalPage;
    }
    currentPage = pageNumber;
    responsiveCurrentPage.innerText=pageNumber;
    console.log(currentPage);
    console.log(responsiveCurrentPage.innerText-1);
    console.log(currentPage);
    renderPagin();
    renderCourse();
}

function renderCourse(){
    courseContainer.innerHTML='';
    for (let i=0;i<3;i++){
        courses.forEach((course)=>{
            let courseEl=document.createElement('div');
            courseEl.className="col-md-4 mb-4 card-re";
            courseEl.innerHTML=`
            <div class="card course-card h-100 shadow-sm border-0 rounded-4">
              <img
                src="/source/Image 2.png"
                class="card-img-top rounded-4 p-3 pb-0"
                alt="Khóa học N1"
              />
              <div class="card-body pt-2">
                <span class="badge custom-badge mb-2">Beginner</span>
                <p class="card-text small text-muted mb-1">
                  <img src="/source/clockcam.png" /> 360 phút&nbsp;<span
                    style="color: #dddddd; margin-right: 3px"
                    >|</span
                  >
                  <img src="/source/bookcam.png" /> 32 chương&nbsp;<span
                    style="color: #dddddd; margin-right: 3px"
                    >|</span
                  >
                  <img src="/source/profile.png" /> Giang Sensei
                </p>
                <h5 class="card-title fw-bold mb-3">${course.name}</h5>
                <a href="#" class="btn custom-btn w-100">
                  HỌC NGAY <i class="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>`;
          courseContainer.appendChild(courseEl)
        })
    }
}

function toggleResponsive(){
    document.getElementById("responsiveList").classList.toggle('show');
}

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

function downNumResponsive(){
    setPage((responsiveCurrentPage.innerText-1))
}

function upNumResponsive(){
    setPage((Number(responsiveCurrentPage.innerText)+1))
}

renderCourse();
renderPagin();