import cx from 'classnames';
import { HomeIcon, ChipIcon } from '@heroicons/react/outline';
import NavItem from '../components/NavItem';
import { Dispatch, SetStateAction } from 'react';

interface AsideProps {
  className: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const Aside = ({ className, selected, setSelected }: AsideProps) => {
  return (
    <nav id="nav" className={className}>
      <span
        className="absolute h-10 w-full bg-slate-400 rounded shadow ease-out transition-transform transition-medium"
        style={{ transform: `translateY(calc(100% * ${selected}))` }}
      />
      <ul className="relative">
        <NavItem
          path="/"
          isSelected={selected === 0}
          handleSelected={() => setSelected(0)}
          text="Home"
        >
          <HomeIcon
            className={cx(
              'h-6 w-6 transition-all ease-out transition-medium',
              selected === 0 ? 'text-white' : 'text-slate-400',
            )}
          />
        </NavItem>
        <NavItem
          path="/product"
          isSelected={selected === 1}
          handleSelected={() => setSelected(1)}
          text="Product"
        >
          <ChipIcon
            className={cx(
              'h-6 w-6 transition-all ease-out transition-medium',
              selected === 1 ? 'text-white' : 'text-slate-400',
            )}
          />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Aside;
