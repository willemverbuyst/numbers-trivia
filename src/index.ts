import axios from 'axios';
import { url } from './constants';

(() => {
  const fetchNumberTrivia = async () => {
    const response = await axios.get(`${url}/23`);
    console.log("Here's some trivia for ya: ", response.data);
  };

  class TriviaButton extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'closed' });
      const rootEl = document.createElement('button');
      rootEl.textContent = 'Trivia in the console';
      rootEl.addEventListener('click', () => fetchNumberTrivia());
      shadow.appendChild(rootEl);
    }
  }
  window.customElements.define('trivia-button', TriviaButton);
  document.querySelector('main')!.appendChild(new TriviaButton());
})();
