// components/home/Newsletter.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #0a6caa;
  color: white;
`;

const SectionInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 4px 0 0 4px;
  outline: none;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    border-radius: 4px;
    margin-bottom: 1rem;
  }
`;

const SubscribeButton = styled.button`
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e67e00;
  }
  
  @media (max-width: 768px) {
    border-radius: 4px;
    padding: 1rem;
  }
`;

const ThankYouMessage = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 2rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    opacity: 0.9;
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement newsletter signup logic here
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
  };
  
  return (
    <Section>
      <SectionInner>
        <SectionTitle>Never Miss a Travel Tip</SectionTitle>
        <SectionDescription>
          Subscribe to our newsletter for exclusive travel tips, insider guides, and special offers.
        </SectionDescription>
        
        {isSubmitted ? (
          <ThankYouMessage>
            <h3>Thanks for subscribing!</h3>
            <p>Keep an eye on your inbox for the latest travel inspiration and exclusive deals.</p>
          </ThankYouMessage>
        ) : (
          <NewsletterForm onSubmit={handleSubmit}>
            <EmailInput
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeButton type="submit">
              Subscribe
            </SubscribeButton>
          </NewsletterForm>
        )}
      </SectionInner>
    </Section>
  );
};

export default Newsletter;
