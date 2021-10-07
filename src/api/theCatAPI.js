const API_ENDPOINT = 'https://api.thecatapi.com/v1';

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
};

const api = {
    fetchCats: async keyword => {
        /*
            keyword로 breed를 찾고 각 breed의 id로 이미지를 찾는다.
        */
        try {
            const breeds = await request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
            const requests = breeds.map(async breed => {
                return await request(`${API_ENDPOINT}/images/search?limit=20&breed_ids=${breed.id}`);
            });
            const responses = await Promise.all(requests);
            const result = Array.prototype.concat.apply([], responses);
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
    },
    fetchRandomCats: async () => {
        /*
            랜덤으로 20개의 고양이 사진을 리턴한다.
        */
        try {
            const result = await request(`${API_ENDPOINT}/images/search?limit=20`);
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
// const API_ENDPOINT =
//     "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";
// const request = async url => {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             return data;
//         } else {
//             const errorData = await response.json();
//             throw errorData;
//         }
//     } catch (e) {
//         console.log(e)
//         // throw {
//         //     message: e.message,
//         //     status: e.status
//         // };
//     }
// }

// const api = {
//     fetchCats: async keyword => {
//         try {
//             const catLists = await request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
//             const requests = catLists.data.map(async catList => {
//                 return await request(`${API_ENDPOINT}/api/cats/${catList.id}`);
//             });
//             const responses = await Promise.all(requests);

//             console.log('responses:', responses);
//             const filterObj = responses.filter(el => el !== undefined);
//             const tmp = filterObj.map(el => el.data);
//             console.log('tmp', tmp);
//             // const result = Array.prototype.concat.apply([], filterObj);
//             // console.log('result:', result)
//             return {
//                 isError: false,
//                 data: tmp
//             };
//         } catch (e) {
//             return {
//                 isError: true,
//                 data: e
//             }
//         }
//     },

//     fetchRandomCats: async () => {
//         try {
//             const randoms = await request(`${API_ENDPOINT}/api/cats/random50`);
//             const requests = randoms.data.map(async catList => {
//                 return await request(`${API_ENDPOINT}/api/cats/${catList.id}`);
//             });

//             const responses = await Promise.all(requests);
//             const tmp = [];
//             console.log('responses:', responses);
//             responses.then(el => tmp.push(el))
//             console.log('responses:', tmp);
//             // const filterObj = responses.filter(el => el !== undefined);
//             const result = Array.prototype.concat.apply([], filterObj);
//             return {
//                 isError: false,
//                 data: result
//             };
//         } catch (e) {
//             return {
//                 isError: true,
//                 data: e
//             };
//         }
//     }
// };
// export { api };
