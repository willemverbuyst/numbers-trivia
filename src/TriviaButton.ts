import axios from 'axios';
import { url } from './constants';

const fetchNumberTrivia = async () => {
  const response = await axios.get(`${url}/23`);
  console.log(
    `%cHere's some trivia for ya: 
    ${response.data}`,
    'background: yellow; color:black; font-size: 30px;'
  );
};

export class TriviaButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const tButton = document.createElement('button');
    tButton.textContent = 'Trivia';
    tButton.style.fontSize = '3rem';
    tButton.addEventListener('click', () => fetchNumberTrivia());
    shadow.appendChild(tButton);
  }
}

window.customElements.define('trivia-button', TriviaButton);
