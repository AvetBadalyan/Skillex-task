import { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import BottomNav from '../BottomNav/BottomNav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './Layout.scss';

// Keep in sync with $screen-desktop in src/styles/_breakpoints.scss.
const getInitialSidebarOpen = () =>
  window.matchMedia('(min-width: 1024px)').matches;

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(getInitialSidebarOpen);

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

      <BottomNav onToggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Layout;
