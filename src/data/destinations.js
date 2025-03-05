// Import destination images
import parisImage from "../images/destinations/paris.jpg";
import bruxellesImage from "../images/destinations/bruxelles.jpg";
import tokyoImage from "../images/destinations/tokyo.jpg";
import rioImage from "../images/destinations/rio.jpg";
import newYorkImage from "../images/destinations/new_york.jpg";

// Import landmark images
import eiffelTowerImage from "../images/landmarks/eiffel-tower.jpg";
import louvreImage from "../images/landmarks/louvre.jpg";
import champsElyseesImage from "../images/landmarks/champs_elysees.jpg";
import notreDameImage from "../images/landmarks/notre-dame.jpg";

import grandPlaceImage from "../images/landmarks/grand-place.jpg";
import atomiumImage from "../images/landmarks/atomium.jpg";

import shibuyaImage from "../images/landmarks/shibuya-crossing.jpg";
import sensoJiImage from "../images/landmarks/senso-ji.jpg";

import christRedeemerImage from "../images/landmarks/christ-redeemer.jpg";
import sugarloafMountainImage from "../images/landmarks/sugarloaf-mountain.jpg";

import statueOfLibertyImage from "../images/landmarks/statue-of-liberty.jpg";
import timesSquareImage from "../images/landmarks/times-square.jpg";

const destinations = [
  {
    id: "paris",
    title: "Paris",
    image: parisImage,
    overview: `Paris, the City of Light, is renowned for its vibrant culture, historical landmarks, and iconic architecture. 
      Perfect for romantic moments or cultural exploration.`,
    famousPlaces: [
      {
        name: "Eiffel Tower",
        description: `The Eiffel Tower is one of the most recognizable monuments in the world, offering stunning views of Paris.`,
        image: eiffelTowerImage,
      },
      {
        name: "Louvre Museum",
        description: `Home to the famous Mona Lisa painting, the Louvre is a hub of art, history, and architecture.`,
        image: louvreImage,
      },
      {
        name: "Avenue des Champs-Élysées",
        description: `A legendary avenue lined with shops, cafes, and theaters, culminating at the Arc de Triomphe.`,
        image: champsElyseesImage,
      },
      {
        name: "Cathédrale Notre-Dame de Paris",
        description: `An iconic Gothic cathedral, home to stunning stained glass windows and incredible history.`,
        image: notreDameImage,
      },
    ],
  },
  {
    id: "bruxelles",
    title: "Bruxelles",
    image: bruxellesImage,
    overview: `Brussels is a cultural and political center known for its medieval architecture, chocolate, waffles, and comic book art.`,
    famousPlaces: [
      {
        name: "Grand-Place",
        description: `The Grand-Place is an opulent square surrounded by guildhalls and the beautiful Town Hall.`,
        image: grandPlaceImage,
      },
      {
        name: "Atomium",
        description: `This iconic structure symbolizes modern Brussels and offers panoramic views of the city.`,
        image: atomiumImage,
      },
    ],
  },
  {
    id: "tokyo",
    title: "Tokyo",
    image: tokyoImage,
    overview: `Tokyo is a dazzling metropolis blending tradition and modernity with temples, skyscrapers, and vibrant neighborhoods.`,
    famousPlaces: [
      {
        name: "Shibuya Crossing",
        description: `Shibuya Crossing is the busiest pedestrian crossing in the world and a symbol of Tokyo's urban energy.`,
        image: shibuyaImage,
      },
      {
        name: "Senso-ji Temple",
        description: `Tokyo's oldest Buddhist temple, Senso-ji is a serene spot amidst the city's fast-paced life.`,
        image: sensoJiImage,
      },
    ],
  },
  {
    id: "rio",
    title: "Rio de Janeiro",
    image: rioImage,
    overview: `Rio de Janeiro is famed for its vibrant culture, Christ the Redeemer statue, picturesque beaches, and infectious samba music.`,
    famousPlaces: [
      {
        name: "Christ the Redeemer",
        description: `The Christ the Redeemer statue stands majestically atop Mount Corcovado, overlooking Rio.`,
        image: christRedeemerImage,
      },
      {
        name: "Sugarloaf Mountain",
        description: `Sugarloaf Mountain offers panoramic views of the city, making it one of Rio's most spectacular locations.`,
        image: sugarloafMountainImage,
      },
    ],
  },
  {
    id: "new-york",
    title: "New York",
    image: newYorkImage,
    overview: `New York City, the city that never sleeps, is iconic for its skyscrapers, Broadway shows, and energetic atmosphere.`,
    famousPlaces: [
      {
        name: "Statue of Liberty",
        description: `The Statue of Liberty offers a symbol of freedom and outstanding views of New York Harbor.`,
        image: statueOfLibertyImage,
      },
      {
        name: "Times Square",
        description: `Known for its neon lights and bustling atmosphere, Times Square is the heart of Manhattan.`,
        image: timesSquareImage,
      },
    ],
  },
];

export default destinations;
