import React, { useState, useEffect } from 'react'
import BookCard from './BookCard';

const LatestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books/all-books")
    .then(res => res.json())
    .then(data => setBooks(data.reverse().slice(0, 15)))
  }, [])

  return (
    <div>
      <BookCard books={books} headline="Latest Books" />
    </div>
  )
}

export default LatestBooks;