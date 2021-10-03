import SearchingSection from './components/SearchingSection.js';

import { getItem, setItem } from "./utils/sessionStorage.js";

export default class App {
    constructor($target) {
        const keywords = getItem('keywords');
        const data = getItem('data');

        const SearchingSection = new SearchingSection({
            $target,
            keywords,
            onSearch: keyword => {
                api.fetchCats(keyword).then(({ data }) => this.setState(data));
            },
            onRandom: async () => {

            }
        });

        this.searchResult = new SearchResult({
            $target,
            initialData: this.data,
            onClick: image => {
                this.imageInfo.setState({
                    visible: true,
                    image
                });
            }
        });

        this.imageInfo = new ImageInfo({
            $target,
            data: {
                visible: false,
                image: null
            }
        });
    }

    setState(nextData) {
        console.log(this);
        this.data = nextData;
        this.searchResult.setState(nextData);
    }
}
