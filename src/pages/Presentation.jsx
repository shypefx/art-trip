import React from "react";
import Navbar from "../components/common/Navbar";

const Presentation = () => {
  // Define styles as JavaScript objects
  const styles = {
    container: {
      padding: "80px 20px", // Top padding to account for the fixed navbar
      maxWidth: "800px", // Center the content with maximum width
      margin: "0 auto", // Center it horizontally
      fontFamily: "Arial, sans-serif", // Define a clean font family
      lineHeight: "1.6", // Improve readability
      color: "#333", // Dark gray text color for better contrast
    },
    heading: {
      color: "#125202", // Green color for headings
      fontSize: "3rem", // Larger font size for headings
      marginBottom: "1rem", // Add space below headings
      textAlign: "center", // Center the heading text
      marginTop: "5rem", // Remove default margin from top
      paddingBottom: "4rem", // Add space below the heading
    },
    footer: {
      color: "#125202", // Green color for headings
      fontSize: "3rem", // Larger font size for headings
      marginBottom: "1rem", // Add space below headings
      textAlign: "center", // Center the heading text
      marginTop: "5rem", // Remove default margin from top
      paddingBottom: "4rem", // Add space below the heading
    },
    subHeading: {
      color: "#9EB697", // Dark blue color for sub-headings
      fontSize: "1.5rem", // Slightly smaller font size than main heading
      marginTop: "2rem", // Add a bit more space above sub-headings
      marginBottom: "0.5rem",
    },
    paragraph: {
      marginBottom: "1rem", // Add space between paragraphs
    },
    list: {
      marginLeft: "20px", // Indent bullet points
      marginBottom: "1rem",
      listStyleType: "disc", // Use bullet-point style for lists
    },
    listItem: {
      marginBottom: "0.5rem", // Add spacing between list items
    },
    highlight: {
      fontWeight: "bold", // Highlight important text
      color: "#125202", // Green color for emphasis
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Qui sommes-nous ?</h1>

        <p style={styles.paragraph}>
          Depuis toutes petites, nous avons été animées par deux grandes passions : 
          <span style={styles.highlight}> le voyage </span> et 
          <span style={styles.highlight}> l’art</span>. Nous avons exploré ensemble
          de nombreuses villes, avant de réaliser que nous voulions allier ces deux mondes à
          travers un projet qui nous ressemble.
        </p>

        <h2 style={styles.subHeading}>Chacune de nous a une sensibilité artistique bien marquée :</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <span style={styles.highlight}>Ilona Petit</span>, née le 25 novembre 2004, passe des heures
            à dessiner et ne manque jamais d’énergie. Solaire et sportive, elle est toujours partante pour
            l’aventure.
          </li>
          <li style={styles.listItem}>
            <span style={styles.highlight}>Oriane Esnault</span>, née le 3 octobre 2004, pourrait passer
            des journées entières dans les musées, émerveillée par chaque œuvre. 
            Perfectionniste et toujours souriante, elle est aussi une grande fan de jeux de société.
          </li>
          <li style={styles.listItem}>
            <span style={styles.highlight}>Ilona Dal Degan</span>, née le 16 novembre 2004, est fascinée par 
            l’impressionnisme et ne se sépare jamais de sa musique. Curieuse et sociable, elle aime échanger 
            et découvrir de nouvelles cultures.
          </li>
        </ul>

        <h2 style={styles.subHeading}>📚 Notre parcours</h2>
        <p style={styles.paragraph}>
          Nous nous sommes rencontrées à l’université de Nanterre, où nous avons suivi un
          <span style={styles.highlight}> BUT Information-Communication </span>, option Métiers du livre et 
          du patrimoine, spécialité édition. C’est au fil de nos études et d’un projet de groupe que 
          l’idée a germé : et si nous créions notre propre maison d’édition, dédiée aux amoureux du 
          street art et du voyage ?
        </p>

        <h2 style={styles.subHeading}>🌍 Un projet audacieux</h2>
        <p style={styles.paragraph}>
          Parce que l’art de la rue mérite d’être découvert autrement, nos guides vous plongent au cœur des
          mégapoles, à la rencontre des fresques emblématiques et des adresses incontournables.
        </p>

        <h3 style={styles.subHeading}>💡 Pourquoi un guide papier alors que les blogs et applis existent déjà ?</h3>
        <p style={styles.paragraph}>
          Parce que nous voulons vous offrir une expérience authentique, loin des écrans et des algorithmes ! 
          Nos guides sont conçus pour :
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>✔ <span style={styles.highlight}>Vous libérer de votre téléphone</span> : on passe déjà trop de temps les yeux rivés sur nos écrans !</li>
          <li style={styles.listItem}>✔ <span style={styles.highlight}>Garder un souvenir de voyage unique</span> : un objet que l’on feuillette, conserve et partage. 📘</li>
          <li style={styles.listItem}>✔ <span style={styles.highlight}>Bénéficier d’une sélection pointue</span> : nous sommes des passionnées, et nous dénichons pour vous les meilleurs spots.</li>
          <li style={styles.listItem}>✔ <span style={styles.highlight}>Éviter la surcharge d’infos et les infox</span> : fini le flot d’avis contradictoires en ligne, faites confiance à une source fiable et claire.</li>
        </ul>

        <p style={styles.paragraph}>
          <span style={styles.highlight}>Notre mission :</span> faire du street art une aventure immersive et accessible, 
          pour que chaque voyageur puisse s’approprier la ville autrement.
        </p>

        <h1 style={styles.footer}>🚀 Bienvenue dans notre univers !</h1>
      </div>
    </>
  );
};

export default Presentation;
