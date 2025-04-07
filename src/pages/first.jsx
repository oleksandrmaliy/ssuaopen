// import { useState, useEffect } from 'react';
// import { fetchData } from '../components/api.js';
import Title from '../components/title.jsx';

const First = () => {
  // const [fotos, setFotos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function getFoto() {
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       const array = await fetchData();

  //       setFotos(array);
  //     } catch (error) {
  //       setError(true);
  //       alert(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getFoto();
  // }, []);

  // console.log(fotos);
  return (
    <>
      <Title>First page</Title>
      {/*  {error && <p className="mb-4 text-red-500 font-bold">{error.message}</p>}
      {loading && <p className="mb-4 text-red-500 font-bold"> Loading...</p>}
       <p>{fotos.length > 0 ? fotos[0].id : 'Title not found'}</p> 
      <ul className="p-4 bg-red-300 rounded-xl">
        {fotos.map(
          ({ id, title, brand, category, description, thumbnail, images }) => (
            <li key={id} className="mb-4 p-4 bg-orange-300 rounded-xl">
              <h3>Ім&apos;я: {title}</h3>
              <h3>Бренд: {brand}</h3>
              <p>Категорія: {category}</p>
              <p className="mb-4">Опис: {description}</p>
              <img
                src={thumbnail}
                alt="Placeholder small image"
                className="w-20 h-auto mb-4 bg-green-300 rounded-xl"
              />
              <img
                src={images[0]}
                alt="Placeholder big image"
                className="w-96 h-auto bg-blue-300 rounded-xl"
              />
            </li>
          ),
        )}
      </ul>*/}
    </>
  );
};

export default First;
