// Example book data (expand later or fetch via AI)
const books = [
    {
      img: "images/b1.jpeg",
      title: "1st to Die",
      author: "James Patterson",
      desc: "A 2001 crime novel introducing the Women's Murder Club — four friends solving San Francisco's toughest murder cases."
    },
    {
      img: "images/b2.jpeg",
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      desc: "A moving story of friendship, betrayal, and redemption set in a changing Afghanistan."
    },
    {
      img: "images/b3.jpeg",
      title: "The Alchemist",
      author: "Paulo Coelho",
      desc: "A philosophical tale about destiny, dreams, and finding purpose in the journey of life."
    },
    {
      img: "images/b4.jpeg",
      title: "The Woods",
      author: "Harlan Coben",
      desc: "A mystery about four teens who vanished in the woods — and the secrets that never stayed buried."
    }
  ];
  
  // Modal elements
  const modal = document.getElementById('book-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalAuthor = document.getElementById('modal-author');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.getElementById('close-btn');
  
  // Click on book cover
  document.querySelectorAll('.book-grid img').forEach((img, index) => {
    img.addEventListener('click', () => {
      const b = books[index % books.length];
      modalImg.src = b.img;
      modalTitle.textContent = b.title;
      modalAuthor.textContent = `Author: ${b.author}`;
      modalDesc.textContent = b.desc;
      modal.classList.remove('hidden');
    });
  });
  
  // Close modal
  closeBtn.onclick = () => modal.classList.add('hidden');
  modal.onclick = e => {
    if (e.target === modal) modal.classList.add('hidden');
  };
  