const API_ENDPOINT =
    "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async url => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw errorData;
        }
    } catch (e) {
        console.log(e)
        // throw {
        //     message: e.message,
        //     status: e.status
        // };
    }
}

const api = {
    fetchCats: async keyword => {
        try {
            const catLists = await request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
            const requests = catLists.data.map(async catList => {
                return await request(`${API_ENDPOINT}/api/cats/${catList.id}`);
            });

            const responses = await Promise.all(requests);

            console.log('responses:', responses);
            const filterObj = responses.filter(el => el !== undefined);
            const result = Array.prototype.concat.apply([], filterObj);

            return {
                isError: false,
                data: result
            };
        } catch (e) {
            return {
                isError: true,
                data: e
            }
        }
    },

    fetchRandomCats: async () => {
        try {
            const randoms = await request(`${API_ENDPOINT}/api/cats/random50`);
            const requests = randoms.data.map(async catList => {
                return await request(`${API_ENDPOINT}/api/cats/${catList.id}`);
            });

            const responses = await Promise.all(requests);

            console.log('responses:', responses);
            const filterObj = responses.filter(el => el !== undefined);
            const result = Array.prototype.concat.apply([], filterObj);
            return {
                isError: false,
                data: result
            };
        } catch (e) {
            return {
                isError: true,
                data: e
            };
        }
    }
};

export { api };