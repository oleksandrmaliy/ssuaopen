import { fetchSurfers } from '../redux/operations';
import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSurfers } from '../redux/surfersSlice';
// import Title from '../components/title.jsx';
// import Surfer from '../components/surfer.jsx';
// import { Link } from 'react-router-dom';
// import { useId } from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const Surfers = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const surfers = await fetchSurfers();
        console.log(surfers);
      } catch (error) {
        console.error('Error fetching surfers:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="border-4 border-red-500 bg-red-200">
      <h2 className="mb-4 text-2xl font-bold">Surfers Page</h2>
      {/* Add your surfer components or data display here */}
    </div>
  );
};
export default Surfers;
