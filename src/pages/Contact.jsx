// components/ContactPage.jsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #0a6caa;
`;

const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;

  a {
    color: #0a6caa;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #555;
  }
`;

const SocialMediaSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a6caa;
  border-radius: 50%;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d7a;
  }
`;

const Contact = () => {
  return (
    <Section>
      <Title>Contactez-Nous</Title>
      
      {/* Email Section */}
      <ContactDetail>
        <p>
          <strong>Email :</strong>
        </p>
        <a href="mailto:guidearttrip@gmail.com">guidearttrip@gmail.com</a>
      </ContactDetail>

      {/* Phone Number Section */}
      <ContactDetail>
        <p>
          <strong>Téléphone :</strong>
        </p>
        <a href="tel:+33695352269">06 95 35 22 69</a>
      </ContactDetail>

      {/* Social Media Section */}
      <SocialMediaSection>
        <SocialIcon
          href="https://www.instagram.com/"
          target="_blank"
          title="Instagram"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </SocialIcon>
      </SocialMediaSection>
    </Section>
  );
};

export default Contact;
