import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import './assets/application.css'
import 'bootstrap/dist/css/bootstrap.css';
import books from './books.json';




/* const book = {
  id: 1,
  title: "Functional Programming in C#",
  description: "TL; DR: Это книга — обновленная версия «The Majesty of Vue.js 1» , которая была продана тиражом более 800 экземпляров и считалась одним из первых и лучших учебных ресурсов по изучению Vue.js. Данная книга будет постоянно обновляться, чтобы идти в ногу с изменениями Vue.js 2, и новые главы будут добавлены в течение длительного времени. Эта книга адресована всем, кто интересуется изучением Vue.js. Она будет полезной для разработчиков, только начинающих во Vue.js, а также для тех, кто уже использует Vue.js и хочет расширить свои знания. Она также пригодится тем разработчикам, которые хотят перейти на Vue.js 2. 20% от каждой продажи этой книги будут передан Эвану Ю (Evan You) для поддержки его отличной работы, которую он делает для экосистемы Vue. Если вы ищете более продвинутые темы, такие как Vuex, Firebase и т.д., посмотрите на Vue School.",
  shortDescription: "Изучите Vue.js 2 с нуля! Эта книга проведет вас по пути популярного JavaScript-фреймворка Vue.js! К концу этой книги вы сможете быстро создавать фронтенд-приложения и повышать производительность существующих проектов с помощью интеграции Vue.js 2.",
  language: "english",
  progressInPercent: "100",
  cover: "https://d2sofvawe08yqg.cloudfront.net/vuejs2-russian/hero?1549499096",
  minPrice: "8.99",
  suggestedPrice: "15.99",
  collectedPrice: "100",
  expectedPrice: "200",  
  authors: [
  {
    ID: 1,
    name: "Kostas Maniatis",
    email: "author@mail.ru",
    avatar: "https://d39qdlcrvnra4b.cloudfront.net/avatars/621961/original/10431434_10204697047417520_2094120759699997132_n.jpg?1449791337",
    authorInformation: "Kostas was Alex's apprentice but now has become an aspiring web developer and the arch nemesis of his former master. Currently, he runs vuejsfeed.com and is a core member of Vuedo."
  },
  {
    ID: 2,
    name: "Alex Kyriakidis",
    email: "author@mail.ru",
    avatar: "https://d39qdlcrvnra4b.cloudfront.net/avatars/583898/original/ego_new_tetragono.jpg?1498943878",
    authorInformation: "Alex Kyriakidis is an ambitious, award winner developer, software engineer perfectionist and currently addicted to Laravel and Vue.js. He has worked with several teams delivering high quality cross-platform applications, APIs and websites. Alex spends his time learning cutting edge technologies every day, striving to make the best developer out of himself."
  },
  {
    ID: 3,
    name: "Alexey Pyltsyn",
    email: "author@mail.ru",
    avatar:"https://d39qdlcrvnra4b.cloudfront.net/avatars/775735/original/4408379.png?1530973790",
    authorInformation: "Web developer (mostly PHP and JavaScript). Maintainer of official Russian documentation on PHP. Translate articles on web development into Russian for devSchacht."
  },
  {
    ID: 4,
    name: "Roman Sadzhenytsia",
    email: "author@mail.ru",
    avatar: "https://d39qdlcrvnra4b.cloudfront.net/avatars/1391374/original/36825394.jpeg?1536406484",
    authorInformation: "Python/Javascript enthusiast"
  }
]
}; */


ReactDOM.render(
  <App books={books} />,
  document.getElementById('root')
);
