import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import './assets/application.css'
import 'bootstrap/dist/css/bootstrap.css';


const book = {
  title: "Functional Programming in C#",
  description: "This book goes beyond the introductory ideas of functional programming, while progressively building on practical examples in a comprehensive manner. Each example is accompanied by online autonomous .NET Fiddle This book goes beyond the introductory ideas of functional programming, while progressively building on practical examples in a comprehensive manner. Each example is accompanied by online autonomous .NET Fiddle",
  numberOfPages: "300",
  language: "english",
  progressInPercent: "95",
  cover: "https://d2sofvawe08yqg.cloudfront.net/functional-programming-in-cSharp-with-categories/hero?1589225607",
  minPrice: "10",
  suggestedPrice: "10",
  collectedPrice: "100",
  expectedPrice: "200",  
  author: {
    name: "dimitris papadimitriou",
    email: "author@mail.ru",
    avatar: "https://d39qdlcrvnra4b.cloudfront.net/avatars/1068594/original/unnamed.jpg?1589294727",
    authorInformation: "I have more than 12 years’ experience as full stack developer and Architect.I Like to stay in touch with all the latest developments in the field, as well as the foundational Theoretical Computer science and algorithm Analysis and Design",           
  },
};


ReactDOM.render(
  <App book={book} />,
  document.getElementById('root')
);
