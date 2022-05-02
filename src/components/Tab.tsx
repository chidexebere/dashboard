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
      className={cx('tab', isActive ? 'tab--active' : '')}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Tab;
