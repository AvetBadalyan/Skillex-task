import './Sidebar.scss';

function Sidebar({ isOpen }) {
  return (
    <aside
      className={`sidebar${isOpen ? ' sidebar--open' : ''}`}
      aria-label="Sidebar navigation"
    >
      <nav className="sidebar__nav">{/* menu items */}</nav>

      <div className="sidebar__footer">{/* theme toggle */}</div>
    </aside>
  );
}

export default Sidebar;
