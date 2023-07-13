/* script menu */
fetch('menu.html')
.then(response => response.text())
.then(data => {
    const parser = new DOMParser();
    const menuDoc = parser.parseFromString(data, 'text/html');
    const menuContent = menuDoc.querySelector('.wrapper');

    const header = document.querySelector('header');
    header.appendChild(menuContent);
});
/* ================= */
