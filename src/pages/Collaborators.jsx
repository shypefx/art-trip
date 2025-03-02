// components/CollaboratorsPage.jsx
import React from "react";
import styled from "styled-components";
import noholito from '../images/colaborateur/noholito.png';
import bruno from '../images/colaborateur/bruno.png';
import axelle from '../images/colaborateur/axelle.png';
import noholita from '../images/colaborateur/noholita.png';


const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const SubSectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #0a6caa;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: #ffffff;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.div`
  flex: 0 0 auto;
  width: 80px;
  height: 80px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

const ProfileContent = styled.div`
  flex: 1;
`;

const ProfileName = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProfileDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const LinksList = styled.ul`
  margin-top: 1rem;
  padding-left: 2rem;
  list-style: square;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #0a6caa;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Collaborators = () => {
  const influencers = [
    {
      name: "Noholito (James Gueugnot)",
      image: noholito, // Replace with actual image
      description:
        "Noholito, de son vrai nom James Gueugnot, est un influenceur français né le 30 avril 1993. Révélé sur TikTok durant le confinement, il partage ses voyages en solo avec humour et spontanéité. Aujourd’hui, il réunit près de 7 millions d’abonnés et génère des vidéos de voyage percutantes qui témoignent de sa popularité et son engagement.",
    },
    {
      name: "Bruno Maltor",
      image: bruno, // Replace with actual image
      description:
        "Bruno Maltor, voyageur passionné et créateur de contenu, est l'auteur du blog 'Votre Tour du Monde'. Sa communauté dépasse 1 million de personnes sur YouTube et Instagram, et il a créé Périples, une marque rassemblant des voyageurs francophones autour de valeurs communes.",
    },
    {
      name: "Withaxie (Axelle)",
      image: axelle, // Replace with actual image
      description:
        "Axelle, alias Withaxie, est une créatrice de contenu passionnée par la photographie et l’aventure. Avec une expérience riche en voyages, elle partage son quotidien avec 261 000 abonnés sur Instagram et inspire sa communauté à réaliser leurs rêves.",
    },
    {
      name: "Noholita (Camille Callen)",
      image: noholita, // Replace with actual image
      description:
        "Noholita, influenceuse lifestyle et voyage, est suivie par plus d’un million de personnes sur Instagram. Elle partage ses aventures, alliant paysages incroyables, découvertes culinaires et moments sincères, pour créer une connexion authentique avec sa communauté.",
    },
  ];

  const agencyPartner = {
    name: "Selectour Travel Agency",
    description:
      "Afin de financer notre projet, nous avons collaboré avec l'agence de voyage parisienne Selectour, qui a généreusement pris en charge le séjour offert à New York et vend nos livres dans leur agence.",
    link: "https://www.selectour.com",
  };

  const conceptStores = [
    { name: "Bonjour Concept Store (Paris)", link: "#" },
    { name: "Twins Concept Store (Paris)", link: "#" },
    { name: "Flux Concept Store (Paris)", link: "#" },
    { name: "Citadium", link: "#" },
  ];

  const galleries = [
    { name: "Galerie Itinerrance (Paris)", link: "#" },
    { name: "Street Art Addict (Paris)", link: "#" },
    { name: "Musée ART 42 (Paris)", link: "#" },
    { name: "Urban Gallery (Marseille)", link: "#" },
  ];

  return (
    <Section>
      <SectionTitle>Collaborateurs</SectionTitle>

      <SubSectionTitle>Partenaires avec des influenceurs</SubSectionTitle>
      {influencers.map((influencer, index) => (
        <ProfileCard key={`influencer-${index}`}>
          <ProfileImage image={influencer.image} />
          <ProfileContent>
            <ProfileName>{influencer.name}</ProfileName>
            <ProfileDescription>{influencer.description}</ProfileDescription>
          </ProfileContent>
        </ProfileCard>
      ))}

      <SubSectionTitle>Agence de Voyage</SubSectionTitle>
      <ProfileCard>
        <ProfileContent>
          <ProfileName>{agencyPartner.name}</ProfileName>
          <ProfileDescription>{agencyPartner.description}</ProfileDescription>
          <LinksList>
            <li>
              <a href={agencyPartner.link} target="_blank" rel="noopener noreferrer">
                Visiter le site
              </a>
            </li>
          </LinksList>
        </ProfileContent>
      </ProfileCard>

      <SubSectionTitle>Concept Stores</SubSectionTitle>
      <LinksList>
        {conceptStores.map((store, index) => (
          <LinkItem key={`store-${index}`}>
            <a href={store.link} target="_blank" rel="noopener noreferrer">
              {store.name}
            </a>
          </LinkItem>
        ))}
      </LinksList>

      <SubSectionTitle>Galeries et Musées Street Art</SubSectionTitle>
      <LinksList>
        {galleries.map((gallery, index) => (
          <LinkItem key={`gallery-${index}`}>
            <a href={gallery.link} target="_blank" rel="noopener noreferrer">
              {gallery.name}
            </a>
          </LinkItem>
        ))}
      </LinksList>
    </Section>
  );
};

export default Collaborators;
