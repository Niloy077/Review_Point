# Review Point | Book Reviews & Awards

Welcome to **Review Point**, a web application designed to showcase book reviews and award-winning literature. This project features a dynamic interface to explore books categorized by "New Arrivals," "Most Popular," "Nobel Prize Winners," and "Man Booker Prize Winners." Users can search across all books, view details in a modal, add new books, and remove existing ones.


## Overview
Review Point is a single-page web application built with HTML, CSS, and JavaScript. It allows users to browse a curated collection of books, search for titles or authors, and interact with the content through a user-friendly interface. The application stores book data locally using the browser's `localStorage`, enabling persistence across sessions.

## Features
- **Category Browsing**: Explore books under "New Arrivals," "Most Popular," "Nobel Prize," and "Man Booker Prize" categories.
- **Search Functionality**: Search across all books by title or author, with results displayed under a "Books" header or a "Not Found" message if no matches.
- **Book Details**: Click on a book cover to view its title, author, and description in a modal popup.
- **Add Books**: Add new books with a title, author, description, category, and image via a modal form.
- **Remove Books**: Remove books with a confirmation prompt, updating the local storage.
- **Responsive Design**: Adapts to various screen sizes, from desktops to mobile devices.
- **Local Storage**: Persists book data in the browser for a seamless experience.

## Screenshots

### Home Page
![Home Page](<images/home.png>)

### Search Suggestions
![Search Suggestions](<images/search.png>)

### Book Modal View
![Book Modal](<images/book_view.png>)

### Add Book Modal
![Add Book Modal](<images/add_modal.png>)

## Installation
To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Niloy077/Review_Point.git
   cd review-point
   open index.html in your browser