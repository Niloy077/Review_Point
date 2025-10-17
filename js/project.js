// Book data (loaded from localStorage or defaults)
let bookData = JSON.parse(localStorage.getItem('bookData')) || {
  'new-arrivals': [
    {
      img: "images/nr1.jpeg",
      title: "The Glass Hotel",
      author: "Emily St. John Mandel",
      desc: "The Glass Hotel is a 2020 novel by Canadian writer Emily St. John Mandel. It is Mandel's fifth novel, and the first since winning the Arthur C. Clarke Award in 2015. It follows the aftermath of a disturbing graffiti incident at a hotel on Vancouver Island and the collapse of an international Ponzi scheme."
    },
    {
      img: "images/nr2.jpeg",
      title: "Long Bright River: A Novel",
      author: "Liz Moore",
      desc: "Alternating its present-day mystery with the story of the sisters' childhood and adolescence, Long Bright River is at once heart-pounding and heart-wrenching: a gripping suspense novel that is also a moving story of sisters, addiction, and the formidable ties that persist between place, family, and fate."
    },
    {
      img: "images/nr3.jpeg",
      title: "The Vanishing Half",
      author: "Brit Bennett",
      desc: "Looking well beyond issues of race, The Vanishing Half considers the lasting influence of the past as it shapes a person's decisions, desires, and expectations, and explores some of the multiple reasons and realms in which people sometimes feel pulled to live as something other than their origins."
    },
    {
      img: "images/nr4.jpeg",
      title: "The India Way",
      author: "S.JAISHANKAR",
      desc: "The India Way: How India’s Top Business Leaders Are Revolutionizing Management is published by the Harvard Business Press. It's a non-fictional book written by Peter Cappelli, Harbir Singh, Jitendra Singh and Michael Useem of the Wharton School at the University of Pennsylvania. The book was released in the United States on March 23, 2010, and was released in India in May 2010."
    },
    {
      img: "images/nr5.jpeg",
      title: "The Lies You Told",
      author: "Harriet Tyce",
      desc: "In the playground it's the law of the jungle But at the school gate, there are no rules at all... When Sadie Roper moves back to London, she's determined to pick up the pieces of her shattered life. First, she needs to get her daughter settled into a new school-one of the most exclusive in the city. Next, she's going to get back the high-flying criminal barrister career she sacrificed for marriage ten years earlier. But nothing goes quite as planned..."
    },
    {
      img: "images/nr6.jpg",
      title: "When Love Came Calling",
      author: "Preeti Shenoy",
      desc: "When Love Came Calling by Preeti Shenoy. When love came calling is the story of two lovebirds Puja and Arush written by Preeti Shenoy. Both of them belong from different places but meet in a rural location and fall in love..."
    },
    {
      img: "images/nr7.jpeg",
      title: "Death In Her Hands",
      author: "Ottessa Moshfegh",
      desc: "DEATH IN HER HANDS is a haunting atmospheric tale of a self-isolating woman who is losing touch with community, reality and herself. Vesta lives in a remote cabin on a lake all by herself with only Charlie for company. She has no phone, an unreliable car and little desire to interact with anyone other than Charlie."
    },
    {
      img: "images/nr8.jpeg",
      title: "The Vanishing Half",
      author: "Brit Bennett",
      desc: "THE VANISHING HALF, the next novel from the stunning National Book Award 5 Under 35 recipient Brit Bennett, begins when Desiree Vignes returns to her hometown of Mallard, Louisiana, with a daughter who looks nothing like her and no husband. No one has seen Desiree, or her identical twin sister Stella, since they disappeared from town and reappeared in New Orleans attempting to create new lives."
    }
  ],
 'most-popular': [
    {
      img: "images/mp1.jpeg",
      title: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      desc: "The Lord of the Rings by J.R.R. Tolkien tells the story of the War of the Ring in the fictional world of Middle-earth. The long novel, commonly published as three volumes and mistakenly called a trilogy, centers around the magical One Ring, which was discovered by Bilbo Baggins in the earlier novel The Hobbit."
    },
    {
      img: "images/mp2.jpeg",
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      desc: "The plot revolves around the adventures of a noble (hidalgo) from La Mancha named Alonso Quixano, who reads so many chivalric romances that he loses his mind and decides to become a knight-errant (caballero andante) to revive chivalry and serve his nation, under the name Don Quixote de la Mancha."
    },
    {
      img: "images/mp3.jpeg",
      title: "Catch-22",
      author: "Joseph Heller",
      desc: "Catch-22 is a satirical war novel by American author Joseph Heller. He began writing it in 1953; the novel was first published in 1961. Often cited as one of the most significant novels of the twentieth century, it uses a distinctive non-chronological third-person omniscient narration, describing events from the points of view of different characters. The separate storylines are out of sequence so the timeline develops along with the plot."
    },
    {
      img: "images/mp4.png",
      title: "The Catcher in the Rye",
      author: "J. D. Salinger",
      desc: "The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world."
    },
    {
      img: "images/mp5.jpeg",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      desc: "Pride and Prejudice is set in rural England in the early 19th century, and it follows the Bennet family, which includes five very different sisters. Mrs. Bennet is anxious to see all her daughters married, especially as the modest family estate is to be inherited by William Collins when Mr. Bennet dies. At a ball, the wealthy and newly arrived Charles Bingley takes an immediate interest in the eldest Bennet daughter, the beautiful and shy Jane. The encounter between his friend Darcy and Elizabeth is less cordial."
    },
    {
      img: "images/mp6.jpeg",
      title: "War and Peace",
      author: "Leo Tolstoy",
      desc: "War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men."
    },
    {
      img: "images/mp7.jpeg",
      title: "The Alchemist",
      author: "Paulo Coelho",
      desc: "The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids."
    },
    {
      img: "images/mp8.jpeg",
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      desc: "Anna Karenina is a novel by the Russian author Leo Tolstoy, first published in book form in 1878. Many writers consider Anna Karenina the greatest work of literature ever, and Tolstoy himself called it his first true novel. It was initially released in serial installments from 1873 to 1877 in the periodical The Russian Messenger. It deals with themes of betrayal, faith, family, marriage, Imperial Russian society, desire, and rural vs. city life. The plot centers on an extramarital affair between Anna and dashing cavalry officer Count Alexei Kirillovich Vronsky that scandalizes the social circles of Saint Petersburg and forces the young lovers to flee to Italy in a search for happiness. After they return to Russia, their lives further unravel."
    }
  ],
  'nobel-prize': [
    {
      img: "images/np1.jpeg",
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      desc: "Widely acknowledged as Gabriel García Márquez's finest work, One Hundred Years of Solitude tells the story of the fictional Colombian town Macondo and the rise and fall of its founders, the Buendía family. Macondo fights off plagues of insomnia, war, and rain. Mysteries are spun out of almost nothing."
    },
    {
      img: "images/np2.jpeg",
      title: "Siddhartha",
      author: "Hermann Hesse",
      desc: "The book Siddhartha about 1922, 1951 (U.S.) listen)) is a 1922 novel by Hermann Hesse that deals with the spiritual journey of self-discovery of a man named Siddhartha during the time of the Gautama Buddha. The book, Hesse's ninth novel, was written in German, in a simple, lyrical style."
    },
    {
      img: "images/np3.jpeg",
      title: "East of Eden",
      author: "John Steinbeck",
      desc: "East of Eden, novel by John Steinbeck, published in 1952. It is a symbolic re-creation of the biblical story of Cain and Abel woven into a history of California's Salinas Valley. Often described as Steinbeck's most ambitious novel, East of Eden brings to life the intricate details of two families, the Trasks and the Hamiltons, and their interwoven stories."
    },
    {
      img: "images/np4.jpeg",
      title: "The Old Man and the Sea",
      author: "Ernest Hemingway",
      desc: "The Old Man and the Sea is a short novel written by the American author Ernest Hemingway in 1951 in Cuba, and published in 1952. ... One of his most famous works, it tells the story of Santiago, an aging Cuban fisherman who struggles with a giant marlin far out in the Gulf Stream off the coast of Cuba."
    },
    {
      img: "images/np5.jpeg",
      title: "The Sun Also Rises",
      author: "Ernest Hemingway",
      desc: "The Sun Also Rises is a 1926 novel by American writer Ernest Hemingway that portrays American and British expatriates who travel from Paris to the Festival of San Fermín in Pamplona to watch the running of the bulls and the bullfights. The novel was published in the United States in October 1926 by Scribner's."
    },
    {
      img: "images/np6.jpeg",
      title: "The Plague",
      author: "Albert Camus",
      desc: "The Plague is a novel by Albert Camus, published in 1947, that tells the story from the point of view of an unknown narrator of a plague sweeping the French Algerian city of Oran. The novel presents a snapshot of life in Oran as seen through the author's distinctive absurdist point of view."
    },
    {
      img: "images/np7.jpeg",
      title: "Hunger",
      author: "Knut Hamsun",
      desc: "Hunger, novel by Knut Hamsun, published in 1890 as Sult. It is the semiautobiographical chronicle of the physical and psychological hunger experienced by an aspiring writer in late 19th-century Norway."
    },
    {
      img: "images/np8.jpeg",
      title: "The Magic Mountain",
      author: "Thomas Mann",
      desc: "It is considered a towering example of the bildungsroman, a novel recounting the main character's formative years. The Magic Mountain tells the story of Hans Castorp, a young German engineer, who goes to visit a cousin in a tuberculosis sanatorium in the mountains of Davos, Switz."
    }
  ],
  'man-booker': [
    {
      img: "images/mb1.jpg",
      title: "Lincoln in the Bardo",
      author: "George Saunders",
      desc: "Lincoln in the Bardo is concerned with how Lincoln, one of America’s most consequential presidents mourned. By focusing on Lincoln, Saunders spotlights the universality of death. No one can escape it. In fact, the powerful and the elite appear to suffer the greatest devastation when they lose a loved one."
    },
    {
      img: "images/mb2.jpg",
      title: "A Brief History of Seven Killings",
      author: "Marlon James",
      desc: "A Brief History of Seven Killings is the third novel by Jamaican author Marlon James. The novel spans several decades and explores the attempted assassination of Bob Marley in Jamaica in 1976 and its aftermath, through the crack wars in New York City in the 1980s and a changed Jamaica in the 1990s."
    },
    {
      img: "images/mb3.jpg",
      title: "The Testaments",
      author: "Margaret Atwood",
      desc: "The Testaments, Margaret Atwood's follow-up to her classic novel The Handmaid's Tale, returns to that dystopic theocracy 15 years later via three protagonists: Agnes, a girl in Gilead who from a young age rejects marriage, though her parents intend to marry her to a powerful Commander."
    },
    {
      img: "images/mb4.jpg",
      title: "Girl, Woman, Other",
      author: "Bernardine Evaristo",
      desc: "Girl, Woman, Other is about struggle, but it is also about love, joy and imagination. The book culminates with her protagonists – black women of different generations, faiths, classes, politics and heritages, and a few men too – thrown together at a party for a soap opera-style grand finale."
    },
    {
      img: "images/mb5.jpg",
      title: "The Sellout",
      author: "Paul Beatty",
      desc: "The satirical novel is a must read. The Sellout, Paul Beatty's fourth book and one that took him seven years to write, tells the story of a young black man in Los Angeles who tries to reintroduce slavery and segregation in his own neighborhood."
    },
    {
      img: "images/mb6.jpg",
      title: "Milkman",
      author: "Anna Burns",
      desc: "Milkman is a story of the way inaction can have enormous repercussions, in a time when the wrong flag, wrong religion, or even a sunset can be subversive. Told with ferocious energy and sly, wicked humor, Milkman establishes Anna Burns as one of the most consequential voices of our day."
    },
    {
      img: "images/mb7.jpg",
      title: "The Narrow Road to the Deep North",
      author: "Richard Flanagan",
      desc: "The novel tells the story of an Australian doctor haunted by memories of a love affair with his uncle's wife and of his subsequent experiences as a Far East prisoner of war during the construction of the Burma Railway. Decades later, he finds his growing celebrity at odds with his feelings of failure and guilt."
    },
    {
      img: "images/mb8.jpeg",
      title: "The Mirror and the Light",
      author: "Hilary Mantel",
      desc: "The Mirror & The Light covers the period following the death of Anne Boleyn in 1536. It documents Cromwell's ascent to the pinnacle of his riches and power, followed by his fall from royal favour and his public execution at Tower Hill in 1540."
    }
  ]
};

// Function to populate book grids dynamically with remove buttons
function populateGrids() {
  Object.keys(bookData).forEach(cat => {
    const grid = document.querySelector(`#${cat} .book-grid`);
    if (grid) {
      grid.innerHTML = '';
      bookData[cat].forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'book-card';
        
        // Main image
        const img = document.createElement('img');
        img.src = book.img;
        img.alt = book.title;
        card.appendChild(img);

        // Remove button overlay
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '×';
        removeBtn.className = 'remove-btn';
        removeBtn.title = 'Remove book';
        removeBtn.onclick = (e) => {
          e.stopPropagation(); // Prevent triggering image click
          if (confirm(`Remove "${book.title}" by ${book.author}?`)) {
            bookData[cat].splice(index, 1);
            localStorage.setItem('bookData', JSON.stringify(bookData));
            populateGrids(); // Refresh grid
          }
        };
        card.appendChild(removeBtn);

        grid.appendChild(card);

        // Book modal click (on image only, not remove button)
        img.addEventListener('click', () => {
          modalImg.src = book.img;
          modalTitle.textContent = book.title;
          modalAuthor.textContent = `Author: ${book.author}`;
          modalDesc.textContent = book.desc;
          modal.classList.remove('hidden');
        });
      });
    }
  });
}

// Populate on load
populateGrids();

// Navigation toggling
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(link.dataset.target);
    if (target) {
      target.classList.add('active');
    }
  });
});

// Book view modal elements
const modal = document.getElementById('book-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalAuthor = document.getElementById('modal-author');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close-btn');

// Close view modal
closeBtn.onclick = () => modal.classList.add('hidden');
modal.onclick = e => {
  if (e.target === modal) modal.classList.add('hidden');
};

// Add book modal elements
const addBtn = document.getElementById('add-book-btn');
const addModal = document.getElementById('add-modal');
const addClose = document.getElementById('add-close-btn');
const addForm = document.getElementById('add-form');

// Open add modal
addBtn.addEventListener('click', () => addModal.classList.remove('hidden'));

// Close add modal
addClose.onclick = () => addModal.classList.add('hidden');
addModal.onclick = e => {
  if (e.target === addModal) addModal.classList.add('hidden');
};

// Handle add form submission
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('add-title').value;
  const author = document.getElementById('add-author').value;
  const desc = document.getElementById('add-desc').value;
  const cat = document.getElementById('add-category').value;
  const file = document.getElementById('add-image').files[0];

  if (file && title && author && desc) {
    const reader = new FileReader();
    reader.onload = function(ev) {
      const imgData = ev.target.result;
      const newBook = { img: imgData, title, author, desc };
      bookData[cat].push(newBook);
      localStorage.setItem('bookData', JSON.stringify(bookData));
      populateGrids();
      addModal.classList.add('hidden');
      addForm.reset();
      alert('Book added successfully!');
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please fill all fields and select an image.');
  }
});