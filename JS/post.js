let posts =[
    {
        title:'Authentication & Authorization trong ReactJS',
        location:'../HTML/FrontEnd_Detail.html',
        description:'Chào bạn! Nếu bạn đã là học viên khóa Pro của Rikkei Academy, chắc hẳn bạn đã biết tới Dev Mode - giúp thực hành code song song khi xem...',
        category:'Front-end',
    },
    {
        title:'Kiến thức cơ bản về JavaScript',
        location:'../HTML/JavaScript_Detail.html',
        description:'Chào bạn! Nếu bạn đã là học viên khóa Pro của Rikkei Academy, chắc hẳn bạn đã biết tới Dev Mode - giúp thực hành code song song khi xem...',
        category:'JavaScript',
    },
    {
        title:'Những kỹ năng sử dụng Git cơ bản',
        location:'../HTML/Git_Detail.html',
        description:'Chào bạn! Nếu bạn đã là học viên khóa Pro của Rikkei Academy, chắc hẳn bạn đã biết tới Git, việc sử dụng Git thông thạo không chỉ giúp...',
        category:'Git',
    },
]

const maxProjects=9;
let totalPage;
let paginEl=document.getElementById("pagination");
let currentPage=1;
let postContainer=document.getElementById("post-section");
let responsiveTotalPage=document.getElementById('totalPageNum');
let responsiveCurrentPage=document.getElementById('pageNum');
responsiveCurrentPage.innerText=1;

window.onload=function(){
    renderPost('Tất cả','120');
}

function renderPagin(option, amount) {
    totalPage = Math.ceil(amount / maxProjects);
    responsiveTotalPage.innerText=totalPage;
    let paginHtml = ``;

    // Prev
    paginHtml += `<button onclick="setPage(${currentPage - 1}, ${amount}, '${option}')" ${currentPage === 1 ? 'disabled' : ''}>← Previous</button>`;

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
            paginHtml += `<button onclick="setPage(${p}, ${amount}, '${option}')" class="${(p == currentPage) ? "onPage" : ""}">${p}</button>`;
        }
    });

    // Next
    paginHtml += `<button onclick="setPage(${currentPage + 1}, ${amount}, '${option}')" ${currentPage === totalPage ? 'disabled' : ''}>Next →</button>`;

    paginEl.innerHTML = paginHtml;
    if(currentPage>totalPage){
        setPage(1,amount,option);
    }
}


function setPage(pageNumber, amount, option) {
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
    renderPagin(option, amount);
    renderPost(option, amount);
}

function renderPost(option,amount){
    postContainer.innerHTML="";
    document.getElementById("post-amount").innerHTML=amount;
    document.getElementById("sort-option").innerHTML=option;
    if(option=='Tất cả'){
    for(let i=0; i<3;i++){
        posts.forEach((post,index)=>{
            let postEl=document.createElement('div');
            postEl.className="col-md-4";
            postEl.innerHTML=`
            <div class="post-card" onclick="toPostDetail('${post.location}')">
            <img src="/source/post.png" class="post-image" alt="Ảnh bài viết" />
            <div class="p-3">
              <div class="badge-tag">${post.category}</div>
              <div class="post-title">
                ${post.title}
              </div>
              <div class="post-desc">
                ${post.description}
              </div>
              <div class="d-flex justify-content-start mt-3 post-meta gap-2">
                <div><img src="/source/clockpost.png" /> 8 tháng trước</div>
                <div style="opacity: 0.2">|</div>
                <div><img src="/source/bookpost.png" /> 10-15 phút đọc</div>
              </div>
            </div>
          </div>`;
          postContainer.appendChild(postEl);
          renderPagin(option,amount)
            })
    }
    }
    else{
        let filterPosts=posts.filter((post)=>post.category==option);
        for(let i=0; i<9;i++){
        filterPosts.forEach((post,index)=>{
            let postEl=document.createElement('div');
            postEl.className="col-md-4";
            postEl.innerHTML=`
            <div class="post-card" onclick="toPostDetail('${post.location}')">
            <img src="/source/post.png" class="post-image" alt="Ảnh bài viết" />
            <div class="p-3">
              <div class="badge-tag">${post.category}</div>
              <div class="post-title">
                ${post.title}
              </div>
              <div class="post-desc">
                ${post.description}
              </div>
              <div class="d-flex justify-content-start mt-3 post-meta gap-2">
                <div><img src="/source/clockpost.png" /> 8 tháng trước</div>
                <div style="opacity: 0.2">|</div>
                <div><img src="/source/bookpost.png" /> 10-15 phút đọc</div>
              </div>
            </div>
          </div>`;
          postContainer.appendChild(postEl);
          renderPagin(option,amount)
        })
    }
    }
}
renderPagin('Tất cả','120');
renderPost('Tất cả','120');

function toggleDropdown(){
    document.getElementById("dropdownList").classList.toggle('show');
}

function showFilterList(){
    let filterList=document.getElementById("filter-option");
    if (!filterList.classList.contains("in")) {
        filterList.classList.add("in");
        filterList.classList.remove("out");
    }   
    else {
        filterList.classList.add("out");
        filterList.classList.remove("in");
    }
}

function toPostDetail(location){
  window.location.href=location;
}

function toggleResponsive(){
    document.getElementById("responsiveList").classList.toggle('show');
}

function downNumResponsive(){
    setPage((responsiveCurrentPage.innerText-1),document.getElementById("post-amount").innerHTML,document.getElementById("sort-option").innerHTML)
}

function upNumResponsive(){
    setPage((Number(responsiveCurrentPage.innerText)+1),document.getElementById("post-amount").innerHTML,document.getElementById("sort-option").innerHTML)
}