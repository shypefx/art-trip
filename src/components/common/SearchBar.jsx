// components/home/SearchBar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid #eee;
  }
`;

const SearchButton = styled.button`
  background-color: #0a6caa;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #085888;
  }
  
  svg {
    margin-right: 0.5rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
    // Implement search functionality
  };
  
  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Where do you want to go?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton type="submit">
          <FaSearch />
          <span>Search</span>
        </SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
};

export default SearchBar;
