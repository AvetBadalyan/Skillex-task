import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import BottomNav from '../BottomNav/BottomNav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './Layout.scss';

const DESKTOP_QUERY = '(min-width: 1024px)';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    () => window.matchMedia(DESKTOP_QUERY).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    const handleChange = (event) => setIsSidebarOpen(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((open) => !open);

  return (
    <div className="layout">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="layout__body">
        <Header />

        <div className="layout__scroll">
          <Main />
          <Footer />
        </div>
      </div>

      <BottomNav isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Layout;
