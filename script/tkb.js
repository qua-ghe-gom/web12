/* script thời khoá biểu */
// JavaScript
const searchInput = document.querySelector('input');
const searchCells = document.querySelectorAll('td');
const selectElement = document.createElement('select');
const selectCells = document.querySelectorAll('td');
const subjects = ['Tìm Môn Học','SHCN', 'Sinh', 'Lý', 'Anh văn', 'Công nghệ', 'GDCD', 'Hoá', 'Quốc phòng', 'Địa', 'Toán', 'Ngữ văn', 'Thể dục', 'Nghề', 'Tin học'];

// Thêm các tùy chọn vào phần tử select
for (let i = 0; i < subjects.length; i++) {
  const option = document.createElement('option');
  option.value = subjects[i];
  option.innerHTML = subjects[i];
  selectElement.appendChild(option);
}

const form = document.querySelector('form');
form.insertBefore(selectElement, form.firstChild);

// Lắng nghe sự thay đổi trong phần tử select
selectElement.addEventListener('change', event => {
  const selectedSubject = event.target.value.toLowerCase();

  // Duyệt qua mỗi ô và làm nổi bật các môn học khớp
  selectCells.forEach(cell => {
    if (cell.textContent.toLowerCase().includes(selectedSubject)) {
      cell.classList.add('highlight'); // Thêm lớp 'highlight'
    } else {
      cell.classList.remove('highlight'); // Xóa lớp 'highlight'
    }
  });
});

// Lắng nghe sự kiện nhập vào ô search
searchInput.addEventListener('input', event => {
  const searchTerm = event.target.value.toLowerCase();

  if (searchTerm === '') {
    searchCells.forEach(cell => {
      cell.classList.remove('highlight'); // Xóa lớp 'highlight'
    });
    return;
  }

  searchCells.forEach(cell => {
    if (cell.textContent.toLowerCase().includes(searchTerm)) {
      cell.classList.add('highlight'); // Thêm lớp 'highlight'
    } else {
      cell.classList.remove('highlight'); // Xóa lớp 'highlight'
    }
  });
});



/* ================================ */
