import { useDispatch } from 'react-redux';
import { deleteSurfer } from '../redux/operations';

const Player = ({ player }) => {
  const dispatch = useDispatch();
  // const { id, name, avatar } = player;
  return (
    <div className="mb-10">
      <h4>Player: {player.name}</h4>
      <p>ID: {player.id}</p>
      <img src={player.avatar} alt="player" width="120" height="auto" />
      <p>Score: {player.score}</p>
      <p>Week: {player.week}</p>
      <p>Date: {player.date}</p>
      <p>File: {player.file}</p>
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
    </div>
  );
};

export default Player;
