import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import fetchSurfers from '../redux/operations';

// import video1 from '../assets/video1.MOV';

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
  // const { id, name, createdAt, avatar, score, week, file } = players;

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
          <ul>
            {players.map(({ id, name, createdAt, avatar, score, week }) => (
              <li key={id} className="mb-10">
                <h4>Player: {name}</h4>
                <img src={avatar} alt="player" width="100" height="auto" />
                <p>Score: {score}</p>
                <p>Week: {week}</p>
                <p>Date: {createdAt}</p>
                <p>
                  Video:
                  {
                    <video controls width="100">
                      <source src="/public/video2.mp4" type="video/mp4" />
                      Ваш браузер не підтримує відео.
                    </video>
                  }
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Surfers;
// {"createdAt":"2025-04-03T20:22:53.560Z","name":"Donald Purdy","avatar":"https://avatars.githubusercontent.com/u/90262131","score":95,"week":21,"file":"file 1","id":"1"}
