import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './Layout.scss';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((open) => !open);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Stop the page scrolling behind the sidebar while it is open.
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  return (
    <div className="layout">
      <Sidebar isOpen={isSidebarOpen} />

      <div
        className={
          isSidebarOpen
            ? 'layout__backdrop layout__backdrop--visible'
            : 'layout__backdrop'
        }
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <div className="layout__body">
        <Header onToggleSidebar={toggleSidebar} />

        <div className="layout__scroll">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
