import React, { useEffect, useState } from "react";

const AnimatedText = () => {
  const [scrollTop, setScrollTop] = useState(0);

  // Text array for randomization
  const textArray = [
    "Canada",
    "Bretagne",
    "Barcelone",
    "Marseille",
    "New York",
    "Venise",
    "Madrid",
    "Milan",
    "Sardaigne",
    "Lyon",
    "Vienne",
    "Hong Kong",
    "Chypre",
    "Pérou",
    "New Delhi",
    "Shanghai",
    "São Paulo",
  ];

  // Randomize text for lines
  const randomizeText = () => textArray.sort(() => Math.random() - 0.5);

  // State will hold randomized versions of text for each line
  const [lines, setLines] = useState([randomizeText(), randomizeText(), randomizeText()]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = {
    wrapper: {
      width: "100%",
      position: "relative",
      backgroundColor: "#fff",
      padding: "1rem 0",
      overflow: "hidden",
      transform: "skewY(-5deg)", // Slight inclination
    },
    container: {
      display: "grid",
      gridTemplateRows: "repeat(3, 1fr)", // Three rows
      rowGap: "1rem",
    },
    row: (index) => ({
      display: "flex",
      whiteSpace: "nowrap",
      transform: `translateX(${scrollTop * (index + 1) * 0.5}px)`, // Adjust scroll animation speed per row
    }),
    text: {
      display: "inline-block",
      marginRight: "2rem", // Space between words
      fontSize: "24px",
      fontWeight: "bold",
      color: "#00a4CC",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Render 3 rows with randomized text */}
        {lines.map((line, rowIndex) => (
          <div key={rowIndex} style={styles.row(rowIndex)}>
            {line.map((text, idx) => (
              <span key={idx} style={styles.text}>
                {text} •
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
