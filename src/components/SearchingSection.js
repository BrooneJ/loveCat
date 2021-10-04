import { setItem } from '../utils/sessionStorage.js';

export default class SearchBar {
    constructor({ $target, keywords, onSearch, onRandom }) {
        this.recent = keywords; // 객체
        this.onSearch = onSearch;
        this.onRandom = onRandom;
        this.section = document.createElement('section');
        this.section.className = 'searching-section';

        $target.appendChild(this.section);

        this.render();

        this.focusOnSearchBox();
    }

    forcusOnSearchBox() { // 현재 페이지에 엑세스 할 때 검색창에 포커스가 가도록
        const searchBox = document.querySelector('search-box');
        searchBox.focus();
    }

    addRecentKeyword(keyword) { // 최근 검색한 5개의 검색어 저장
        if (this.recent.includes(keyword)) return; // 이미 검색한 5개의 검색어 일 경우
        if (this.recent.length == 5) this.recent.shift(); // 현재 5개가 저장되어 있을 경우 젤 오래된 거 삭제

        this.recent.push(keyword);
        setItem('keyword', this.recent);

        this.render();
    }

    searchByKeyword(keyword) {
        if (keyword.length == 0) return; // 아무것도 입력하지 않았을 경우

        this.addRecentKeyword(keyword); // 입력한 검색어를 5개 검색어에 등록
        this.onSearch(keyword); // 검색
    }

    deletKeyword() { // 검색창의 input을 클릭시 기존 단어가 삭제 되도록
        const searchBox = document.querySelector('.search-box');
        searchBox.value = '';
    }

    render() { // 화면을 랜더링 html에서가 아니라 js로 만듦
        this.section.innerHTML = ''; // section 태그를 초기화

        const randomBtn = document.createElement('span');
        randomBtn.className = 'random-btn';
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

        randomBtn.addEventListener('click', this.onRandom);
        searchBox.addEventListener('focus', this.deletKeyword);
        searchBox.addEventListener('keyup', event => {
            if (event.keyCode == 13) { // enter 버튼을 놓을 때 이벤트 발생
                this.searchByKeyword(searchBox.value);
            }
        });

        wrapper.appendChild(searchBox);
        wrapper.appendChild(recentKeywords);
        this.section.appendChild(randomBtn);
        this.section.appendChild(wrapper);
    }
}
