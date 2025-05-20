const data = [
  { id: 1, mon: "React.js", bai: "Luyện tập Function", ngay: "12/07/2024", github: "baitap1.git" },
  { id: 2, mon: "Node.js", bai: "Luyện tập Number", ngay: "13/07/2024", github: "baitap1.git" },
  { id: 3, mon: "Web Frontend Fundamental", bai: "Luyện tập Function", ngay: "14/07/2024", github: "baitap1.git" },
  { id: 4, mon: "React.js", bai: "Luyện tập Function", ngay: "12/07/2024", github: "baitap1.git" },
  { id: 5, mon: "Node.js", bai: "Luyện tập Number", ngay: "13/07/2024", github: "baitap1.git" },
  { id: 6, mon: "Web Frontend Fundamental", bai: "Luyện tập Function", ngay: "14/07/2024", github: "baitap1.git" },
  { id: 7, mon: "React.js", bai: "Luyện tập Function", ngay: "12/07/2024", github: "baitap1.git" },
  { id: 8, mon: "Node.js", bai: "Luyện tập Number", ngay: "13/07/2024", github: "baitap1.git" },
  { id: 9, mon: "Web Frontend Fundamental", bai: "Luyện tập Function", ngay: "14/07/2024", github: "baitap1.git" },
  { id: 10, mon: "React.js", bai: "Luyện tập Function", ngay: "12/07/2024", github: "baitap1.git" },
  { id: 11, mon: "Node.js", bai: "Luyện tập Number", ngay: "13/07/2024", github: "baitap1.git" },
  { id: 12, mon: "Web Frontend Fundamental", bai: "Luyện tập Function", ngay: "14/07/2024", github: "baitap1.git" },
  { id: 13, mon: "Node.js", bai: "Luyện tập Number", ngay: "13/07/2024", github: "baitap1.git" },
  { id: 14, mon: "Web Frontend Fundamental", bai: "Luyện tập Function", ngay: "14/07/2024", github: "baitap1.git" },
  { id: 15, mon: "Node.js", bai: "Luyện tập Number", ngay: "13/07/2024", github: "baitap1.git" },
  { id: 16, mon: "Web Frontend Fundamental", bai: "Luyện tập Function", ngay: "14/07/2024", github: "baitap1.git" }
];

const rowsPerPage = 12;
let currentPage = 1;

function renderTable() {
  const tableBody = document.getElementById("data-table");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = data.slice(start, end);

  pageData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.classList.add("border-t");
    tr.innerHTML = `
        <td class="p-2">${start + index + 1}</td>
        <td class="p-2">${row.mon}</td>
        <td class="p-2">${row.bai}</td>
        <td class="p-2">${row.ngay}</td>
        <td class="p-2 truncate max-w-[150px]">${row.github}</td>
        <td class="p-2 space-x-2">
          <button><img src="/source/edit-2.png"></button>
          <button><img src="/source/trash.png"></button>
        </td>
      `;
    tableBody.appendChild(tr);
  });
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(data.length / rowsPerPage);

  let buttons = "";

  buttons += `<button ${currentPage === 1 ? "disabled" : ""} onclick="changePage(${currentPage - 1})">← Previous</button>`;

  for (let i = 1; i <= totalPages; i++) {
    buttons += `<button onclick="changePage(${i})" class="${currentPage === i ? 'bg-red-500 text-white px-2 py-1 rounded' : 'px-2 py-1'}">${i}</button>`;
  }

  buttons += `<button ${currentPage === totalPages ? "disabled" : ""} onclick="changePage(${currentPage + 1})">Next →</button>`;

  pagination.innerHTML = `<div class="flex gap-2">${buttons}</div>`;
}

function changePage(page) {
  const totalPages = Math.ceil(data.length / rowsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderTable();
  renderPagination();
}

renderTable();
renderPagination();
