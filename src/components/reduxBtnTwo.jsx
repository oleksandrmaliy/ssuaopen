import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTwo, subTwo } from '../redux/secondSlice';
import { useSelector } from 'react-redux';

const ReduxBtnTwo = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const stateTwo = (state) => state.first.two;

  const secondvalue = useSelector(stateTwo);

  const add = () => {
    dispatch(addTwo(value));
  };

  const sub = () => {
    dispatch(subTwo(value));
  };

  return (
    <div className="mt-10 flex flex-row gap-8">
      <p>{secondvalue}</p>
      <input
        type="number"
        name="number"
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
        className="w-1/12 border-2 border-red-500"
      />
      <button
        onClick={add}
        className="w-1/12 cursor-pointer border-2 border-red-500"
      >
        One +
      </button>
      <button
        onClick={sub}
        className="w-1/12 cursor-pointer border-2 border-red-500"
      >
        One -
      </button>
    </div>
  );
};

export default ReduxBtnTwo;
