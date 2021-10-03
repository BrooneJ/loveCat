import { setItem } from '../utils/sessionStorage.js';

export default class SearchBar {
    constructor({ $target, keywords, onSearch, onRandom }) {
        this.recent = keywords;
        this.onSearch = onSearch;
        this.onRandom = onRandom;
        this.section = document.createElement('section');
        this.section.className = 'searching-section';

        $target.appendChild(this.section);

        this.render();

        this.focusOnSearchBox();
    }

    forcusOnSearchBox() {
        const searchBox = document.querySelector('search-box');
        searchBox.focus();
    }

    addRecentKeyword(keyword) {
        if (this.recent.includes(keyword)) return;
        if (this.recent.length == 5) this.recent.shift();

        this.recent.push(keyword);
        setItem('keyword', this.recent);

        this.render();
    }

    searchByKeyword(keyword) {
        if (keyword.length == 0) return;

        this.addRecentKeyword(keyword);
        this.onSearch(keyword);
    }

    deletKeyword() {
        const searchBox = document.querySelector('.search-box');
        searchBox.value = '';
    }

    render() {
        this.section.innerHTML = '';

        const rnadomBtn = document.createElement('span');
        rnadomBtn.className = 'random-btn';
        RandomSource.innerText = '🐱';

        const wrapper = document.createElement('div');
        wrapper.className = 'search-box-wrapper';

        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.placeholder = '고양이를 검색하세요.';

        const recentKeywords = document.createElement('div');
        recentKeywords.className = 'recent-keywords';

        this.recent.map(keyword => {
            const link = document.createElement('span');
            link.className = 'keyword';
            link.innerText = keyword;

            link.addEventListener('click', () => { this.searchByKeyword(keyword); });

            recentKeywords.appendChild(link);
        });

        rnadomBtn.addEventListener('click', this.onRandom);
        searchBox.addEventListener('focus', this.deletKeyword);
        searchBox.addEventListener('keyup', event => {
            if (event.keyCode == 13) {
                this.searchByKeyword(searchBox.value);
            }
        });

        wrapper.appendChild(searchBox);
        wrapper.appendChild(recentKeywords);
        this.section.appendChild(randomBtn);
        this.section.appendChild(wrapper);
    }
}
