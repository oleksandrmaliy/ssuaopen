import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchSurfers } from '../redux/operations';

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

import Player from './player';

const Surfers = () => {
  const dispatch = useDispatch();
  const { players, isLoading, error } = useSelector((state) => state.surfers);
  // const { player.id } = players;

  useEffect(() => {
    dispatch(fetchSurfers());
  }, [dispatch]);

  // const handleDelete = () => dispatch(deleteSurfer(player.id));

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {/* <p>{players.length > 0 && JSON.stringify(players)}</p> */}
      {players.length > 0 && (
        <div>
          <ul>
            {players.map((player) => (
              <li key={player.id}>
                <Player player={player} />
                {/* <li key={player.id} className="mb-10">
                  <h4>Player: {player.name}</h4>
                  <img
                    src={player.avatar}
                    alt="player"
                    width="120"
                    height="auto"
                  />
                  <p>Score: {player.score}</p>
                  <p>Week: {player.week}</p>
                  <p>Date: {player.createdAt}</p>
                  <p>
                    Video:
                    {
                      <video controls width="120">
                        <source src="/video2.mp4" type="video/mp4" />
                        Ваш браузер не підтримує відео.
                      </video>
                    }
                  </p>
                  <button
                    className="cursor-pointer"
                    onClick={() => dispatch(deleteSurfer(player.id))}
                  >
                    Delete Player
                  </button>
                </li> */}
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
