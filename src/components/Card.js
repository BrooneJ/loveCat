export default class Card {
    constructor({ $target, data }) {
        this.data = data.data;
        this.card = document.createElement('article');
        this.card.className = 'cat-card';
        this.card.dataset.id = data.id;

        $target.appendChild(this.card);

        this.render();
    }

    render() {
        const url = this.data.url;
        const { name, origin } = this.data;

        const cardImage = document.createElement('img');
        cardImage.className = 'card-image';
        cardImage.classList.add('lazy');
        cardImage.src = url;

        const cardInfo = document.createElement('article');
        cardInfo.className = 'card-info';

        const catName = document.createElement('p');
        catName.className = 'cat-name';
        catName.innerText = name;

        const catOrigin = document.createElement('p');
        catOrigin.className = 'cat-origin';
        catOrigin.innerText = origin;

        cardInfo.appendChild(catName);
        cardInfo.appendChild(catOrigin);
        this.card.appendChild(cardImage);
        this.card.appendChild(cardInfo);
    }
}