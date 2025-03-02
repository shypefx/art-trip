// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Gliker';
  src: url('/fonts/Gliker-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

  :root {
    --primary: #333333;
    --accent: #4A89DC;
    --text: #333;
    --text-light: #777;
    --bg-light: #f9f9f9;
    --bg-green: #ECEDE8;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: 'Arial', sans-serif; /* Default: Arial */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    color: var(--text);
    width: 100%;
    overflow-x: hidden;
  }

  body, #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-color: #ECEDE8;
  }

  /* Headings: Use Gliker for Titles */
  h1 {
    font-family: 'Gliker', sans-serif;
    color: #9EB697;
  }

  /* Subtitles: Use Montserrat */
  h2 ,h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500; /* Adjust weight as needed */
    color: #9EB697;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Default body text */
  body {
    font-family: 'Arial', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text);
  }

  /* Reusable container class */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;    
    @media (max-width: 768px) {
      padding: 0 1.25rem;
    }
    @media (max-width: 576px) {
      padding: 0 1rem;
    }
  }
  
  section {
    width: 100%;
    padding: 5rem 0;
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
    @media (max-width: 576px) {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles;
