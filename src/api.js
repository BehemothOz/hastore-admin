import axios from 'axios';

const getCatalogItems = () =>
  axios.get('/api/admin/categories')
    .then(data => data);


const getCategories = () => {
  console.log(2);
};

export { getCatalogItems, getCategories };
