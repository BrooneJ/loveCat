import Card from "./Card.js";

export default class ResultsSection {
    // constructor({$target, data, onClick, onScroll}){
    constructor({ $target, data, onClick }) {
        this.data = data;
        this.onClick = onClick;
        // this.onScroll = onScroll;
        this.section = document.createElement('section');
        this.section.className = 'results-section';

        $target.appendChild(this.section);

        this.render();
        // lazy
        // scroll
    }

    setState(data) { // onSearch, onRandom 함수를 호출하면 실행
        this.data = data;
        this.render();
        // lazy
    }

    findCatById(id) {
        const result = this.data.find(cat => cat.id == id);
        return result;
    }

    render() {
        if (!this.data) return;

        this.section.innerHTML = '';

        if (this.data.length > 0) {
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';

            this.data.forEach(cat => {
                new Card({
                    $target: cardContainer,
                    data: cat
                });
            });

            // Event Delegation 위해서 cardContainer에 이벤트를 추가한다.
            cardContainer.addEventListener('click', e => {
                const path = e.path; // 클릭한 고양이 카드
                const card = path.find(comp => comp.className == 'cat-card');
                if (card) {
                    const id = card.dataset.id; // 해당 카드에서 id를 찾아냄
                    const catInfo = this.findCatById(id);

                    this.onClick(catInfo);
                }
            })

            this.section.appendChild(cardContainer);
        } else {
            const noticeSection = document.createElement('section');
            noticeSection.className = 'notice-section';

            const notice = document.createElement('h2');
            notice.className = 'notice';
            notice.innerText = '검색 결과가 없습니다.';

            const noticeImage = document.createElement('img');
            noticeImage.className = 'notice-image';
            noticeImage.src = 'src/img/emptybox.png';

            noticeSection.appendChild(notice);
            noticeSection.appendChild(noticeImage);
            this.section.appendChild(noticeSection);
        }
    }
}