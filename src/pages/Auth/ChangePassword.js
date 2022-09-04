import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '../../components';
import PageTitle from '../../components/PageTitle';

const ChangePassword = () => {
    /*
    form validation schema
    */
    const schemaResolver2 = yupResolver(
        yup.object().shape({
            email2: yup.string().required('Please enter Email address'),
            password2: yup.string().required('Please enter Password'),
            confirmPassword2: yup
                .string()
                .oneOf([yup.ref('password'), null], "Passwords don't match")
                .required('This value is required.'),
            webSite: yup.string().required('Please enter URL'),
            horizontalCheck: yup.bool().oneOf([true]),
        })
    );

    const methods = useForm({
        resolver: schemaResolver2,
    });
    const {
        // handleSubmit,
        register,
        control,
    } = methods;

    return (
        <>
            <PageTitle
                title={'Thay đổi mật khẩu'}
            />
            <Card>
                <Card.Body>
                    <h4 className="header-title text-center mt-3 mb-4">Đổi mật khẩu</h4>
                    <form name="chat-form" id="chat-form">
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={{ offset: 3 }} md={2}>
                                Mật khẩu hiện tại<span className="text-danger">*</span>
                            </Form.Label>
                            <Col md={4}>
                                <FormInput
                                    type="password"
                                    name="password2"
                                    placeholder="Mật khẩu hiện tại"
                                    register={register}
                                    key="password2"
                                    // errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label sm={{ offset: 3 }} column md={2}>
                                Mật khẩu mới<span className="text-danger">*</span>
                            </Form.Label>
                            <Col md={4}>
                                <FormInput
                                    type="password"
                                    name="confirmPassword2"
                                    placeholder="Mật khẩu mới"
                                    register={register}
                                    key="confirmPassword2"
                                    // errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label sm={{ offset: 3 }} column md={2}>
                                Nhập lại mật khẩu mới<span className="text-danger">*</span>
                            </Form.Label>
                            <Col md={4}>
                                <FormInput
                                    type="url"
                                    name="webSite"
                                    placeholder="Nhập lại mật khẩu mới"
                                    register={register}
                                    key="webSite"
                                    // errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 text-center">
                            <Col>
                                <Button variant="primary" className="me-1" type="submit">
                                    Đổi mật khẩu
                                </Button>
                            </Col>
                        </Form.Group>
                    </form>
                </Card.Body>
            </Card>
        </>
    );
};
export default ChangePassword;