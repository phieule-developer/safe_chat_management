import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from 'react-bootstrap';

import { getMenuItems } from '../helpers/menu';

import AppMenu from './Menu';

// images
import profileImg from '../assets/images/users/avatar-1.jpg';
import { Scrollbar } from './../components/Scrollbar';

/* user box */
const UserBox = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    /*
     * toggle dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="user-box text-center">
            <img src={profileImg} alt="" title="Mat Helme" className="rounded-circle avatar-md" />
            <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
                <Dropdown.Toggle
                    id="dropdown-notification"
                    as="a"
                    onClick={toggleDropdown}
                    className="cursor-pointer text-dark h5 mt-2 mb-1 d-block">
                    Nik Patel
                </Dropdown.Toggle>
            </Dropdown>
            <p className="text-muted">Admin Head</p>
        </div>
    );
};

/* sidebar content */
const SideBarContent = () => {
    return (
        <>
            <UserBox />

            <div id="sidebar-menu">
                <AppMenu menuItems={getMenuItems()} />
            </div>

            <div className="clearfix" />
        </>
    );
};

const LeftSidebar = ({ isCondensed }) => {
    const menuNodeRef = useRef(null);

    /**
     * Handle the click anywhere in doc
     */
    const handleOtherClick = (e) => {
        if (menuNodeRef && menuNodeRef.current && menuNodeRef.current.contains(e.target)) return;
        // else hide the menubar
        if (document.body) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOtherClick, false);

        return () => {
            document.removeEventListener('mousedown', handleOtherClick, false);
        };
    }, []);

    return (
        <React.Fragment>
            <div className="left-side-menu" ref={menuNodeRef}>
                {!isCondensed && (
                    <Scrollbar style={{ maxHeight: '100%' }} timeout={500} scrollbarMaxSize={320}>
                        <SideBarContent />
                    </Scrollbar>
                )}
                {isCondensed && <SideBarContent />}
            </div>
        </React.Fragment>
    );
};

LeftSidebar.defaultProps = {
    isCondensed: false,
};

export default LeftSidebar;
