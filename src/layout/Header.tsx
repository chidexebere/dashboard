import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectNav } from '../appState/slice';
import { RootState } from '../appState/store';
import NavItem from '../components/NavItem';
import { MenuIcon } from '@heroicons/react/solid';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const selectedNav = useSelector((state: RootState) => state.app.selectedNav);
  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const appConfigData = queryClient.getQueryData<ConfigObject>('appConfig');

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className="h-auto w-full px-4 shadow sticky top-0 z-50"
      style={{ backgroundColor: `${appConfigData?.mainColor}` }}
    >
      <nav className="flex items-center justify-start p-4">
        <button
          className="mr-20 lg:hidden"
          type="button"
          onClick={toggleShowMenu}
        >
          <MenuIcon className="h-8 w-8 text-white" />
        </button>
        <Link to="/">
          <img src={appConfigData?.logo} alt="Logo" width="100" height="50" />
        </Link>
      </nav>
      {showMenu && (
        <ul>
          <NavItem
            path="/"
            isSelected={selectedNav === 0}
            handleSelected={() => dispatch(selectNav(0))}
            text="Home"
          />
          <NavItem
            path="/product"
            isSelected={selectedNav === 1}
            handleSelected={() => dispatch(selectNav(1))}
            text="Product"
          />
        </ul>
      )}
    </header>
  );
};

export default Header;
