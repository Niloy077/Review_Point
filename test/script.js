// Load books using Google Books API for New Arrivals
async function loadNewArrivals() {
  const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=fiction&orderBy=newest&maxResults=20');
  const data = await res.json();
  const grid = document.querySelector('#new-arrivals .book-grid');
  grid.innerHTML = '';

  const books = (data.items || []).filter(item => {
    const pubYear = item.volumeInfo?.publishedDate?.split('-')[0];
    return pubYear && parseInt(pubYear) >= 2025;
  });

  books.slice(0, 8).forEach(item => {
    const info = item.volumeInfo;
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML = `
      <img src="${info.imageLinks?.thumbnail || ''}" 
           alt="${info.title}" 
           data-title="${info.title}" 
           data-desc="${info.description || 'No description available.'}">
    `;
    grid.appendChild(card);
  });
}

// Load books using Open Library for other sections
async function loadOLSection(sectionId, query) {
  const res = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=20`);
  const data = await res.json();
  const grid = document.querySelector(`#${sectionId} .book-grid`);
  grid.innerHTML = '';

  (data.docs || []).slice(0, 8).forEach(item => {
    const cover = item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg` : '';
    const title = item.title || 'No title';
    const desc = item.subject ? item.subject.join(', ') : 'No description available.';

    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML = `<img src="${cover}" alt="${title}" data-title="${title}" data-desc="${desc}">`;
    grid.appendChild(card);
  });
}

// Load all sections
loadNewArrivals();
loadOLSection('most-popular', 'bestseller+fiction+2025');
loadOLSection('nobel-prize', 'nobel+prize+literature+fiction');
loadOLSection('man-booker', 'man+booker+prize+fiction');

// Modal logic
const modal = document.getElementById('book-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close-btn');

document.addEventListener('click', e => {
  if (e.target.matches('.book-card img')) {
    modal.classList.remove('hidden');
    modalImg.src = e.target.src;
    modalTitle.textContent = e.target.dataset.title;
    modalDesc.textContent = e.target.dataset.desc;
  }
});

closeBtn.onclick = () => modal.classList.add('hidden');
window.onclick = e => { if (e.target === modal) modal.classList.add('hidden'); };
