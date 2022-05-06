import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { toggleConfig } from '../appState/slice';
import { RootState } from '../appState/store';

const Switch = () => {
  const { ON } = useSelector((state: RootState) => state.app);
  const APP_ID = ON === true ? 1 : 2;

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleConfig());
  };

  return (
    <div
      className="w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
      onClick={handleToggle}
    >
      <div
        className={cx(
          'bg-black w-6 h-6 text-center rounded-full shadow-md transform duration-300 ease-in-out',
          APP_ID === 1 ? '' : 'transform translate-x-5',
        )}
      >
        <span className="font-medium text-white">{APP_ID}</span>
      </div>
    </div>
  );
};

export default Switch;
