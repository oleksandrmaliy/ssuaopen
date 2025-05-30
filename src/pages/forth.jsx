// page with registration ops

import Title from '../components/title.jsx';
import Registration from '../components/registration';
import Login from '../components/login';
import Participation from '../components/participation';

const Forth = () => {
  return (
    <div className="">
      <Title>Registration page</Title>
      <Registration className="mb-4" />
      <Login className="mb-4" />
      <Participation className="mb-4" />
    </div>
  );
};

export default Forth;
