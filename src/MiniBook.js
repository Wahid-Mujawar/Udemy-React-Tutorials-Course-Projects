import React from 'react';

const books = [
  {
    id : 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/818mZjcEJ4L._AC_UL200_SR200,200_.jpg",
    title : "The Sudha Murty Book",
    author : "Sudha Murty"
  },

  {
    img :"https://images-eu.ssl-images-amazon.com/images/I/71KKZlVjbwL._AC_UL200_SR200,200_.jpg",
    title : "Wings of Fire An Autobiography",
    author : "A. P. J. Abdul Kalam"
  },
  
  {
    img :"https://images-eu.ssl-images-amazon.com/images/I/71KKZlVjbwL._AC_UL200_SR200,200_.jpg",
    title : "Wings of Fire An Autobiography",
    author : "A. P. J. Abdul Kalam"
  },
];

function BookList () {
  return(
    <section className="booklist">
      {books.map((book) => {
      return <Book key={book.id} book={book}></Book>
      })}
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props;
  return (
  <article className='book'>
    <img src={img} alt=''/>  
    <h4>{title}</h4>
    <h5>{author}</h5>
  </article>
  )
}

export default BookList