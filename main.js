console.log("Happy Hacking! :-)")
import { status } from "./data";
import "./main.scss";


class StatusList extends HTMLElement {
    constructor() {
        super();

        this.countStatus = this.dataset.statutsElement;

        console.log(this.countStatus);

        this.renderStatus();
    }

    renderStatus() {
        status.map(user => {
            const li = document.createElement('li');
            const image = document.createElement('img');
            image.src = user.picture;
            image.alt = user.name;

            li.append(image);

            this.querySelector('ul').append(li);
        })
    }

}

customElements.define("status-list", StatusList);