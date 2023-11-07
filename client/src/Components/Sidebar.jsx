import React from 'react';
import './Sidebar.css';
import {SidebarInfo} from './SidebarInfo'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className= "sidebarlist">
      {SidebarInfo.map((value, key) => {
        return (
          <li key ={key} className = "row">
            {""}
            <div>{value.icon}</div>{""}
            <div>{value.title}</div>
          </li>
        );
      })}

      </ul>
    </div>
  );
}

export default Sidebar;