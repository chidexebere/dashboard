import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../appState/store';
import NavItem from '../components/NavItem';
import { MenuIcon } from '@heroicons/react/solid';
import Switch from '../components/Switch';
import { useCachedAppConfig } from '../api/hooks';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { ON } = useSelector((state: RootState) => state.app);
  const APP_ID = ON === true ? 1 : 2;
  const appConfigData = useCachedAppConfig(APP_ID);

  const selectedNav = useSelector((state: RootState) => state.app.selectedNav);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className="h-auto w-full px-4 shadow sticky top-0 z-50"
      style={{ backgroundColor: `${appConfigData?.mainColor}` }}
    >
      <nav className="flex items-center p-4 lg:justify-between">
        <button
          className="basis-1/6 lg:hidden"
          type="button"
          onClick={toggleShowMenu}
        >
          <MenuIcon className="h-8 w-8 text-white" />
        </button>
        <Link to="/" className="basis-4/6 sm:basis-5/6">
          <img
            src={appConfigData?.logo}
            alt="Logo"
            loading="lazy"
            width="100"
            height="50"
          />
        </Link>
        <div className="basis-1/6 items-end sm:basis-0 flex items-center gap-x-1">
          <span className="text-white hidden sm:block">APP</span>
          <Switch />
        </div>
      </nav>
      {showMenu && (
        <ul>
          <NavItem path="/" isSelected={selectedNav === 0} text="Home" />
          <NavItem
            path="/product"
            isSelected={selectedNav === 1}
            text="Product"
          />
        </ul>
      )}
    </header>
  );
};

export default Header;
