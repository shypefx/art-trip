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
    overview: `Paris, la Ville Lumière, est renommée pour sa culture vibrante, ses monuments historiques et son architecture emblématique. 
      Parfait pour des moments romantiques ou une exploration culturelle.`,
    famousPlaces: [
      {
        name: "Tour Eiffel",
        description: `La Tour Eiffel est l'un des monuments les plus reconnaissables au monde, offrant des vues imprenables sur Paris.`,
        image: eiffelTowerImage,
      },
      {
        name: "Musée du Louvre",
        description: `Abritant le célèbre tableau de la Joconde, le Louvre est un centre d'art, d'histoire et d'architecture.`,
        image: louvreImage,
      },
      {
        name: "Avenue des Champs-Élysées",
        description: `Une avenue légendaire bordée de boutiques, de cafés et de théâtres, culminant à l'Arc de Triomphe.`,
        image: champsElyseesImage,
      },
      {
        name: "Cathédrale Notre-Dame de Paris",
        description: `Une cathédrale gothique emblématique, abritant de magnifiques vitraux et une histoire incroyable.`,
        image: notreDameImage,
      },
    ],
  },
  {
    id: "bruxelles",
    title: "Bruxelles",
    image: bruxellesImage,
    overview: `Bruxelles est un centre culturel et politique connu pour son architecture médiévale, son chocolat, ses gaufres et son art de la bande dessinée.`,
    famousPlaces: [
      {
        name: "Grand-Place",
        description: `La Grand-Place est une place opulente entourée de maisons de corporations et de la magnifique Hôtel de Ville.`,
        image: grandPlaceImage,
      },
      {
        name: "Atomium",
        description: `Cette structure emblématique symbolise le Bruxelles moderne et offre des vues panoramiques sur la ville.`,
        image: atomiumImage,
      },
    ],
  },
  {
    id: "tokyo",
    title: "Tokyo",
    image: tokyoImage,
    overview: `Tokyo est une métropole éblouissante mêlant tradition et modernité avec des temples, des gratte-ciels et des quartiers vibrants.`,
    famousPlaces: [
      {
        name: "Shibuya Crossing",
        description: `Shibuya Crossing est le passage piéton le plus fréquenté au monde et un symbole de l'énergie urbaine de Tokyo.`,
        image: shibuyaImage,
      },
      {
        name: "Temple Senso-ji",
        description: `Le plus ancien temple bouddhiste de Tokyo, Senso-ji est un lieu serein au milieu de la vie trépidante de la ville.`,
        image: sensoJiImage,
      },
    ],
  },
  {
    id: "rio",
    title: "Rio de Janeiro",
    image: rioImage,
    overview: `Rio de Janeiro est célèbre pour sa culture vibrante, la statue du Christ Rédempteur, ses plages pittoresques et sa musique samba entraînante.`,
    famousPlaces: [
      {
        name: "Christ Rédempteur",
        description: `La statue du Christ Rédempteur se dresse majestueusement au sommet du mont Corcovado, surplombant Rio.`,
        image: christRedeemerImage,
      },
      {
        name: "Pain de Sucre",
        description: `Le Pain de Sucre offre des vues panoramiques sur la ville, en faisant l'un des lieux les plus spectaculaires de Rio.`,
        image: sugarloafMountainImage,
      },
    ],
  },
  {
    id: "new-york",
    title: "New York",
    image: newYorkImage,
    overview: `New York, la ville qui ne dort jamais, est emblématique pour ses gratte-ciels, ses spectacles de Broadway et son atmosphère énergique.`,
    famousPlaces: [
      {
        name: "Statue de la Liberté",
        description: `La Statue de la Liberté est un symbole de liberté offrant des vues exceptionnelles sur le port de New York.`,
        image: statueOfLibertyImage,
      },
      {
        name: "Times Square",
        description: `Connu pour ses néons et son atmosphère animée, Times Square est le cœur de Manhattan.`,
        image: timesSquareImage,
      },
    ],
  },
];

export default destinations;
