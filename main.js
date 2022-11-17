import "./main.scss";

console.log("Happy Hacking! :-)")

class StatusList extends HTMLElement {
    constructor() {
        super();

        this.countStatus = this.dataset.statutsElement;

        console.log(this.countStatus);
    }

    async getUserData() {
        const user = await fetch("https://randomuser.me/api/")
        .then(resp => resp.json())
        .then(data => data);

        return user;
    }


}

customElements.define("status-list", StatusList);