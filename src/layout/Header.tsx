import { MenuIcon } from '@heroicons/react/solid';
import { Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-white.svg';
import NavItem from '../components/NavItem';

interface HeaderProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const Header = ({ selected, setSelected }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="h-auto w-full bg-indigo-900 px-4 shadow sticky top-0 z-50">
      <nav className="flex items-center justify-start p-4">
        <button
          className="mr-20 lg:hidden"
          type="button"
          onClick={toggleShowMenu}
        >
          <MenuIcon className="h-8 w-8 text-white" />
        </button>
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="Innoloft Logo"
            width="150"
            height="100"
          />
        </Link>
      </nav>
      {showMenu && (
        <ul>
          <NavItem
            path="/"
            isSelected={selected === 0}
            handleSelected={() => setSelected(0)}
            text="Home"
          />
          <NavItem
            path="/product"
            isSelected={selected === 1}
            handleSelected={() => setSelected(1)}
            text="Product"
          />
        </ul>
      )}
    </header>
  );
};

export default Header;
