import { Link } from 'react-router-dom';
import cx from 'classnames';

interface NavItemProps {
  children?: React.ReactNode;
  path: string;
  isSelected: boolean;
  text: string;
}

const NavItem = ({ children, path, isSelected, text }: NavItemProps) => {
  return (
    <li>
      <Link
        to={path}
        className="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
      >
        {children}
        <span
          className={cx(
            'ml-2 text-sm font-medium transition-all ease-out transition-medium',
            isSelected ? 'text-white' : 'text-slate-400',
          )}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};

export default NavItem;
