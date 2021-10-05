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
        throw {
            message: e.message,
            status: e.status
        };
    }
}

const api = {
    fetchCats: async keyword => {
        try {
            const catLists = await request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);

            return {
                isError: false,
                data: catLists
            };
        } catch (e) {
            return {
                isError: true,
                data: e
            }
        }
    },

    catId: async id => {
        try {
            const catPic = await request(`${API_ENDPOINT}/api/cats/${id}`);
            return {
                isError: false,
                data: catPic
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
            const result = await request(`${API_ENDPOINT}/api/cats/random50`);
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