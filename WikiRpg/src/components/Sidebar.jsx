import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <nav className="sidebar-container">
        <div className="sidebar-logo">
            <a href="/">WikiRpg</a>
        </div>
        <ul className="sidebar-navigation">
            <li a href="/personagens">Personagens</li>
             <li a href="/lore">Lore</li>
              <li a href="/mapas">Mapas</li>
                <li a href="/itens">Itens</li>

        </ul>
    </nav>   

  );
};

export default Sidebar