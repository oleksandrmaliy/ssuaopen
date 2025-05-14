import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchSurfers } from '../redux/operations';

import Player from './player';

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

      {players.length > 0 && (
        <div>
          <ul>
            {players.map((player) => (
              <li key={player.id}>
                <Player player={player} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Surfers;
