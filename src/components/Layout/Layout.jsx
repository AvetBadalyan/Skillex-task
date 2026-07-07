import { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import BottomNav from '../BottomNav/BottomNav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './Layout.scss';

// 1024px matches $screen-desktop in src/styles/_breakpoints.scss. The
// desktop rail starts expanded; the mobile/tablet off-canvas drawer starts
// closed — same isOpen flag, different default per breakpoint.
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

      <BottomNav onMenuToggle={toggleSidebar} />
    </div>
  );
}

export default Layout;
