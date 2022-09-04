import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions';


export const ProfileDropdown = (props) => {
    const profilePic = props.profilePic || null;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dispatch = useDispatch();
    /*
     * toggle profile-dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const handleLogout = () => {
        dispatch(logoutUser());
    }
    return (
        <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                id="dropdown-profile"
                as="a"
                onClick={toggleDropdown}
                className={classNames('nav-link', 'nav-user', 'me-0', 'cursor-pointer', { show: dropdownOpen })}>
                <img src={profilePic} className="rounded-circle" alt="" />
                <span className="pro-user-name ms-2">
                    {props.username} <i className="uil uil-angle-down"></i>
                </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end profile-dropdown">
                <div onClick={toggleDropdown}>
                    <div className="dropdown-header noti-title">
                        <h6 className="text-overflow m-0">Xin chào !</h6>
                    </div>
                    {(props.menuItems || []).map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Link
                                    to={item.redirectTo}
                                    className="dropdown-item notify-item"
                                    key={i + '-profile-menu'}>
                                    <FeatherIcon icon={item.icon} className="icon-dual icon-xs me-1" />
                                    <span>{item.label}</span>
                                </Link>

                            </React.Fragment>

                        );
                    })}
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item notify-item" onClick={handleLogout}>
                        <FeatherIcon icon="log-out" className="icon-dual icon-xs me-1" />
                        <span> Đăng xuất</span>
                    </button>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};