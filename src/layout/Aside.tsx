import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import { HomeIcon, ChipIcon } from '@heroicons/react/outline';
import NavItem from '../components/NavItem';
import { selectNav } from '../appState/slice';
import { RootState } from '../appState/store';
import { useQueryClient } from 'react-query';

const Aside = () => {
  const { ON } = useSelector((state: RootState) => state.app);
  const APP_ID = ON === true ? 1 : 2;
  const queryClient = useQueryClient();
  const appConfigData = queryClient.getQueryData<ConfigObject>([
    'appConfig',
    APP_ID,
  ]);

  const selectedNav = useSelector((state: RootState) => state.app.selectedNav);
  const dispatch = useDispatch();

  return (
    <nav className="hidden mx-4 mt-4 sticky top-0 basis-1/4 lg:block">
      <span
        className="absolute h-10 w-full rounded shadow ease-out transition-transform transition-medium"
        style={{
          backgroundColor: appConfigData?.mainColor,
          transform: `translateY(calc(100% * ${selectedNav}))`,
        }}
      />
      <ul className="relative">
        <NavItem
          path="/"
          isSelected={selectedNav === 0}
          handleSelected={() => dispatch(selectNav(0))}
          text="Home"
        >
          <HomeIcon
            className={cx(
              'h-6 w-6 transition-all ease-out transition-medium',
              selectedNav === 0 ? 'text-white' : 'text-slate-400',
            )}
          />
        </NavItem>
        <NavItem
          path="/product"
          isSelected={selectedNav === 1}
          handleSelected={() => dispatch(selectNav(1))}
          text="Product"
        >
          <ChipIcon
            className={cx(
              'h-6 w-6 transition-all ease-out transition-medium',
              selectedNav === 1 ? 'text-white' : 'text-slate-400',
            )}
          />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Aside;
