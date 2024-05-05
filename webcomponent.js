const template = document.createElement("template");
template.innerHTML = `
<style>
    h3 {
        color: green;
    }
</style>
<h3>
    <slot></slot>
</h3>`;
class CustomWebComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define("custom-web-component", CustomWebComponent);

// no shadow dom?
// styles bleed out and into the custom element and we'll have a css specificity nightmare on our hands
// -> not a scalable approach especially if we plan on embedding into other pages with their own stylesheets

/**
 * Iteration 2
 * fixed css bleed issue by creating web element inside a shadow dom
 * shadow dom prevents this by encapsulating its content
 */
