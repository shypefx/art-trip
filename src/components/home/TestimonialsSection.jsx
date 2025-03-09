// components/home/TestimonialsSection.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #ECEDE8;
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;

  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialSlider = styled.div`
  display: flex;
  overflow: hidden;
`;

const Testimonial = styled.div`
  min-width: 100%;
  transition: transform 0.5s ease;
  transform: translateX(${props => -100 * props.activeIndex}%);
  padding: 0 1rem;
`;

const TestimonialInner = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2.5rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: #0a6caa;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;

  line-height: 1.7;
  margin-bottom: 2rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  margin-bottom: 1rem;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

const AuthorLocation = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Stars = styled.div`
  color: #ffb100;
  font-size: 1.2rem;
  
  svg {
    margin: 0 2px;
  }
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SliderDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#0a6caa' : '#ccc'};
  margin: 0 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "Les guides de voyage sur ce site ont été incroyablement utiles pour planifier mon voyage en Europe. J'ai découvert tellement de joyaux cachés que je n'aurais pas trouvés autrement!",
      name: "Sarah Johnson",
      location: "New York, États-Unis",
      stars: 5
    },
    {
      id: 2,
      text: "J'utilise ce site depuis des années pour planifier mes aventures. Les conseils sur les destinations sont toujours parfaits et m'ont aidé à créer des souvenirs de voyage inoubliables.",
      name: "David Chen",
      location: "Vancouver, Canada",
      stars: 5
    },
    {
      id: 3,
      text: "Les guides détaillés des villes m'ont fait gagner tellement de temps et ont rendu mon voyage au Japon absolument sans accroc. J'utiliserai certainement cette ressource pour tous mes futurs voyages.",
      name: "Emma Wilson",
      location: "Londres, Royaume-Uni",
      stars: 4
    },
    {
      id: 4,
      text: "Ce site est incroyable! Les guides de voyage sont très utiles et m'ont aidé à planifier mon voyage en France. Merci beaucoup!",
      name: "Paul Leclerc",
      location: "Paris, France",
      stars: 4
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <Section>
      <SectionInner>
        <SectionHeader>
          <SectionTitle>Avis des voyageurs</SectionTitle>
          <SectionDescription>
            Visualisez les témoignages de nos clients satisfaits.
          </SectionDescription>
        </SectionHeader>
        
        <TestimonialsContainer>
          <TestimonialSlider>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={testimonial.id} activeIndex={activeIndex}>
                <TestimonialInner>
                  <QuoteIcon>
                    <FaQuoteLeft />
                  </QuoteIcon>
                  <TestimonialText>
                    {testimonial.text}
                  </TestimonialText>
                  <TestimonialAuthor>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorLocation>{testimonial.location}</AuthorLocation>
                  </TestimonialAuthor>
                  <Stars>
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </Stars>
                </TestimonialInner>
              </Testimonial>
            ))}
          </TestimonialSlider>
          
          <SliderControls>
            {testimonials.map((_, index) => (
              <SliderDot 
                key={index} 
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </SliderControls>
        </TestimonialsContainer>
      </SectionInner>
    </Section>
  );
};

export default TestimonialsSection;
