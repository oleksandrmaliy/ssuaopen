const Player = ({ surfer }) => {
  const { id, name, avatar } = surfer;
  return (
    <li key={id}>
      <p>Nick: {name}</p>
      <p>Avatar: {avatar}</p>
    </li>
  );
};

export default Player;
