import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOne, subOne } from '../redux/firstSlice';
import { useSelector } from 'react-redux';

const ReduxBtn = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const stateOne = (state) => state.first.one;

  const firstvalue = useSelector(stateOne);
  console.log(value);

  const add = () => {
    dispatch(addOne(value));
  };

  const sub = () => {
    dispatch(subOne(value));
  };

  return (
    <div className="mt-10 flex flex-row gap-8">
      <p>{firstvalue}</p>
      <input
        type="number"
        name="number"
        className="w-1/12 border-2 border-red-500"
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
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

export default ReduxBtn;
