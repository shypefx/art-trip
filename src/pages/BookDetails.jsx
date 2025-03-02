import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import books from "../data/book";

const DetailsWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
  background-color: #f9f9f9;
  border-radius: 25px;
`;

const BookImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const BookTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #125202;
`;

const BookInfo = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const book = books.find((book) => book.id === id); // Find matching book

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <DetailsWrapper>
      <BookImage src={book.image} alt={book.title} />
      <BookTitle>{book.title}</BookTitle>
      <BookInfo><strong>Description:</strong> {book.description}</BookInfo>
      <BookInfo><strong>Date de parution:</strong> {book.date}</BookInfo>
      <BookInfo><strong>Nombre de pages:</strong> {book.pages}</BookInfo>
      <BookInfo><strong>ISBN:</strong> {book.isbn}</BookInfo>
      <BookInfo><strong>Prix:</strong> {book.price}</BookInfo>
      <BookInfo><strong>Format:</strong> {book.format}</BookInfo>
    </DetailsWrapper>
  );
};

export default BookDetails;
