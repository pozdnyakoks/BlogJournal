const moreBtn = document.querySelector('.posts-btn');
const hiddenItems = document.querySelectorAll('.desctop')

moreBtn.addEventListener('click', () => {
  hiddenItems.forEach(item => {
    item.style.display = 'block';
    moreBtn.style.display = 'none';
  })
})