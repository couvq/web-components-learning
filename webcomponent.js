class CustomWebComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
        h3 {
            color: green;
        }
    </style>
    <h3>
        ${this.innerText}
    </h3>`;
  }
}

customElements.define("custom-web-component", CustomWebComponent);

// no shadow dom? 
// styles bleed out and into the custom element and we'll have a css specificity nightmare on our hands
// -> not a scalable approach especially if we plan on embedding into other pages with their own stylesheets
