import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// actions
import { changeSidebarType, checkSession } from '../redux/actions';

// constants
import { SideBarTypes } from '../constants';

// utils
import { changeBodyAttribute } from '../utils';
import { Navigate } from 'react-router-dom';

const Topbar = React.lazy(() => import('./Topbar'));
const LeftSidebar = React.lazy(() => import('./LeftSidebar'));
const Footer = React.lazy(() => import('./Footer'));


const loading = () => <div className=""></div>;


const SideBar = () => {
    const dispatch = useDispatch();

    const {
        leftSideBarType,
        authReducer
    } = useSelector((state) => ({
        leftSideBarType: state.Layout.leftSideBarType,
        authReducer: state.authReducer
    }));

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    useEffect(() => {
        dispatch(checkSession());
    }, [dispatch])

    useEffect(() => {
        changeBodyAttribute('data-sidebar-size', leftSideBarType);
    }, [leftSideBarType]);

    const openMenu = () => {
        setIsMenuOpened(!isMenuOpened);
        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.remove('sidebar-enable');
            } else {
                document.body.classList.add('sidebar-enable');
            }
        }
    };

    const updateDimensions = useCallback(() => {
        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth > 768 && window.innerWidth <= 1028) {
            dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED));
        } else if (window.innerWidth > 1028) {
            dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT));
        }
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [dispatch, updateDimensions]);


    const isCondensed = leftSideBarType === SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED;

    if (!authReducer.isLoggedIn) {
        return <Navigate to="/auth/login" />;
    } else {
        return (
            <div id="wrapper">
                <Suspense fallback={loading()}>
                    <Topbar openLeftMenuCallBack={openMenu} hideLogo={false} />
                </Suspense>
                <Suspense fallback={loading()}>
                    <LeftSidebar isCondensed={isCondensed} />
                </Suspense>
                <div className="content-page">
                    <div className="content">
                        <Container fluid>
                            <Suspense fallback={loading()}><Outlet></Outlet></Suspense>
                        </Container>
                    </div>

                    {/* <Suspense fallback={loading()}>
                        <Footer />
                    </Suspense> */}
                </div>
            </div>
        );
    }
};
export default SideBar;
