// components/AuthorsPage.jsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const SectionDescription = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2.5rem;
`;

const ProfilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProfileCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  overflow: hidden;
`;

const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

const ProfileName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ProfileRole = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #6e8c64;
`;

const ProfileDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
`;

const Authors = () => {
  const authors = [
    {
      name: "Claire Contamine",
      image: "/path-to-image-claire.jpg", // Replace with actual image path
      role: "Commissaire d’exposition et critique d’art",
      description:
        "Claire Contamine (née en 1994) est commissaire d’exposition et critique d’art à Bruxelles. Diplômée en histoire de l’art contemporain et en droit public, elle a collaboré avec des institutions comme le Palais de Tokyo et la Biennale d'Art Contemporain de Riga. Actuellement curatrice assistante à Kanal Centre-Pompidou, elle mène aussi une pratique indépendante en tant qu’auteure pour des catalogues et revues spécialisées.",
    },
    {
      name: "Myriam Boutoulle",
      image: "/path-to-image-myriam.jpg", // Replace with actual image path
      role: "Journaliste et rédactrice",
      description:
        "Myriam Boutoulle est journaliste et rédactrice spécialisée en art depuis 1995. Elle collabore régulièrement avec Connaissance des Arts depuis 1999, couvrant l’art moderne et contemporain, la photographie, le design et les métiers d’art. En plus de rédiger des articles, elle anime des conférences et forme des professionnels aux enjeux du secteur et à l’optimisation des contenus web (SEO).",
    },
    {
      name: "Clémentine Davin",
      image: "/path-to-image-clementine.jpg", // Replace with actual image path
      role: "Historienne de l'art",
      description:
        "Clémentine Davin est historienne de l’art, auteure et chercheuse en art contemporain, installée à Bruxelles. Diplômée du master L’art contemporain & son exposition de la Sorbonne, elle collabore avec des institutions majeures. Contributrice régulière de la revue l’art même, elle se penche sur les notions d’émergence et d’inclusivité dans l’art contemporain.",
    },
  ];

  const guides = [
    {
      name: "Olivier Cirendini",
      image: "/path-to-image-olivier.jpg",
      role: "Guide pour Art Trip : Paris",
      description:
        "Olivier Cirendini, journaliste et photographe indépendant, a signé de nombreux reportages pour des publications comme Grands Reportages, Géo Voyages, National Geographic France ou Libération.fr. Il partage sa passion pour Paris et l'art du voyage avec un regard affûté.",
    },
    {
      name: "Julien",
      image: "/path-to-image-julien.jpg",
      role: "Guide pour Art Trip : New York",
      description:
        "Julien, originaire de Lyon, explore New York depuis 2021. Engagé dans le tissu associatif à Brooklyn, il connaît chaque recoin de la ville, offrant des visites guidées captivantes.",
    },
    // Add the remaining guides in the same format...
  ];

  return (
    <Section>
      <SectionTitle>Les Autrices Permanentes</SectionTitle>
      <SectionDescription>
        Voici une présentation des autrices et de leurs expertises.
      </SectionDescription>
      <ProfilesGrid>
        {authors.map((author, index) => (
          <ProfileCard key={`author-${index}`}>
            <ProfilePicture image={author.image} />
            <ProfileName>{author.name}</ProfileName>
            <ProfileRole>{author.role}</ProfileRole>
            <ProfileDescription>{author.description}</ProfileDescription>
          </ProfileCard>
        ))}
      </ProfilesGrid>

      <SectionTitle>Nos Guides Uniques</SectionTitle>
      <SectionDescription>
        Apprenez-en plus sur nos guides passionnés pour des destinations
        d'exception !
      </SectionDescription>
      <ProfilesGrid>
        {guides.map((guide, index) => (
          <ProfileCard key={`guide-${index}`}>
            <ProfilePicture image={guide.image} />
            <ProfileName>{guide.name}</ProfileName>
            <ProfileRole>{guide.role}</ProfileRole>
            <ProfileDescription>{guide.description}</ProfileDescription>
          </ProfileCard>
        ))}
      </ProfilesGrid>
    </Section>
  );
};

export default Authors;
