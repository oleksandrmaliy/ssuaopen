import { useDispatch, useSelector } from 'react-redux';
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
  const dispatch = useDispatch();
  const { players, isLoading, error } = useSelector((state) => state.surfers);

  useEffect(() => {
    dispatch(fetchSurfers());
  }, [dispatch]);

  return (
    <div className="my-10">
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{players.length > 0 && JSON.stringify(players, null, 2)}</p>
    </div>
  );
};
export default Surfers;
