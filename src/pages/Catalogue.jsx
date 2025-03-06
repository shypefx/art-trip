import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import books from "../data/book";

const CatalogueWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 10rem;
`;

const BookCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-height: 200px;
`;

const BookImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
`;

const BookContent = styled.div`
  flex: 1;
`;

const BookTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #125202;
`;

const BookDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  margin-bottom: 0.8rem;
`;

const DetailsLink = styled(Link)`
  color: #0a6caa;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Catalogue = () => {
  return (
    <CatalogueWrapper>
      {books.map((book) => (
        <BookCard key={book.id}>
          <BookImage src={book.image} alt={book.title} />
          <BookContent>
            <BookTitle>{book.title}</BookTitle>
            <BookDescription>
              {book.description.slice(0, 200)}...
            </BookDescription>
            <DetailsLink to={`/books/${book.id}`}>Voir les détails</DetailsLink>
          </BookContent>
        </BookCard>
      ))}
    </CatalogueWrapper>
  );
};

export default Catalogue;
