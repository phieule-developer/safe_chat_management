
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

//constants
import { LayoutTypes, SideBarTypes } from '../constants/layout';

import { LanguageDropdown } from './../components/LanguageDropdown';
import { NotificationDropdown } from './../components/NotificationDropdown';
import { ProfileDropdown } from './../components/ProfileDropdown';

// images
import profilePic from '../assets/images/users/avatar-1.jpg';
import logoSm from '../assets/images/logo-sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoLight from '../assets/images/logo-light.png';

import { changeSidebarType } from '../redux/actions';

// get the profilemenu
const ProfileMenus = [
    {
        label: 'Tài khoản của tôi',
        icon: 'user',
        redirectTo: '/app/profile',
    },
    {
        label: 'Đổi mật khẩu',
        icon: 'lock',
        redirectTo: '/app/change_password',
    }
];
const Notifications = [
    {
        id: 1,
        text: 'Cristina Pride',
        subText: 'Hi, How are you? What about our next meeting',
        avatar: profilePic,
    }
];

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack }) => {
    const dispatch = useDispatch();

    const [isopen, setIsopen] = useState(true);

    const navbarCssClasses = navCssClasses || '';
    const containerCssClasses = !hideLogo ? 'container-fluid' : '';

    const { layoutType, leftSideBarType } = useSelector((state) => ({
        layoutType: state.Layout.layoutType,
        leftSideBarType: state.Layout.leftSideBarType,
    }));

    const handleLeftMenuCallBack = () => {
        setIsopen(!isopen);
        openLeftMenuCallBack();
        // if (openLeftMenuCallBack) {

        // };
    };

    const toggleLeftSidebarWidth = () => {
        if (leftSideBarType === 'default' || leftSideBarType === 'compact')
            dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED));
        if (leftSideBarType === 'condensed') dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT));
    };

    return (
        <React.Fragment>
            <div className={`navbar-custom ${navbarCssClasses}`}>
                <div className={containerCssClasses}>
                    {!hideLogo && (
                        <div className="logo-box">
                            <Link to="/" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={logoSm} alt="" height="24" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoDark} alt="" height="24" />
                                </span>
                            </Link>
                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logoSm} alt="" height="24" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoLight} alt="" height="24" />
                                </span>
                            </Link>
                        </div>
                    )}

                    <ul className="list-unstyled topnav-menu float-end mb-0">
                        <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                            <LanguageDropdown />
                        </li>
                        <li className="dropdown notification-list topbar-dropdown">
                            <NotificationDropdown notifications={Notifications} />
                        </li>
                        <li className="dropdown notification-list topbar-dropdown">
                            <ProfileDropdown profilePic={profilePic} menuItems={ProfileMenus} username={'Lê Văn Phiêu'} />
                        </li>
                    </ul>

                    <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                        {layoutType !== LayoutTypes.LAYOUT_HORIZONTAL && (
                            <li>
                                <button
                                    className="button-menu-mobile d-none d-lg-block"
                                    onClick={toggleLeftSidebarWidth}
                                >
                                    <FeatherIcon icon="menu" />
                                    <i className="fe-menu"></i>
                                </button>
                            </li>
                        )}

                        <li>
                            <button className="button-menu-mobile d-lg-none d-bolck" onClick={handleLeftMenuCallBack}>
                                <FeatherIcon icon="menu" />
                            </button>
                        </li>

                        {/* Mobile menu toggle (Horizontal Layout) */}
                        <li>
                            <Link
                                to="#"
                                className={classNames('navbar-toggle nav-link', {
                                    open: isopen,
                                })}
                                onClick={handleLeftMenuCallBack}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Topbar;
