import { useState } from 'react';
import Aside from './Aside';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header setSelected={setSelected} selected={selected} />
      <div className="flex flex-row w-full mx-auto my-4 min-h-screen ">
        <Aside
          className="hidden mx-4 mt-4 sticky top-0 basis-1/4 lg:block"
          setSelected={setSelected}
          selected={selected}
        />
        <main className="w-full mx-2 p-4 border-x-2 lg:basis-3/4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
