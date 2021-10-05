import SearchingSection from './components/SearchingSection.js';
import Loading from './components/Loading.js';
import Error from './components/Error.js';

import { api } from "./api/theCatAPI.js";
import { getItem, setItem } from "./utils/sessionStorage.js";

export default class App {
    constructor($target) {
        const keywords = getItem('keywords');
        const data = getItem('data');

        const searchingSection = new SearchingSection({
            $target,
            keywords,
            onSearch: async keyword => {
                loading.toggleSpinner();

                const response = await api.fetchCats(keyword);
                if (!response.isError) {
                    console.log(response.data);
                    setItem('data', response.data);

                    loading.toggleSpinner();
                } else {
                    error.setState(response.data);
                }
            },
            onRandom: async () => {
                loading.toggleSpinner();

                const response = await api.fetchRandomCats();
                if (!response.isError) {
                    console.log(response);
                    setItem('data', response.data);
                    loading.toggleSpinner();
                } else {
                    error.setState(response.data);
                }

            }
        });





        const loading = new Loading({
            $target
        });

        const error = new Error({
            $target
        });
    }

    setState(nextData) {
        console.log(this);
        this.data = nextData;
        this.searchResult.setState(nextData);
    }
}
