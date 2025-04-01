import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 6hLhnVta4Qqc9fbYaoUz4Y925d0Zb0gDWv9B6SETMcw'
        },
        params: {
            query: term,
        },

    });

    return response.data.results;
};

export { searchImages };