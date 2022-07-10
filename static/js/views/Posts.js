import AbstractView from "./AbstractView.js";

const htmlContent = `
<h1>All Posts</h1>
<div class="contents">
    <div class="content">
        <h2>How to make a single page app only with Javascript?</h2>
        <p>Making a single page app only with Js is not that hard.
        You just need to understand some basics of Document Manipulation with Javascript.
        </p>
        <hr/>
        <a href="/" data-link>Go To Dashboard</a>
        <a href="/settings" data-link>Go To Settings</a>
    </div>
</div>
`

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts")
    }
    async getHTML () {
        return htmlContent
    }
}