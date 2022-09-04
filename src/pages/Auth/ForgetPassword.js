import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcons from 'feather-icons-react';

//actions
import { forgotPassword } from '../../redux/actions';

// components
import { VerticalForm, FormInput } from '../../components';

import AuthLayout from './AuthLayout';

// images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';


const ForgetPassword = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => ({
        loading: state.authReducer.loading
    }));

    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required('Vui lòng nhập email'),
        })
    );

    const onSubmit = (formData) => {
        dispatch(forgotPassword(formData['email']));
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

                <h6 className="h5 mb-0 mt-3">Quên mật khẩu</h6>
                <p className="text-muted mt-1 mb-4">
                    Nhập email của bạn và chúng tôi sẽ gửi bạn email hướng dẫn quá trình quên mật khẩu.
                </p>
                <VerticalForm
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    formClass="authentication-form">
                    <FormInput
                        label={'Email'}
                        type="email"
                        name="email"
                        startIcon={<FeatherIcons icon={'mail'} className="icon-dual" />}
                        placeholder={'Email'}
                        containerClass={'mb-3'}
                    />
                    <div className="mb-0 text-center">
                        <Button className="w-100" type="submit" disabled={loading}>
                            Quên mật khẩu
                        </Button>
                    </div>
                </VerticalForm>
            </AuthLayout>
        </>
    );
};

export default ForgetPassword;
