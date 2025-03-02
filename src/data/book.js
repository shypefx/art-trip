import parisImage from "../images/books/paris.png";
import bruxellesImage from "../images/books/bruxelles.png";
import tokyoImage from "../images/books/tokyo.jpeg";
import rioImage from "../images/books/rio.jpeg";
import newYorkImage from "../images/books/new_york.jpg";

const books = [
  {
    id: "paris",
    title: "Paris",
    image: parisImage,
    description: `Art Trip : Paris, ville de l’amour vous invite à explorer Paris sous un angle unique, où le street art se mêle aux monuments emblématiques. Ce guide vous fait découvrir des fresques et graffitis, comme le célèbre Mur des Je t’aime à Montmartre, tout en vous emmenant à la Tour Eiffel, à Notre-Dame et à l’Arc de Triomphe. Vous vivrez une expérience enrichissante alliant patrimoine historique et art contemporain, dévoilant ainsi une nouvelle facette de la capitale.`,
    date: "10 août 2025",
    pages: 144,
    isbn: "978-278-920-829-88",
    price: "17€",
    format: "12,5 x 19cm, Relié",
  },
  {
    id: "bruxelles",
    title: "Bruxelles",
    image: bruxellesImage,
    description: `Art Trip : Bruxelles, Murs et Bulles vous invite à découvrir la fusion unique du street art et de la bande dessinée dans les rues de Bruxelles. Ce guide explore des fresques monumentales comme celles de l’artiste Jef Aérosol et des œuvres inspirées de la BD. Vous découvrirez des lieux emblématiques comme la Grand-Place, l'Atomium, ou encore le musée Magritte, tout en explorant des quartiers tendance comme le Canal de Bruxelles. Vivez une immersion dans l'art urbain et la culture bruxelloise.`,
    date: "10 août 2025",
    pages: 142,
    isbn: "978-278-920-829-88",
    price: "17€",
    format: "12,5 x 19cm, Relié",
  },
  {
    id: "tokyo",
    title: "Tokyo",
    image: tokyoImage,
    description: `Art Trip : Tokyo, Manga et culture Nippone vous plonge dans une ville où tradition et modernité s’entrelacent. Ce guide explore l’art urbain de Tokyo, influencé par le manga et le minimalisme japonais. Vous découvrirez des œuvres de street art, comme celles de Takashi Murakami, tout en explorant des quartiers emblématiques tel que Shibuya. Vous aurez aussi l'occasion de découvrir des lieux fascinants comme le temple Senso-ji, ou la Skytree, offrant une immersion dans une capitale où chaque coin de rue allie design graphique et culture nippone.`,
    date: "10 novembre 2025",
    pages: 156,
    isbn: "978-278-920-829-88",
    price: "17€",
    format: "12,5 x 19cm, Relié",
  },
  {
    id: "rio",
    title: "Rio de Janeiro",
    image: rioImage,
    description: `Art Trip : Rio de Janeiro, Rythmes et Couleurs vous plonge dans l'univers vibrant du street art carioca, où chaque fresque géante raconte une histoire de liberté, de fête et de résistance. De la favela de Santa Teresa à la plage d'Ipanema, découvrez des œuvres colorées célébrant l'héritage du carnaval, la musique et l’identité afro-brésilienne. Ce guide vous mène aussi à des sites emblématiques comme les plages de Copacabana, le Pain de Sucre et le Christ Rédempteur, offrant une immersion totale dans la culture, l'histoire et la fête de Rio.`,
    date: "10 novembre 2025",
    pages: 152,
    isbn: "978-278-920-829-88",
    price: "17€",
    format: "12,5 x 19cm, Relié",
  },
  {
    id: "newyork",
    title: "New York",
    image: newYorkImage,
    description: `Art Trip : New York Stories vous invite à découvrir New York sous un angle inédit, où chaque mur et ruelle raconte une histoire. Ce guide vous fait explorer des quartiers emblématiques comme Williamsburg ou encore Bushwick, célèbre pour ses fresques murales, comme celles de l'artiste Shepard Fairey. Vous y découvrirez des œuvres d'art uniques, telles que les graffitis de Jean-Michel Basquiat. En plus du street art, vous visiterez des monuments incontournables comme la Statue de la Liberté, Times Square, ou le pont de Brooklyn.`,
    date: "10 août 2025",
    pages: 144,
    isbn: "978-278-920-829-88",
    price: "17€",
    format: "12,5 x 19cm, Relié",
  },
];

export default books;
