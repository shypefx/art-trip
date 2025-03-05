// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
// Import other pages as needed
import Presentation from './pages/Presentation';
import Catalogue from './pages/Catalogue';
import Authors from './pages/Authors';
import Collaborators from './pages/Collaborators';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import BookDetailsPage from './pages/BookDetails';
import DestinationDetails from './pages/DestinationDetails';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <div className="app-wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ width: '100%', flex: 1 }}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/presentation" element={<Presentation />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/nos_auteurs" element={<Authors />} />
                <Route path="/collaborateurs" element={<Collaborators />} />
                <Route path="/galerie" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/books/:id" element={<BookDetailsPage />} />
                <Route path="/destinations/:id" element={<DestinationDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
