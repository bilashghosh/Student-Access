import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import menuItems from './menuItems.json';

const Sidebar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleMenuClick = (path: string, hasSubmenu: boolean) => {
        if (hasSubmenu) {
            setActiveMenu(activeMenu === path ? null : path);
        } else {
            navigate(`${path}`);
        }
    };

    const handleSubmenuClick = (path: string) => {
        navigate(path);
    };

    return (
        <div className="sidebar">
            <div className="logo">ACADEMY OF EXAM</div>
            <ul className="sidebar-menu">
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <li
                            className={`menu-item ${item.submenu ? 'collapsible-menu' : ''}`}
                            onClick={() => handleMenuClick(item.path, !!item.submenu)}
                        >
                            <i className={`${item.icon} sidebar-icon`}></i>
                            <span className="menu-text">{item.name}</span>
                            {item.submenu && (
                                <i
                                    className={`fas ${
                                        activeMenu === item.path ? 'fa-chevron-up' : 'fa-chevron-down'
                                    } toggle-icon`}
                                    style={{ transform: activeMenu === item.path ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                ></i>
                            )}
                        </li>
                        {item.submenu && (
                            <ul className={`submenu ${activeMenu === item.path ? 'visible' : 'hidden'}`}>
                                {item.submenu.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className="menu-item submenu-item"
                                        onClick={() => handleSubmenuClick(subItem.path)}
                                    >
                                        {/* <i className={`${subItem.icon} sidebar-icon`}></i> */}
                                        <span className="menu-text">{subItem.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </React.Fragment>
                ))}
            </ul>
            <div className="sidebar-footer">
                <img src="path_to_profile_image.jpg" alt="Profile" />
                <span>Jane Doe</span>
            </div>
        </div>
    );
};

export default Sidebar;
