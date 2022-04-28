import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full h-20">
      <nav className="flex items-center justify-center bg-teal-500 p-4">
        <img className="logo" src={logo} alt="Innoloft Logo" />
      </nav>
    </header>
  );
};

export default Header;
