import React, { useEffect } from 'react';
import { Button, Row, Col, Alert } from 'react-bootstrap';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcons from 'feather-icons-react';
import { VerticalForm, FormInput } from '../../components';

import AuthLayout from './AuthLayout';
import { RouterLinks } from '../../routes';

// actions
import { loginUser } from '../../redux/actions';

// components


// images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';


export const Login = () => {

    const dispatch = useDispatch();

    const { isLoggedIn, isLoading, error } = useSelector(state => ({
        isLoggedIn: state.authReducer.isLoggedIn,
        isLoading: state.authReducer.isLoading,
        error: state.authReducer.error
    }));

    useEffect(() => {
        // dispatch(resetAuth());
    }, [dispatch]);

    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
            password: yup.string().required('Mật khẩu không được để trống'),
        })
    );

    const onSubmit = (form_data) => {
        dispatch(loginUser(form_data.email, form_data.password));
    };

    const location = useLocation();
    const nextPage = location.state && location.state.from ? location.state.from : RouterLinks.DASHBOARD;


    if (isLoggedIn) {
        if (nextPage !== RouterLinks.LOGIN_PAGE)
            return <Navigate to={nextPage} />;
        else
            return <Navigate to={RouterLinks.DASHBOARD} />;
    };
    return (
        <AuthLayout>
            <div className="auth-logo mx-auto">
                <Link to="/" className="logo logo-dark text-center">
                    <span className="logo-lg">
                        <img src={logoDark} alt="" height="24" />
                    </span>
                </Link>

                <Link to="/" className="logo logo-light text-center">
                    <span className="logo-lg">
                        <img src={logoLight} alt="" height="24" />
                    </span>
                </Link>
            </div>

            <h1 className="h5 mb-0 mt-3">ĐĂNG NHẬP</h1>
            <p className="text-muted mt-1 mb-4">
                Nhập email và mật khẩu để đăng nhập vào trang quản trị
            </p>

            {error && (
                <Alert variant="danger" className="my-2">
                    {error}
                </Alert>
            )}
            <VerticalForm
                onSubmit={onSubmit}
                resolver={schemaResolver}
                formClass="authentication-form">
                <FormInput
                    type="email"
                    name="email"
                    label={'Email'}
                    startIcon={<FeatherIcons icon={'mail'} className="icon-dual" />}
                    placeholder={'Email'}
                    containerClass={'mb-3'}
                />
                <FormInput
                    type="password"
                    name="password"
                    label={'Mật khẩu'}
                    startIcon={<FeatherIcons icon={'lock'} className="icon-dual" />}
                    placeholder={'Mật khẩu'}
                    containerClass={'mb-3'}></FormInput>

                <div className="mb-3 text-center d-grid">
                    <Button type="submit" disabled={isLoading}>
                        Đăng nhập
                    </Button>
                </div>
                <Link to="/auth/forget-password" className="float-end ms-1">
                    Quên mật khẩu?
                </Link>
            </VerticalForm>
        </AuthLayout>

    );
};

export default Login;
