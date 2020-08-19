export class TriviaElement extends HTMLElement {
  set trivia(trivia: string) {
    `
      <h1>${trivia}</h1>
    `;
  }
}

customElements.define('trivia-element', TriviaElement);
