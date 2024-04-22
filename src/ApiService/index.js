import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '40365251-7556fc461aeff4605ce69e2bc';

export const getImages = async (query, page) => {
    const response = await axios.get(
        `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    );
    const data = await response.data;
    return data;
};
