import { TriviaButton } from './TriviaButton';

window.addEventListener('load', () => {
  document.querySelector('main')!.appendChild(new TriviaButton());
});
