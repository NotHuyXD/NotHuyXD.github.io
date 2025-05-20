document.getElementById("searchButton").addEventListener("click", function () {
  const keyword = document.getElementById("searchInput").value.toLowerCase();

  let totalResults = 0;

  window.onload()=function(){
    document.getElementById('username').innerHTML=currentUser.surname + " " + currentUser.name;
    document.getElementById('name').innerHTML=currentUser.name;
    document.getElementById('responsiveUsername').innerHTML=currentUser.surname + " " + currentUser.name;
  }

  // Lọc khóa học
  const courseCards = document.querySelectorAll(".card-body");
  courseCards.forEach((card) => {
    const title = card.querySelector(".card-title")?.textContent.toLowerCase();
    const container = card.closest(".col-lg-4") || card.parentElement;
    if (container) {
      const show = title.includes(keyword) || keyword === "";
      container.style.display = show ? "" : "none";
      if (show) totalResults++;
    }
  });

  // Lọc bài viết
  const postCards = document.querySelectorAll(".post-card");
  postCards.forEach((post) => {
    const title = post.querySelector(".post-title")?.textContent.toLowerCase();
    const desc = post.querySelector(".post-desc")?.textContent.toLowerCase();
    const container = post.closest(".col-lg-4") || post.parentElement;
    const shouldShow =
      (title && title.includes(keyword)) ||
      (desc && desc.includes(keyword)) ||
      keyword === "";
    if (container) {
      container.style.display = shouldShow ? "" : "none";
      if (shouldShow) totalResults++;
    }
  });

  // Cập nhật số kết quả và từ khóa
  const resultElement = document.getElementById("searchResult");
  resultElement.innerHTML = `Có <strong>${totalResults}</strong> kết quả cho từ khóa <strong>"${keyword}"</strong>`;
});
