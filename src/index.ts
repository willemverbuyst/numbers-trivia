import './trivia-element';
import axios from 'axios';
import { url } from './constants';

const fetchNumberTrivia = async (num: number) => {
  const response = await axios.get(`${url}/${num}`);
  console.log(response.data);

  const main = document.querySelector('main')!;

  const element = document.createElement('trivia-element');

  element.innerText = response.data;
  main.appendChild(element);
};

fetchNumberTrivia(13);
