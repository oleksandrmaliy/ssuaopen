import axios from 'axios';

// axios.defaults.baseURL = 'https://dummyjson.com/test';
axios.defaults.baseURL = 'https://dummyjson.com/products';

// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//     },

// https://jsonplaceholder.typicode.com/albums/1/photos

export const fetchData = async () => {
  const response = await axios.get(`/`);
  console.log(response.data.products);
  return response.data.products;
};
