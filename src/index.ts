import axios from 'axios';
import { url } from './constants';

console.log('hello from index.ts again');

const fetchNumberTrivia = async (num: number) => {
  const response = await axios.get(`${url}/${num}`);
  console.log(response.data);
};

fetchNumberTrivia(13);
