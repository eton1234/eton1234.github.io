const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
<link rel="stylesheet" href="styles.css">

<nav role="navigation" class="top-nav">
<ul>
    <li aria-current="page"> <a role="button" aria-label="Home" href = "index.html"> Home</a></li>
    <li>  <a role="button" href = "projects.html">Projects</a> </li>
    <li id="contact-link"> <a role="button" href="index.html#contact-info"> Contact Info </a> </li>
</ul>
</nav>
`

class Nav extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navTemplate.content);
    }
}

customElements.define('nav-component', Nav);

    // <li tabindex=3> <a aria-haspopup="true" aria-expanded = "false"><a href = "contact-page.html">Contacts</a></a>
    //     <ul class="pulldown-menu">
    //         <li> <a href = "about-me.html">Login</a></li>
    //         <li> Logout</li>
    //         <li> Create Account</li>
    //     </ul> 
    // </li>