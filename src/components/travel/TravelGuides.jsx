// src/components/TravelGuides/TravelGuides.jsx
import React from 'react';
import './TravelGuides.css';
import { Link } from 'react-router-dom';

const TravelGuides = ({ guides }) => {
  return (
    <section className="travel-guides-section">
      <div className="guides-header">
        <h2>Expert Travel Guides</h2>
        <Link to="/guides" className="view-all">View All Guides</Link>
      </div>
      
      <div className="guides-container">
        {guides.map(guide => (
          <article key={guide.id} className="guide-card">
            <div className="guide-image">
              <img src={guide.image} alt={guide.title} />
              <span className="guide-category">{guide.category}</span>
            </div>
            <div className="guide-content">
              <h3>{guide.title}</h3>
              <p className="guide-excerpt">{guide.excerpt}</p>
              <div className="guide-meta">
                <span className="guide-author">By {guide.author}</span>
                <span className="guide-date">{guide.date}</span>
              </div>
              <Link to={`/guides/${guide.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TravelGuides;
