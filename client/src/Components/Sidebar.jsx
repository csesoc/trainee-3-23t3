import React, { useState } from 'react';
import './Sidebar.css';
import { SidebarInfo } from './SidebarInfo'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? 'Close sidebar' : 'Open sidebar'}
      </button>
      {isOpen && <ul className="sidebarlist">
        {SidebarInfo.map((value, key) => {
          return (
            <a key={key} className="row" href={value.link}>
              <div className="icon">{value.icon}</div>
              <div className="title">{value.title}</div>
            </a>

          );
        })}
      </ul>}
    </div>
  );
}
export default Sidebar;