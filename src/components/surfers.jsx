import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import fetchSurfers from '../redux/operations';

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
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {/* <p>{players.length > 0 && JSON.stringify(players)}</p> */}
      {players.length > 0 && (
        <div>
          <ol>players.map()</ol>
          <p> ok</p>
        </div>
      )}
    </div>
  );
};
export default Surfers;
