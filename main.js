function flipPage(pageId, totalPages) {
    const page = document.getElementById(`p${pageId}`);
    const book = document.getElementById("book");

    if (page.classList.contains('flipped')) {
        page.classList.remove('flipped');
        page.style.zIndex = (totalPages - pageId);
    } else {
        page.classList.add('flipped');
        page.style.zIndex = pageId;
    }

    if (pageId === 1) {
        if (page.classList.contains('flipped')) {
            book.style.transform = "translateX(250px)";
        } else {
            book.style.transform = "translateX(0)";
        }
}
}

function toggleMenu() {
  const menu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  menu.classList.toggle("open");
  overlay.classList.toggle("active");
}
