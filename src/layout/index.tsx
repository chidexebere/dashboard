import Aside from './Aside';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-row w-full mx-auto my-4 min-h-screen ">
        <Aside />
        <main className="w-full mx-2 p-4 border-x-2 lg:basis-3/4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
