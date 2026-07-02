import { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import BottomNav from '../BottomNav/BottomNav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './Layout.scss';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((open) => !open);
  const closeSidebar = () => setIsSidebarOpen(false);


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
