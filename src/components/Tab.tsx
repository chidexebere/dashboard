import cx from 'classnames';

interface Props {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Tab = ({ isActive, onClick, children }: Props) => {
  return (
    <span
      className={cx(
        'w-full block text-center text-sm uppercase cursor-pointer leading-tight border-x-0 border-t-0 border-b-2 border-transparent p-1 my-1 hover:border-transparent hover:bg-slate-200 focus:border-transparent',
        isActive ? 'active bg-slate-400 text-white hover:text-black' : '',
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Tab;
