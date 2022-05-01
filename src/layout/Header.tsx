import { MenuIcon } from '@heroicons/react/solid';
import { Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem';

interface HeaderProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  mainColor: string;
  logo: string;
}

const Header = ({ selected, setSelected, mainColor, logo }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className="h-auto w-full px-4 shadow sticky top-0 z-50"
      style={{ backgroundColor: `${mainColor}` }}
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
          <img src={logo} alt="Logo" width="100" height="50" />
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
