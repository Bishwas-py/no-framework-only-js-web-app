import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHTML () {
        return `
        <h1>Welcome back, Dom</h1>
        <p>
          Wie Geht's? Wanna have some milche kaffee?
        </p>
        <p>
            Bitte, I love Miche Kaffee.
        </p>
        <hr/>
        <a href="/posts" data-link>Go To Posts</a>
        <a href="/settings" data-link>Go To Settings</a>

        `;
    }
}