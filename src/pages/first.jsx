import { useState, useEffect } from 'react';
import { fetchData } from '../components/api.js';
import Title from '../components/title.jsx';

const First = () => {
  const [fotos, setFotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getFoto() {
      try {
        setLoading(true);
        setError(null);
        const array = await fetchData();
        console.log(array);
        setFotos(array);
      } catch (error) {
        setError(true);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
    getFoto();
  }, []);

  console.log(fotos);
  return (
    <>
      <Title>First page</Title>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      {loading && <p style={{ color: 'red' }}> Loading...</p>}
      {/* <p>{fotos.length > 0 ? fotos[4526].title : 'Title not found'}</p> */}
      {/* <ul>
        {fotos.map(({ albumId, id, title }) => (
          <li key={id}>
            <h3>{albumId}</h3>
            <h3>{id}</h3>
            <p>{title}</p>
            <img src="https://picsum.photos/150" alt="random pic" width={150} />
            <img
              src="https://picsum.photos/600"
              alt="Placeholder image"
              width={600}
            />
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default First;
