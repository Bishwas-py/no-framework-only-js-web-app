import AbstractView from "./AbstractView.js";

const htmlContent = `
<h1>All Settings</h1>
<div class="contents">
    <div class="content">
        <h2>Welcome to settings...</h2>
        <p>Change your getting here.
        </p>
        <hr/>
        <a href="/" data-link>Go To Dashboard</a>
        <a href="/posts" data-link>Go To Posts</a>
    </div>
</div>
`

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings")
    }
    async getHTML () {
        return htmlContent
    }
}