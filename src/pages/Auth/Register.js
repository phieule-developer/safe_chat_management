import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcons from 'feather-icons-react';

//actions
import { signupUser } from '../../redux/actions';

// components
import { VerticalForm, FormInput } from '../../components';

import AuthLayout from './AuthLayout';

// images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';


const Register = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => ({
        loading: state.authReducer.loading,
    }));

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Họ và tên không được để trống'),
            email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
            password: yup.string().required('Mật khẩu không được để trống'),
            checkboxsignup: yup.bool().oneOf([true]),
        })
    );

    /*
     * handle form submission
     */
    const onSubmit = (formData) => {
        dispatch(signupUser(formData['name'], formData['email'], formData['password']));
    };

    return (
        <>

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

                <h6 className=" h5 mb-0 mt-3">Tạo tài khoản</h6>
                <p className="text-muted mt-1 mb-4">Tạo miễn phí tài khoản để sử dụng NOW PROXY</p>

                <VerticalForm
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{}}
                    formClass="authentication-form">
                    <FormInput
                        label="Họ và tên"
                        type="text"
                        name="name"
                        startIcon={<FeatherIcons icon={'user'} className="icon-dual" />}
                        placeholder="Họ và tên"
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Email'}
                        type="email"
                        name="email"
                        startIcon={<FeatherIcons icon={'mail'} className="icon-dual" />}
                        placeholder={'Email'}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Mật khẩu'}
                        type="password"
                        name="password"
                        startIcon={<FeatherIcons icon={'lock'} className="icon-dual" />}
                        placeholder={'Mật khẩu'}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Tôi đồng ý với điều khoản'}
                        type="checkbox"
                        name="checkboxsignup"
                        containerClass={'mb-3'}
                        defaultChecked
                    />

                    <div className="mb-3 text-center d-grid">
                        <Button type="submit" disabled={loading}>
                            Đăng ký tài khoản
                        </Button>
                    </div>
                    <p className="text-muted text-center">
                        Bạn đã có tài khoản?
                        <Link to='/auth/login' className="text-primary fw-bold ms-1">
                            Đăng nhập
                        </Link>
                    </p>
                </VerticalForm>
            </AuthLayout>
        </>
    );
};

export default Register;
